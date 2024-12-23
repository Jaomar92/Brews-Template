import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-center md:text-left text-[1.6rem] font-roboto font-medium text-neutral-800 dark:text-neutral-100 transition-colors ease-linear duration-300">
      {children}
    </h1>
  );
};

export default Title;
