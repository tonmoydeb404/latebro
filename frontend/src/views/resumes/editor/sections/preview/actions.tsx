import { Button } from "@/components/ui/button";
import { LucideDownload, LucideRefreshCcw } from "lucide-react";

type Props = {
  refreshPDF: () => void;
  downloadPDF: () => void;
};

const Actions = (props: Props) => {
  const { refreshPDF, downloadPDF } = props;
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2">
      {process.env.NODE_ENV !== "production" && (
        <Button size={"icon"} variant={"outline"} onClick={refreshPDF}>
          <LucideRefreshCcw size={18} />
        </Button>
      )}

      <Button size={"icon"} onClick={downloadPDF}>
        <LucideDownload size={18} />
      </Button>
    </div>
  );
};

export default Actions;
