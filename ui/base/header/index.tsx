import Link from "next/link";
import { useState, useEffect } from "react";
import classNames from "classnames";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<string>("text-white");
  const [hamburgerColor, setHamburgerColor] = useState<string>("bg-white");

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200) {
        setFontColor("text-black");
        setHamburgerColor("bg-black");
      } else {
        setFontColor("text-white");
        setHamburgerColor("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHamburgerMenu = (e: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
    e.stopPropagation();
  };

  return (
    <>
      {open && (
        <div
          className="z-[40] fixed w-screen h-screen"
          onClick={() => setOpen(false)}
        />
      )}
      <nav
        className={classNames(
          "z-50 w-full fixed header-border header-blur",
          `${loading ? "border-animation blur-animation" : ""}`
        )}
        onClick={() => setOpen(false)}
      >
        <header
          className={classNames(
            "flex justify-between px-4 py-4 elevator",
            "md:px-28 md:py-6",
            `${fontColor}`,
            `${open && "going-down"}`
          )}
        >
          <div onClick={(e) => e.stopPropagation()} className="h-6 w-6">
            <h1>
              <Link href="/">porko</Link>
            </h1>
          </div>
          <div className={classNames("hidden", "md:block")}>
            <ul className={classNames("flex gap-12")}>
              <li>
                <Link href="/about/">about</Link>
              </li>
              <li>
                <Link href="/news/">news</Link>
              </li>
              <li>
                <Link href="/contact/">contact</Link>
              </li>
            </ul>
          </div>
          <div
            className={classNames(
              "hidden",
              `${open && "!flex items-center justify-center delay-display"}`
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <ul
              className={classNames(
                " flex flex-col gap-y-6",
                "[&>]:block [&>li]:text-[1.125rem] [&>li]:text-center [&>li]:border-b [&>li]:border-dotted [&>li]:border-black"
              )}
            >
              <li>
                <Link href="/about/">about</Link>
              </li>
              <li>
                <Link href="/news/">news</Link>
              </li>
              <li>
                <Link href="/contact/">contact</Link>
              </li>
            </ul>
          </div>
          <div
            className={classNames("hamburger-menu", "md:hidden")}
            onClick={toggleHamburgerMenu}
          >
            <span
              className={classNames(
                "hamburger-menu-bar-top",
                `${hamburgerColor}`,
                `${open && "top-open"}`
              )}
            ></span>
            <span
              className={classNames(
                "hamburger-menu-bar-bottom",
                `${hamburgerColor}`,
                `${open && "bottom-open"}`
              )}
            ></span>
          </div>
        </header>
      </nav>
    </>
  );
}
