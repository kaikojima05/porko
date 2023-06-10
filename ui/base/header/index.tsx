import { useState, useEffect } from "react";
import classNames from "classnames";

export default function Header() {
    const [loading, setLoading] = useState<boolean>(false);
    const [fontColor, setFontColor] = useState<string>("text-white");

    useEffect(() => {
        setLoading(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                setFontColor("text-black");
            } else {
                setFontColor("text-white");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={classNames(
                "z-50 w-full fixed header-border header-blur",
                `${loading ? "border-animation blur-animation" : ""}`
            )}
        >
            <header
                className={classNames(
                    "flex justify-between px-4",
                    "md:px-32 md:py-6",
                    `${fontColor}`
                )}
            >
                <div>
                    <h1>porko</h1>
                </div>
                <div>
                    <ul className={classNames("flex gap-12")}>
                        <li>about</li>
                        <li>news</li>
                        <li>contact</li>
                    </ul>
                </div>
            </header>
        </nav>
    );
}
