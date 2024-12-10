import useTailwindBreakpoint from "@/hooks/use-tailwind-breakpoint";
import { useEditor } from "@/store/hooks";
import { getTemplate } from "@/templates/resumes";
import { Resume } from "@/types/resume";
import { pdf } from "@react-pdf/renderer";
import { useSearchParams } from "next/navigation";
import "pdfjs-dist/build/pdf.worker.mjs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { OnDocumentLoadSuccess } from "react-pdf/dist/esm/shared/types.js";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Actions from "./actions";
import Pagination from "./pagination";

type Props = {};

const Preview = (props: Props) => {
  const { resume } = useEditor();
  const searchParams = useSearchParams();
  const breakpoint = useTailwindBreakpoint();
  const templateId = searchParams.get("template");
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [templateStatus, setTemplateStatus] = useState(0);
  const templateRef = useRef<React.FC<{ data: Resume }> | null>(null);
  const template = useMemo(() => {
    return templateId ? getTemplate(templateId) : undefined;
  }, [templateId]);

  const refreshPDF = useCallback(async () => {
    try {
      if (!template) throw new Error("Template not found!");

      const { default: Resume } = await template.import();
      templateRef.current = Resume;
      setTemplateStatus((prev) => prev + 1);
    } catch (error) {
      console.error("ERROR: ", error);
      setTemplateStatus(0);
    }
  }, [template]);

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
  }, [refreshPDF]);

  useEffect(() => {
    if (templateStatus) {
      generatePDF();
    }
  }, [generatePDF, templateStatus]);

  // ----------------------------------------------------------------------
  const [maxPage, setMaxPage] = useState(0);
  const [page, setPage] = useState(1);
  const onLoadSuccess: OnDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    setMaxPage(numPages);
  };

  return (
    <div className="relative min-h-screen">
      {pdfBlob ? (
        <TransformWrapper
          minScale={0.5}
          initialScale={breakpoint === "sm" ? 0.6 : 1}
          centerOnInit
        >
          <TransformComponent
            wrapperClass="!w-full !max-w-full !h-screen"
            contentClass="lg:!w-full lg:!max-w-full lg:!h-screen items-center justify-center"
          >
            <Document file={pdfBlob} onLoadSuccess={onLoadSuccess}>
              <Page pageNumber={page} />
            </Document>
          </TransformComponent>
        </TransformWrapper>
      ) : (
        <p>Loading PDF...</p>
      )}

      {pdfBlob && (
        <Pagination maxPage={maxPage} page={page} setPage={setPage} />
      )}
      {pdfBlob && <Actions refreshPDF={refreshPDF} downloadPDF={downloadPDF} />}
    </div>
  );
};

export default Preview;
