"use client";

import Stepper from "@/components/ui/stepper";
import { useState } from "react";
import { steps } from "./config";
import ProfileInfo from "./sections/profile-info";

type Props = {};

const ProfileCreateView = (props: Props) => {
  const [step, setStep] = useState(1);

  return (
    <div className="container max-w-screen-xl mt-10 flex">
      <Stepper
        steps={steps}
        currentStep={step}
        onStepClick={setStep}
        hideLabels={true}
        direction="y"
      />
      <div className="max-w-md w-full mt-5 ml-10">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default ProfileCreateView;
