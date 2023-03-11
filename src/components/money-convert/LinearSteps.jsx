/* eslint-disable no-fallthrough */
import React, { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Pay, Recipient, You } from ".";

function getSteps() {
  return ["You", "Recipient", "Pay"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <You />;
    case 1:
      return <Recipient />;
    case 2:
      return <Pay />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <h1 className="text-4xl my-3 font-bold text-center">Thank You</h1>
      ) : (
        <>
          {getStepContent(activeStep)}

          <div className="mt-6 flex-center-between">
            <button
              className={`btn btn-primary ${activeStep === 0 && "hidden"}`}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Previous
            </button>
            <button className="mt-4 btn btn-primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
