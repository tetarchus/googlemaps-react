type StyledComponentProps = {
  height: number | string;
  width: number | string;
};

type FailedProps = Partial<StyledComponentProps> & {
  message?: string;
};

export type { StyledComponentProps, FailedProps };
