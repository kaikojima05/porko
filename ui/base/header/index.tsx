import Link from "next/link";
import Icon from "@/ui/base/icons";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useCatchProfileContext } from "@/ui/hooks/useCatchProfile";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<string>("text-white");
  const [hamburgerColor, setHamburgerColor] = useState<string>("bg-white");
  const { isHamburgerOpen, setIsHamburgerOpen } =
    useContext(useCatchProfileContext);
  const navItems = [
    {
      href: "/about",
      title: "about",
    },
    {
      href: "/works",
      title: "wokrs"
    },
    {
      href: "/creatives",
      title: "creatives"
    },
    {
      href: "/plan",
      title: "plan",
    },
    {
      href: "/news",
      title: "news",
    },
    {
      href: "/contact",
      title: "contact",
    },
  ];

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 180) {
        setFontColor("text-base-black");
        setHamburgerColor("bg-base-black");
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

  const toggleHamburgerButton = () => {
    if (window.innerWidth <= 1024) {
      setOpen((prev) => !prev);
      const prevHamburgerOpen = isHamburgerOpen;
      setIsHamburgerOpen(!prevHamburgerOpen);
    }
  };

  const toggleHamburgerMenu = () => {
    if (window.innerWidth <= 1024 && open) {
      setOpen(false);
      setIsHamburgerOpen(false);
    }
  };

  return (
    <>
      {open && (
        <div
          className="z-[40] fixed w-screen h-screen"
          onClick={toggleHamburgerMenu}
        />
      )}
      <nav
        className={classNames(
          "z-50 w-full fixed header-border backdrop-blur",
          `${loading ? "border-animation blur-animation" : ""}`
        )}
        onClick={toggleHamburgerMenu}
      >
        <header
          className={classNames(
            "px-4 py-4",
            "lg:px-16 lg:py-6",
            "xl:px-24",
            `${fontColor}`,
          )}
        >
          <div className="flex justify-between items-center">
            <div onClick={(e) => e.stopPropagation()} className="">
              <h1 className="flex justify-center items-center">
                <Link href="/" className="text-base">
                  porko
                </Link>
              </h1>
            </div>
            <div className={classNames("hidden", "lg:block")}>
              <ul className={classNames(
                "flex items-center",
                "lg:gap-0",
                "xl:gap-8"
              )}>
                {navItems.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center">
                      <Link
                        href={item.href}
                        className={classNames(
                          'px-5 py-1 rounded rounded-br-2xl',
                          `${router.pathname === item.href
                            ? 'bg-primary text-white'
                            : ""}`
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className={classNames("hamburger-menu", "lg:hidden")}
              onClick={toggleHamburgerButton}
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
          </div>
          <div
            className={classNames(
              "lg:hidden duration-[520ms] h-0",
              `${open && "!flex items-center justify-center h-[70vh]"}`
            )}
            onClick={toggleHamburgerMenu}
          >
            <ul
              className={classNames(
                "block duration-700",
                "[&>li]:text-[1.125rem] [&>li]:text-center [&>li]:mt-4",
                `${open ? 'block delay-display' : 'hidden opacity-0'}`
              )}
            >
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="[&>a]:block">
                    <Link
                      href={item.href}
                      className={classNames(
                        `${router.pathname === item.href
                          ? `current ${open && "animate-current"}`
                          : "induction"
                        }`
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
}
