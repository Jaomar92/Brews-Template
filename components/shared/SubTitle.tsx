import React, { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return (
    <h2 className="text-neutral-700 dark:text-neutral-100 text-[2.1rem] text-center md:text-left font-roboto">
      {children}
    </h2>
  );
};

export default SubTitle;
