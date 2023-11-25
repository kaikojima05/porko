import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useCatchProfileContext } from "@/ui/hooks/useCatchProfile";

export default function Header() {
  const router = useRouter();
  const path = router.asPath;
  const currentPath = decodeURIComponent(path);
  const [open, setOpen] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<string>("text-bas-black");
  const { isHamburgerOpen, setIsHamburgerOpen } = useContext(
    useCatchProfileContext
  );
  const navItems = [
    {
      href: "/about",
      title: "about",
    },
    {
      href: "/works",
      title: "works",
    },
    {
      href: "/creatives",
      title: "creatives",
    },
    {
      href: "/plan",
      title: "plan",
    },
    {
      href: "/contact",
      title: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 60) {
        setFontColor("text-base-black");
      } else if (currentScrollY > 60 && currentScrollY < 300) {
        setFontColor("text-white");
      } else if (currentScrollY > 300) {
        setFontColor("text-base-black");
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
        className={classNames("z-50 w-full fixed header-border backdrop-blur")}
        onClick={toggleHamburgerMenu}
      >
        <header
          className={classNames(
            "px-4 py-4 duration-500",
            "lg:px-16 lg:py-6",
            "xl:px-24"
          )}
        >
          <div className="flex justify-between items-center">
            <div onClick={(e) => e.stopPropagation()} className="">
              <h1 className="flex justify-center items-center">
                <Link href="/" className="text-base" scroll={false}>
                  porko
                </Link>
              </h1>
            </div>
            <div
              className={classNames(
                "hidden duration-300",
                "lg:block",
                `${fontColor}`
              )}
            >
              <ul
                className={classNames(
                  "flex items-center",
                  "lg:gap-0",
                  "xl:gap-8"
                )}
              >
                {navItems.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center">
                      <Link
                        href={item.href}
                        className={classNames(
                          "px-5 py-1 rounded rounded-br-2xl",
                          `${
                            currentPath.includes(item.href)
                              ? "bg-primary text-white"
                              : ""
                          }`
                        )}
                        scroll={false}
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
                  "hamburger-menu-bar-top bg-base-black",
                  `${open && "top-open"}`
                )}
              ></span>
              <span
                className={classNames(
                  "hamburger-menu-bar-bottom bg-base-black",
                  `${open && "bottom-open"}`
                )}
              ></span>
            </div>
          </div>
          <div
            className={classNames(
              "duration-[520ms] h-0",
              "lg:hidden",
              `${open && "!flex items-center justify-center h-[70vh]"}`
            )}
            onClick={toggleHamburgerMenu}
          >
            <ul
              className={classNames(
                "block duration-700",
                "[&>li]:text-[1.125rem] [&>li]:text-center [&>li]:mt-4",
                `${open ? "block delay-display" : "hidden opacity-0"}`
              )}
            >
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="[&>a]:block">
                    <Link
                      href={item.href}
                      className={classNames(
                        "px-2 py-[2px] rounded rounded-br-2xl",
                        `${
                          currentPath.includes(item.href)
                            ? "text-white bg-primary"
                            : ""
                        }`
                      )}
                      scroll={false}
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
