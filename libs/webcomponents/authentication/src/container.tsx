import { Login, Register } from './pages';
import { useStepContext } from './providers/StepProvider';

export function AuthenticationContainer() {
  const {
    step,
    steps: { LoginStep, RegisterStep },
  } = useStepContext();

  return (
    <>
      {step === LoginStep && <Login />}
      {step === RegisterStep && <Register />}
    </>
  );
}
