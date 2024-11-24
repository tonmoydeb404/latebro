import { Button } from "@/components/ui/button";
import { useEditor } from "@/store/hooks";
import { pdf } from "@react-pdf/renderer";
import { LucideRefreshCcw } from "lucide-react";
import "pdfjs-dist/build/pdf.worker.mjs";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

type Props = {};

const Preview = (props: Props) => {
  const { resume } = useEditor();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const generatePDF = async () => {
    if (!resume) return;

    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }

    const { default: Resume } = await import("./template");

    const blob = await pdf(<Resume data={resume} />).toBlob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
  };

  useEffect(() => {
    generatePDF();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume]);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-10 relative min-h-screen">
      {pdfUrl ? (
        <Document file={pdfUrl} key={pdfUrl}>
          <Page pageIndex={0} />
        </Document>
      ) : (
        <p>Loading PDF...</p>
      )}

      <div className="fixed bottom-5 right-5">
        <Button size={"icon"} onClick={generatePDF}>
          <LucideRefreshCcw />
        </Button>
      </div>
    </div>
  );
};

export default Preview;
