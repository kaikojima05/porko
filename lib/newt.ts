import { createClient } from "newt-client-js";
import type { Works } from "@/ui/base/types/works";

const client = createClient({
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
