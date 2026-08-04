import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const wixClientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;

if (!wixClientId) {
    throw new Error("Missing NEXT_PUBLIC_WIX_CLIENT_ID environment variable.");
}

export const wixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({
        clientId: wixClientId,
    })
})
