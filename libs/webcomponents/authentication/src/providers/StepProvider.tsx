import { createContext, useState, useContext } from 'react';

enum STEPS {
  LoginStep = 'login',
  RegisterStep = 'register',
}

type TStep = 'login' | 'register';

type TProviderValues = {
  step: TStep;
  steps: {
    LoginStep: STEPS.LoginStep;
    RegisterStep: STEPS.RegisterStep;
  };
  navigate(stepName: TStep): void;
};

type TStepProvider = {
  children: any;
  defaultStep?: TStep;
};

const StepContext = createContext<TProviderValues | null>(null);

export default function StepProvider({
  children,
  defaultStep = 'login',
}: TStepProvider) {
  const [step, setStep] = useState<TStep>(defaultStep);

  const navigate = (stepName: TStep) => setStep(stepName);

  const providerValues: TProviderValues = {
    step,
    steps: STEPS,
    navigate,
  };

  return (
    <StepContext.Provider value={providerValues}>
      {children}
    </StepContext.Provider>
  );
}

export function useStepContext() {
  const context = useContext(StepContext);
  const { step, steps: STEPS, navigate } = context as TProviderValues;

  return {
    step,
    steps: STEPS,
    navigate,
  };
}
