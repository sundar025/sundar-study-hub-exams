-- Create the app_role enum type if it doesn't exist
DO $$ BEGIN
    CREATE TYPE public.app_role AS ENUM ('admin', 'user');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Ensure the user_roles table uses the correct enum type
DO $$ BEGIN
    -- Check if the column needs to be altered
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'user_roles' 
        AND column_name = 'role' 
        AND udt_name = 'app_role'
    ) THEN
        -- Alter the column to use the correct enum type if it exists but is wrong
        ALTER TABLE public.user_roles 
        ALTER COLUMN role TYPE public.app_role USING role::text::public.app_role;
    END IF;
END $$;