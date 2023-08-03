import { twMerge } from "tailwind-merge";

type AvatarStateProps = {
  isNew: boolean;
  className?: string;
};

const AvatarState = ({ isNew, className }: AvatarStateProps) => {
  const stateBadgeColor = isNew ? "bg-green-400" : "bg-red-400";
  return (
    <span
      className={twMerge(
        `absolute bottom-0 right-0 px-2 py-0.5 text-sm rounded-md text-neutral-50 ${stateBadgeColor}`,
        className
      )}
    >
      {isNew ? "Online" : "Offline"}
    </span>
  );
};

export default AvatarState;
