import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  );
}
