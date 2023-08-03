import { DEFAULT_CARD_PADDING } from "./constants";
import { Props } from "./type";

const CardHeader = ({ children }: Props) => {
  return (
    <div className={`${DEFAULT_CARD_PADDING} text-xl font-bold`}>
      {children}
    </div>
  );
};

export default CardHeader;
