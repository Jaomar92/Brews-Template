import React from "react";
import { ReactNode } from "react";

interface ParaProps {
  children: ReactNode;
}

const Paragraph: React.FC<ParaProps> = ({ children }) => {
  return (
    <p className="font-roboto text-[1.2rem] text-neutral-700  dark:text-neutral-100">
      {children}
    </p>
  );
};

export default Paragraph;
