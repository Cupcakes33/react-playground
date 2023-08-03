import { twMerge } from "tailwind-merge";

type AvatarProps = {
  name?: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  rounded?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
};

const getSize = (size: AvatarProps["size"]): string => {
  switch (size) {
    case "sm":
      return "w-4 h-4";
    case "md":
      return "w-12 h-12";
    case "lg":
      return "w-16 h-16";
    case "xl":
      return "w-20 h-20";
    case "2xl":
      return "w-36 h-36";
    default:
      return "w-8 h-8";
  }
};

const getRound = (rounded: AvatarProps["rounded"]): string => {
  switch (rounded) {
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    default:
      return "rounded-full";
  }
};

const Avatar = ({
  name,
  src,
  size,
  rounded,
  className,
  children,
}: AvatarProps) => {
  return (
    <span className={twMerge(`inline-flex relative`, getSize(size))}>
      <img
        src={src}
        alt={name}
        className={twMerge(
          `object-cover w-full h-full`,
          getRound(rounded),
          className
        )}
      />
      {children}
    </span>
  );
}

export default Avatar;