import { twMerge } from "tailwind-merge";
import { Props } from "./type";

const CardFooter = ({ children, className }: Props) => {
  return <div className={twMerge(``, className)}>{children}</div>;
};

export default CardFooter;
