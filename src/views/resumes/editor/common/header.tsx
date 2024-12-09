import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  actions?: ReactNode;
} & JSX.IntrinsicElements["div"];

const Header = (props: Props) => {
  const { description, title, actions, ...others } = props;

  const children = (
    <div {...others} className={cn(others.className)}>
      <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  );

  if (actions) {
    return (
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center justify-between mb-10 sm:gap-10">
        {children}
        <div className="flex items-center">{actions}</div>
      </div>
    );
  }

  return children;
};

export default Header;
