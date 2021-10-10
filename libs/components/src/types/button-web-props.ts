export type ButtonWebProps = {
  id?: string;
  testId?: string;
  onClick?(): void;
  children: React.ReactNode;
  type?: 'button' | 'submit';
};
