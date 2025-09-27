-- Fix remaining security issue: Add RLS policy for security_audit_log

CREATE POLICY "Only admins can view security audit logs" 
ON public.security_audit_log 
FOR SELECT 
USING (false); -- Block access for now, will add admin role system later