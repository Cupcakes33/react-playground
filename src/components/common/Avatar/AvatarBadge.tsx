type AvatarBadgeProps = {
  className?: string;
  isNew?: boolean;
};

const AvatarBadge = ({ isNew, className }: AvatarBadgeProps) => {
  return (
    <span className="absolute bottom-0 right-0 px-2 text-sm bg-red-400 rounded-md py-0.5 text-neutral-50">
      {isNew ? "New" : "Offline"}
    </span>
  );
};

export default AvatarBadge;
