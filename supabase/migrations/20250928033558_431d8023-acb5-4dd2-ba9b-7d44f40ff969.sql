-- Create admin user and assign admin role
-- Note: This creates a user that can be used for admin login
-- The password will need to be set through the auth system

-- First, let's insert an admin user directly into auth.users (this is a special case)
-- We'll create a placeholder that needs to be completed through signup

-- Insert admin role for any user with email containing 'admin'
-- This will automatically assign admin role when admin user signs up
CREATE OR REPLACE FUNCTION public.assign_admin_role()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if the user email contains 'admin' and assign admin role
  IF NEW.email ILIKE '%admin%' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  ELSE
    -- Assign default user role for non-admin users
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'user'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically assign roles on user creation
CREATE TRIGGER on_auth_user_created_assign_role
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.assign_admin_role();

-- Also assign admin role to existing admin users if any
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email ILIKE '%admin%'
ON CONFLICT (user_id, role) DO NOTHING;