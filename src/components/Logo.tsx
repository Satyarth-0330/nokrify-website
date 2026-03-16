import React from "react";
import logoImg from "../assets/logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  showText = true,
  textColor = "text-white",
}) => {
  const sizeMap = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2" },
    md: { icon: 44, text: "text-2xl", gap: "gap-2" },
    lg: { icon: 72, text: "text-4xl", gap: "gap-4" },
  };

  const { icon, text, gap } = sizeMap[size];

  return (
    <div className={`flex items-center ${gap}`}>
      <img
        src={logoImg}
        alt="Nokrify"
        width={icon}
        height={icon}
        className="shrink-0 object-contain rounded-2xl"
      />
      {showText && (
        <span
          className={`font-black tracking-widest ${text} ${textColor}`}
          style={{ letterSpacing: "0.2em" }}
        >
          NOKRIFY
        </span>
      )}
    </div>
  );
};

export default Logo;
