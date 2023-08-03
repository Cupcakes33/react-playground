import { twMerge } from "tailwind-merge";
import { Props } from "./type";

const CardBody = ({ children, className }: Props) => {
  return <div className={twMerge(`text-base`, className)}>{children}</div>;
};

export default CardBody;
