import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useIsProfileContext } from "@/ui/hooks/useIsProfile";
import Icon from "@/ui/base/icons";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<string>("text-white");
  const [hamburgerColor, setHamburgerColor] = useState<string>("bg-white");
  const { isHamburgerOpen, setIsHamburgerOpen } =
    useContext(useIsProfileContext);
  const navItems = [
    {
      href: "/about",
      title: "about",
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
            "flex justify-between px-4 py-4 elevator",
            "lg:px-16 lg:py-6",
            "xl:px-24",
            `${fontColor}`,
            `${open ? "going-down" : ""}`
          )}
        >
          <div onClick={(e) => e.stopPropagation()} className="">
            <h1>
              <Link href="/" className="">
                <Icon name="porko" width="w-[5rem]" height="h-[1.875rem]" symbol={true} className="text-black" />
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
                        router.pathname === item.href
                          ? `current ${loading ? "animate-current" : ""}`
                          : "induction"
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
            className={classNames(
              "hidden",
              `${open && "!flex items-center justify-center delay-display"}`
            )}
            onClick={toggleHamburgerMenu}
          >
            <ul
              className={classNames(
                " flex flex-col gap-y-6",
                "[&>]:block [&>li]:text-[1.125rem] [&>li]:text-center "
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
        </header>
      </nav>
    </>
  );
}
