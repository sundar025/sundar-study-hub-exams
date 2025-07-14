import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

interface Certificate {
  id: string;
  subject: string;
  certificate_type: string;
  issued_date: string;
  certificate_data: any;
}

export const useCertificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchCertificates();
    }
  }, [user]);

  const fetchCertificates = async () => {
    try {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('issued_date', { ascending: false });

      if (error) throw error;
      setCertificates(data || []);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateCertificate = async (subject: string, completionPercentage: number) => {
    if (!user || completionPercentage < 100) return;

    try {
      // Check if certificate already exists
      const existingCert = certificates.find(cert => cert.subject === subject);
      if (existingCert) {
        toast({
          title: "Certificate Already Exists",
          description: `You already have a certificate for ${subject}`,
          variant: "destructive",
        });
        return;
      }

      const certificateData = {
        studentName: user.email?.split('@')[0] || 'Student',
        subject,
        completionDate: new Date().toLocaleDateString(),
        issueDate: new Date().toLocaleDateString(),
        certificateId: `CERT-${Date.now()}`,
      };

      const { data, error } = await supabase
        .from('certificates')
        .insert({
          user_id: user.id,
          subject,
          certificate_type: 'completion',
          certificate_data: certificateData,
        })
        .select();

      if (error) throw error;

      setCertificates(prev => [data[0], ...prev]);
      
      toast({
        title: "Certificate Generated!",
        description: `Congratulations! Your ${subject} certificate is ready.`,
      });

      return data[0];
    } catch (error) {
      console.error('Error generating certificate:', error);
      toast({
        title: "Error",
        description: "Failed to generate certificate",
        variant: "destructive",
      });
    }
  };

  const downloadCertificate = (certificate: Certificate) => {
    const { studentName, subject, completionDate, certificateId } = certificate.certificate_data;
    
    // Create a simple HTML certificate
    const certificateHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate of Completion</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
          .certificate { background: white; padding: 40px; margin: 20px auto; max-width: 800px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
          h1 { color: #333; font-size: 2.5em; margin-bottom: 10px; }
          h2 { color: #667eea; font-size: 1.8em; margin: 20px 0; }
          .student-name { font-size: 2em; color: #764ba2; font-weight: bold; margin: 20px 0; }
          .subject { font-size: 1.5em; color: #333; margin: 20px 0; }
          .date { color: #666; margin: 30px 0; }
          .certificate-id { color: #999; font-size: 0.9em; margin-top: 40px; }
        </style>
      </head>
      <body>
        <div class="certificate">
          <h1>Certificate of Completion</h1>
          <p>This is to certify that</p>
          <div class="student-name">${studentName}</div>
          <p>has successfully completed the course</p>
          <div class="subject">${subject}</div>
          <div class="date">Completed on: ${completionDate}</div>
          <div class="certificate-id">Certificate ID: ${certificateId}</div>
        </div>
      </body>
      </html>
    `;

    // Create and download the certificate
    const blob = new Blob([certificateHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject}_Certificate_${certificateId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Certificate Downloaded!",
      description: "Your certificate has been saved to your downloads.",
    });
  };

  return {
    certificates,
    loading,
    generateCertificate,
    downloadCertificate,
    fetchCertificates,
  };
};