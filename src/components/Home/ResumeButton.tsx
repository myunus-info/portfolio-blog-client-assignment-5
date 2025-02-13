'use client';

import { FileText } from 'lucide-react';
import { Button } from '../ui/button';

export function ResumeButton() {
  const handleDownload = () => {
    const resumeUrl = '/Muhammad_Yunus_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muhammad_Yunus_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className="fixed bottom-8 right-8 shadow-lg animate-fade-in hover:translate-y-[-2px] transition-transform duration-200"
      size="lg"
      onClick={handleDownload}
    >
      <FileText className="mr-2 h-4 w-4" /> Download Resume
    </Button>
  );
}
