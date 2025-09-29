-- Create user roles table for admin functionality
CREATE TYPE app_role AS ENUM ('admin', 'user');

CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON user_roles FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage all roles"
  ON user_roles FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Update subjects table policies for admin editing
DROP POLICY IF EXISTS "Admins can manage subjects" ON subjects;
CREATE POLICY "Admins can manage subjects"
  ON subjects FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Update tests table policies for admin editing
DROP POLICY IF EXISTS "Admins can manage tests" ON tests;
CREATE POLICY "Admins can manage tests"
  ON tests FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Update test_questions table policies for admin editing
DROP POLICY IF EXISTS "Admins can manage test questions" ON test_questions;
CREATE POLICY "Admins can manage test questions"
  ON test_questions FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Update topics table policies for admin editing
DROP POLICY IF EXISTS "Admins can manage topics" ON topics;
CREATE POLICY "Admins can manage topics"
  ON topics FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Insert default admin user (update email as needed)
INSERT INTO user_roles (user_id, role)
SELECT id, 'admin'::app_role 
FROM auth.users 
WHERE email = 'admin@studyhub.com'
ON CONFLICT (user_id, role) DO NOTHING;