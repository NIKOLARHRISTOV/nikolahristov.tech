import type { OctokitResponse } from "@octokit/types";

export default async (
	Where: string,
	// biome-ignore lint/suspicious/noExplicitAny:
	With: any = {},
	Type = "octokit"
	// biome-ignore lint/suspicious/noExplicitAny:
): Promise<OctokitResponse<any, number> | any> => {
	try {
		console.log(`Successfully ${Where}`);

		switch (Type) {
			case "octokit":
				return await new (await import("@octokit/core")).Octokit({
					auth: (await import("@Library/Environment")).default.Token,
				}).request(Where, With);
		}
	} catch (_Error) {
		console.log(`Could not ${Where}`);
	}
};
