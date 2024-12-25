import useTailwindBreakpoint from "@/hooks/use-tailwind-breakpoint";
import {
  registerInter,
  registerOpenSans,
  registerRoboto,
} from "@/lib/react-pdf/fonts";
import { useEditor } from "@/store/hooks";
import { getTemplatePath } from "@/templates/resumes";
import { TemplateProps } from "@/types/template";
import { pdf } from "@react-pdf/renderer";
import "pdfjs-dist/build/pdf.worker.mjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { OnDocumentLoadSuccess } from "react-pdf/dist/esm/shared/types.js";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Actions from "./actions";
import Controls from "./controls";
import Pagination from "./pagination";

// register fonts
registerInter();
registerOpenSans();
registerRoboto();

type Props = {};

const Preview = (props: Props) => {
  const { resume, colors, template, typography } = useEditor();
  const breakpoint = useTailwindBreakpoint();
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [templateStatus, setTemplateStatus] = useState(0);
  const templateRef = useRef<React.FC<TemplateProps> | null>(null);

  const refreshPDF = useCallback(async () => {
    try {
      if (!template) return;
      const importTemplate = getTemplatePath(template.id);
      if (!importTemplate) return;

      const { default: Resume } = await importTemplate();
      templateRef.current = Resume;
      setTemplateStatus((prev) => prev + 1);
    } catch (error) {
      console.error("ERROR: ", error);
      setTemplateStatus(0);
    }
  }, [template]);

  const generatePDF = useCallback(async () => {
    if (!resume || !templateRef.current) return;
    const blob = await pdf(
      <templateRef.current
        data={resume}
        colors={colors ?? undefined}
        fontFamily={typography?.family}
        fontSizes={typography?.sizes}
      />
    ).toBlob();
    setPdfBlob(blob);
  }, [resume, colors, typography?.family, typography?.sizes]);

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
    <>
      {pdfBlob ? (
        <TransformWrapper
          minScale={0.5}
          initialScale={breakpoint === "sm" ? 0.6 : 1}
          centerOnInit
        >
          <TransformComponent
            wrapperClass="!w-full !max-w-full !h-full"
            contentClass="lg:!w-full lg:!max-w-full lg:!h-full items-center justify-center"
          >
            <Document file={pdfBlob} onLoadSuccess={onLoadSuccess}>
              <Page pageNumber={page} />
            </Document>
          </TransformComponent>
          <Controls />
          <Pagination maxPage={maxPage} page={page} setPage={setPage} />
          <Actions refreshPDF={refreshPDF} downloadPDF={downloadPDF} />
        </TransformWrapper>
      ) : (
        <p>Loading PDF...</p>
      )}
    </>
  );
};

export default Preview;
