import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

const NavItems = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Speaking",
    link: "/speaking",
  },
  {
    name: "Clients",
    link: "/clients",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="hidden z-50 md:block transition-colors duration-200 ease-linear sticky top-0 bg-white dark:bg-neutral-900 shadow-sm">
      <div className="mx-auto max-w-5xl py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center gap-3">
            <span className="text-4xl">🗿</span>
            Thomas Andri Hutomo
          </Link>
          <div className="flex items-center justify-center gap-6  text-neutral-700/60 dark:text-neutral-300/60 font-roboto font-medium">
            {NavItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="[&.active]:text-neutral-800 hover:text-neutral-800/80 transition-all duration-75 ease-linear dark:[&.active]:text-neutral-100 dark:hover:text-neutral-200/80"
              >
                <p>{item.name}</p>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
