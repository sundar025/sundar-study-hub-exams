import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCertificates } from "@/hooks/useCertificates";
import { useProgress } from "@/hooks/useProgress";
import { Download, Award, Calendar } from "lucide-react";
import { subjects } from "@/data/studyMaterialData";

const CertificateSection = () => {
  const { certificates, loading, generateCertificate, downloadCertificate } = useCertificates();
  const { getSubjectProgress } = useProgress();

  const availableSubjects = Object.keys(subjects);

  const handleGenerateCertificate = (subject: string) => {
    const progress = getSubjectProgress(subject);
    generateCertificate(subject, progress.percentage);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Certificates</h2>
        <p className="text-muted-foreground">
          Complete all topics in a subject to earn your certificate
        </p>
      </div>

      {/* Available Certificates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Available Certificates
          </CardTitle>
          <CardDescription>
            Complete 100% of topics to generate your certificate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableSubjects.map((subject) => {
              const progress = getSubjectProgress(subject);
              const hasCertificate = certificates.some(cert => cert.subject === subject);
              const canGenerate = progress.percentage === 100 && !hasCertificate;
              
              return (
                <Card key={subject} className="relative">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{subject}</h3>
                        <Badge variant={progress.percentage === 100 ? "default" : "secondary"}>
                          {progress.percentage.toFixed(0)}%
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {progress.completed} of {progress.total} topics completed
                      </div>

                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>

                      {canGenerate && (
                        <Button 
                          onClick={() => handleGenerateCertificate(subject)}
                          className="w-full"
                          size="sm"
                        >
                          <Award className="h-4 w-4 mr-2" />
                          Generate Certificate
                        </Button>
                      )}

                      {hasCertificate && (
                        <Badge variant="outline" className="w-full justify-center">
                          Certificate Available
                        </Badge>
                      )}

                      {progress.percentage < 100 && (
                        <div className="text-xs text-muted-foreground text-center">
                          Complete all topics to unlock certificate
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Earned Certificates */}
      {certificates.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Your Certificates
            </CardTitle>
            <CardDescription>
              Download your earned certificates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate) => (
                <Card key={certificate.id} className="border-primary/20">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{certificate.subject}</h3>
                        <Badge variant="default">
                          <Award className="h-3 w-3 mr-1" />
                          Earned
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(certificate.issued_date).toLocaleDateString()}
                      </div>

                      <Button 
                        onClick={() => downloadCertificate(certificate)}
                        className="w-full"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CertificateSection;