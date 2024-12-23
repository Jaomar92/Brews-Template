// import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const TechStack = [
  {
    element: <RiNextjsLine />,
    name: "Tailwindcss",
  },
  {
    element: <RiTailwindCssFill className="text-sky-500" />,
    name: "Tailwindcss",
  },
  {
    element: <SiShadcnui />,
    name: "Shadcn",
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-200/10">
      <div className="mx-5 md:mx-0">
        <div className="mx-auto max-w-5xl pt-3 pb-8">
          <h6 className="text-lg pb-3 font-light">Powered by:</h6>
          <div className="flex items-center justify-start gap-3">
            {TechStack.map((item, i) => (
              <div key={i} className="text-3xl">
                {item.element}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
