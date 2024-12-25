import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  containerClassname?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startContent, endContent, containerClassname, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex items-center w-full rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          containerClassname
        )}
      >
        {startContent && startContent}
        <input
          type={type}
          className={cn(
            "flex-1 h-10 bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full",
            startContent ? "pl-2" : "",
            endContent ? "pr-2" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {endContent && endContent}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
