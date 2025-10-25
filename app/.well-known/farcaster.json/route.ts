import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
    "accountAssociation": {
    "header": "eyJmaWQiOjI1NDAzMCwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDY5MzFCM0Q2MTg5Zjg0NDE5MjFmNGQ4NDU0M2U5NDI2ZDdjNkI4MUEifQ",
    "payload": "eyJkb21haW4iOiJ0cmVhc3VyZS1odW50LWZhcmNhc3Rlci52ZXJjZWwuYXBwIn0",
    "signature": "Zwpq0lOaJpan+5sqZs9vRHkMPlT8pHHyvaACjKgTy9Nlb7vPcJl00jyYvPbh2cNU42QD2vfpSqBgSOzTO3iJ9Rs="
  },
    frame: {
      version: "1",
      name: "Treasure Hunt App",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/treasure.png`,
      screenshotUrls: [],
      tags: ["Base", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Join Treasure Hunt",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
