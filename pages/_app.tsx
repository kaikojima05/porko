import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <DefaultSeo
        title="porko"
        description="東京を拠点に活動するフリーランスライター・小嶋 麻莉恵のポートフォリオサイト。Webコンテンツの執筆を始め、〈ことば〉で表現するお仕事に幅広く対応させていただきます。"
        openGraph={{
          type: "website",
          title: "porko",
          description:
            "東京を拠点に活動するフリーランスライター・小嶋 麻莉恵のポートフォリオサイト。Webコンテンツの執筆を始め、〈ことば〉で表現するお仕事に幅広く対応させていただきます。",
          site_name:
            "フリーランスライター小嶋麻莉恵のポートフォリオサイト porko",
          url: "https://porko.jp",
          images: [
            {
              url: "https://porko.jp/images/opengraph-image.png",
              width: 800,
              height: 600,
              alt: "ポートフォリオサイト porko のイメージ画像",
              type: "image/png",
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
