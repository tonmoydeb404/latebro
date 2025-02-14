import { Button } from "@/components/ui/button";
import { LucideMinus, LucidePlus } from "lucide-react";

type Props = {
  page: number;
  maxPage: number;
  setPage: (n: number) => void;
};

const Pagination = (props: Props) => {
  const { page, maxPage, setPage } = props;

  if (maxPage <= 1) return null;

  return (
    <div className="flex items-center justify-center fixed md:absolute bottom-5 left-1/2 -translate-x-1/2 select-none">
      <Button
        size={"icon"}
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1);
        }}
        className="size-9"
        variant={"outline"}
      >
        <LucideMinus size={18} />
      </Button>
      <span className="min-w-10 text-center">{page}</span>
      <Button
        size={"icon"}
        disabled={page >= maxPage}
        onClick={() => {
          setPage(page + 1);
        }}
        className="size-9"
        variant={"outline"}
      >
        <LucidePlus size={18} />
      </Button>
    </div>
  );
};

export default Pagination;
