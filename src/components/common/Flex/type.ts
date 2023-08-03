type FlexProps = {
  children?: React.ReactNode;
  alignItems?: "start" | "end" | "stretch" | "baseline";
  justifyContent?: "start" | "end" | "between" | "around" | "evenly";
  direction?: "row" | "row-reverse" | "col" | "col-reverse";
  wrap?: "no-wrap" | "wrap" | "wrap-reverse";
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export type { FlexProps };