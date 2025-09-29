-- Fix function search paths for security
ALTER FUNCTION public.handle_new_user() SET search_path = public;
ALTER FUNCTION public.assign_admin_role() SET search_path = public;