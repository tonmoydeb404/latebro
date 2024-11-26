import { useEditor } from "@/store/hooks";
import { Resume } from "@/types/resume";
import { pdf } from "@react-pdf/renderer";
import "pdfjs-dist/build/pdf.worker.mjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Actions from "./actions";

type Props = {};

const Preview = (props: Props) => {
  const { resume } = useEditor();
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [templateStatus, setTemplateStatus] = useState(0);
  const templateRef = useRef<React.FC<{ data: Resume }> | null>(null);

  const refreshPDF = async () => {
    try {
      const { default: Resume } = await import("./template");
      templateRef.current = Resume;
      setTemplateStatus((prev) => prev + 1);
    } catch (error) {
      setTemplateStatus(0);
    }
  };

  const generatePDF = useCallback(async () => {
    if (!resume || !templateRef.current) return;
    const blob = await pdf(<templateRef.current data={resume} />).toBlob();
    setPdfBlob(blob);
  }, [resume]);

  const downloadPDF = useCallback(async () => {
    if (!pdfBlob) return;

    // Create a temporary link to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfBlob);
    link.download = "resume.pdf";
    link.click();

    // Clean up the object URL
    URL.revokeObjectURL(link.href);
  }, [pdfBlob]);

  useEffect(() => {
    refreshPDF();
  }, []);

  useEffect(() => {
    if (templateStatus) {
      generatePDF();
    }
  }, [generatePDF, templateStatus]);

  return (
    <div className="p-10 relative min-h-screen">
      {pdfBlob ? (
        <Document file={pdfBlob}>
          <Page pageIndex={0} />
        </Document>
      ) : (
        <p>Loading PDF...</p>
      )}

      {pdfBlob && <Actions refreshPDF={refreshPDF} downloadPDF={downloadPDF} />}
    </div>
  );
};

export default Preview;
