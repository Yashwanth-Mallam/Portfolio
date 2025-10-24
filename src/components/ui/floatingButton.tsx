import React from "react";

type TFloatingBtn = {
  className?: string;
  label: React.ReactNode;
  onClick?: () => void;
  href?: string;
  position?: "first" | "sec";
};

export const FloatingButton: React.FC<TFloatingBtn> = ({
  label,
  className = "",
  onClick,
  href,
  position = "sec",
}) => {
  const positionClasses =
    position === "first" ? "top-[12%] left-[15%]" : "bottom-[20%] right-[15%]";

  const divClasses =
    position === "first"
      ? "bg-blue-500 shadow-[inset_0_-3px_15px_0_rgba(50,150,250,0.4)] text-white"
      : "bg-transparent shadow-[inset_0_-3px_15px_0_rgba(50,150,250,0.4)] text-white";

  const spanClasses = position === "first" ? "bg-blue-400/50" : "bg-blue-400";

  const ButtonContent = (
    <>
      <div
        className={`
          h-[50px] w-[160px] rounded-[13px] flex justify-center items-center 
          relative transform transition-all duration-200
          ${divClasses} group-hover:translate-y-[2px]
        `}
      >
        {label}
      </div>
      <span
        className={`
          w-[100px] h-[60px] rounded-full ${spanClasses} 
          absolute -bottom-1/2 filter blur-[20px]
          transition-all duration-200
          group-hover:-bottom-[40%] group-hover:scale-110 group-hover:blur-[18px]
        `}
      ></span>
    </>
  );

  return href ? (
    <a
      href={href}
      className={`group flex flex-col justify-center items-center absolute z-[9999] ${positionClasses} ${className} animate-anim`}
    >
      {ButtonContent}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`group flex flex-col justify-center items-center absolute z-[9999] ${positionClasses} ${className} animate-anim`}
    >
      {ButtonContent}
    </button>
  );
};
