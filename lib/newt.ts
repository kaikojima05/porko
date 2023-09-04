import { createClient } from "newt-client-js";
import type { Works } from "@/ui/base/types/works";
import type { Creatives } from "@/ui/base/types/creatives";
import type { News } from '@/ui/base/types/news'

export const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getWorks = async () => {
  const { items } = await client.getContents<Works>({
    appUid: "works",
    modelUid: "portfolio",
    query: {
      select: [
        "_id",
        "fullName",
        "RefLink",
        "category",
        "postDate",
        "appeal",
      ],
    },
  });
  return items;
};

export const getCreatives = async () => {
  const { items } = await client.getContents<Creatives>({
    appUid: "creatives",
    modelUid: "portfolio",
    query: {
      select: [
        "_id",
        "fullName",
        "RefLink",
        "category",
        "postDate",
        "appeal",
      ],
    },
  });
  return items;
};

export const getNews = async () => {
  const { items } = await client.getContents<News>({
    appUid: "news",
    modelUid: "news",
    query: {
      select: [
        "_id",
        "createdAt",
        "newsTitle",
        "newscontent"
      ]
    }
  })
  return items
}
