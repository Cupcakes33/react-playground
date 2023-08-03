import { DEFAULT_CARD_PADDING } from "./constants";
import { Props } from "./type";

const CardFooter = ({ children }: Props) => {
  return <div className={`${DEFAULT_CARD_PADDING}`}>{children}</div>;
};

export default CardFooter;
