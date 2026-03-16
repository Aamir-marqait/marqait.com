import { NextRequest, NextResponse } from "next/server";

const TRUINTEL_API = "https://api.truintel.ai/api/v1/traffic/collect";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

  const res = await fetch(TRUINTEL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": request.headers.get("user-agent") || "",
      "X-Forwarded-For": ip,
    },
    body,
  });

  const data = await res.text();

  return new NextResponse(data, {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, User-Agent, X-Forwarded-For",
      "Access-Control-Max-Age": "86400",
    },
  });
}
