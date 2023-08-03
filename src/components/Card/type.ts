type Props = {
  children?: React.ReactNode;
  className?: string;
};

type CardProps = Props & {
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg";
};

export type { Props, CardProps };
