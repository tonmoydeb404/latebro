import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React, { useRef } from "react";

export interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
  hideLabels?: boolean;
  direction?: "x" | "y"; // Added direction prop
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  hideLabels,
  direction = "x", // Default to horizontal direction
}) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const scrollToCurrentStep = (stepIndex: number) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea && scrollArea.children.length) {
      const stepElement = scrollArea.children[stepIndex] as HTMLElement;

      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: "smooth",
          block: direction === "y" ? "center" : "nearest",
          inline: direction === "x" ? "center" : "nearest",
        });
      }
    }
  };

  React.useEffect(() => {
    scrollToCurrentStep(currentStep - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  return (
    <>
      <ScrollArea
        className={cn(
          "rounded-md",
          direction === "x" ? "whitespace-nowrap w-full" : "h-full"
        )}
      >
        <div
          className={cn(
            "flex items-center p-4",
            direction === "x" ? "flex-row" : "flex-col"
          )}
          ref={scrollAreaRef}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "flex",
                direction === "x"
                  ? "flex-col items-center"
                  : "flex-row items-start"
              )}
            >
              <div
                className={cn(
                  "flex",
                  direction === "x"
                    ? "flex-row items-center"
                    : "flex-col items-start"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center",
                    direction === "x" ? "flex-col" : "flex-row",
                    !hideLabels ? "" : "z-10"
                  )}
                >
                  <div
                    onClick={() => onStepClick(step.number)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border",
                      step.number === currentStep
                        ? "bg-primary text-primary-foreground border-transparent"
                        : step.number < currentStep
                        ? "bg-primary text-primary-foreground border-transparent"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {step.number < currentStep ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  {!hideLabels && (
                    <div
                      className={cn(
                        "text-xs text-center w-20",
                        step.number === currentStep
                          ? "text-foreground font-bold"
                          : "text-foreground",
                        direction === "x"
                          ? "text-center mt-2"
                          : "text-start ml-2"
                      )}
                    >
                      {step.label}
                    </div>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      direction === "x"
                        ? "w-16 h-[2px] -mx-5"
                        : "h-16 w-[2px] mx-5 -mb-5",
                      direction === "x" && !hideLabels ? "mb-5" : "z-0",
                      step.number <= currentStep ? "bg-primary" : "bg-slate-200"
                    )}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <ScrollBar
          orientation={direction === "x" ? "horizontal" : "vertical"}
        />
      </ScrollArea>
    </>
  );
};

export default Stepper;
