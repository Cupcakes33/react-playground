import { twMerge } from "tailwind-merge";
import { FlexProps } from "./type";

const getAlignItems = (alignItems: FlexProps["alignItems"]): string => {
  switch (alignItems) {
    case "start":
      return "items-start";
    case "end":
      return "items-end";
    case "stretch":
      return "items-stretch";
    case "baseline":
      return "items-baseline";
    default:
      return "items-center";
  }
};

const getJustifyContent = (
  justifyContent: FlexProps["justifyContent"]
): string => {
  switch (justifyContent) {
    case "start":
      return "justify-start";
    case "end":
      return "justify-end";
    case "between":
      return "justify-between";
    case "around":
      return "justify-around";
    case "evenly":
      return "justify-evenly";
    default:
      return "justify-center";
  }
};

const getDirection = (direction: FlexProps["direction"]): string => {
  switch (direction) {
    case "row":
      return "flex-row";
    case "row-reverse":
      return "flex-row-reverse";
    case "col":
      return "flex-col";
    case "col-reverse":
      return "flex-col-reverse";
    default:
      return "";
  }
};

const getWrap = (wrap: FlexProps["wrap"]): string => {
  switch (wrap) {
    case "no-wrap":
      return "flex-no-wrap";
    case "wrap":
      return "flex-wrap";
    case "wrap-reverse":
      return "flex-wrap-reverse";
    default:
      return "";
  }
};

const getGap = (gap: FlexProps["gap"]): string => {
  switch (gap) {
    case "sm":
      return "gap-2";
    case "md":
      return "gap-4";
    case "lg":
      return "gap-8";
    case "xl":
      return "gap-16";
    default:
      return "";
  }
};

const getFlexOptions = ({
  alignItems,
  justifyContent,
  direction,
  wrap,
  gap,
  className,
}: FlexProps): string => {
  return twMerge(
    getAlignItems(alignItems),
    getJustifyContent(justifyContent),
    getDirection(direction),
    getWrap(wrap),
    getGap(gap),
    className
  );
};

const Flex = ({ children, ...rest }: FlexProps) => {
  const options = getFlexOptions({ ...rest });
  return <div className={`flex ${options}`}>{children}</div>;
};

export default Flex;
