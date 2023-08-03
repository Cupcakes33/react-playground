import { DEFAULT_CARD_PADDING } from "./constants";
import { Props } from "./type";

const CardBody = ({ children }: Props) => {
  return (
    <div className={`${DEFAULT_CARD_PADDING} text-base text-neutral-400`}>
      {children}
    </div>
  );
};

export default CardBody;
