import { twMerge } from "tailwind-merge";
import { Props } from "./type";

const CardHeader = ({ children, className }: Props) => {
  return (
    <div className={twMerge(`text-xl font-bold`, className)}>{children}</div>
  );
};

export default CardHeader;
