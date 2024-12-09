import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startContent, endContent, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center w-full rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        {startContent && (
          <span className="pl-1 pr-2 text-muted-foreground">
            {startContent}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex-1 h-10 bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            startContent ? "pl-2" : "",
            endContent ? "pr-2" : ""
          )}
          ref={ref}
          {...props}
        />
        {endContent && (
          <span className="pr-1 pl-2 text-muted-foreground">{endContent}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
