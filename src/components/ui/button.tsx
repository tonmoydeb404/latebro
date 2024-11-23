import { cn } from "@/lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideLoader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    placement: {
      default: "",
      left: "mr-1",
      right: "ml-1",
    },
    size: {
      default: "w-4",
      sm: "w-[14px]",
      lg: "w-[18px]",
      icon: "hidden",
    },
    loading: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    placement: "default",
    size: "default",
  },
});

interface IconProps {
  Icon: React.ElementType;
  iconPlacement?: "left" | "right";
}

interface IconRefProps {
  Icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      Icon,
      iconPlacement = "left",
      loading,
      loadingText,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const CompIcon = loading ? LucideLoader2 : Icon;
    const loadingComp =
      size === "icon" ? (
        <LucideLoader2 size={16} className="animate-spin" />
      ) : (
        loadingText
      );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "")}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {CompIcon && iconPlacement === "left" && (
          <CompIcon
            className={cn(
              iconVariants({ placement: iconPlacement, size, loading })
            )}
          />
        )}
        <Slottable>
          {loading && loadingComp ? loadingComp : props.children}
        </Slottable>
        {CompIcon && iconPlacement === "right" && (
          <CompIcon
            className={cn(
              iconVariants({ placement: iconPlacement, size, loading })
            )}
          />
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
