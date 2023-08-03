import { twMerge } from "tailwind-merge";
import { CardProps } from "./type";

const getSize = (size: CardProps["size"]): string => {
  switch (size) {
    case "sm":
      return "w-64";
    case "md":
      return "w-96";
    case "lg":
      return "w-128";
    default:
      return "w-full";
  }
};

const getRounded = (rounded: CardProps["rounded"]): string => {
  switch (rounded) {
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    default:
      return "rounded-none";
  }
};

const getCardOption = ({ size, rounded, className }: CardProps): string => {
  return twMerge(getSize(size), getRounded(rounded), className);
};

const Card = ({ children, ...rest }: CardProps) => {
  const options = getCardOption({ ...rest });
  return <div className={`shadow-md ${options}`}>{children}</div>;
};

export default Card;
