import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <DefaultSeo
        title="porko"
        description="東京・八王子を拠点に活動するフリーランスライターのポートフォリオサイト。Webコンテンツの執筆を始め、「ことば」で表現するお仕事に幅広く対応させていただきます。"
        openGraph={{
          type: "website",
          title: "porko",
          description:
            "東京・八王子を拠点に活動するフリーランスライターのポートフォリオサイト。Webコンテンツの執筆を始め、「ことば」で表現するお仕事に幅広く対応させていただきます。",
          site_name: "フリーランスライター小嶋麻莉恵のポートフォリオサイト",
          url: "https://porko.jp",
          images: [
            {
              url: "/images/hero_top.webp",
              width: 800,
              height: 600,
              alt: "",
              type: "image/webp",
            },
          ],
        }}
        twitter={{
          handle: "こじまり｜ライター",
          site: "@koji_mari7",
          cardType: "summary_large_image",
        }}
      />

      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  );
}
