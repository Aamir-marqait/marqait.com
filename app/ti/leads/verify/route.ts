const TRUINTEL_API = "https://api.truintel.ai/api/v1/leads/verify";

export async function POST(request: Request) {
  try {
    const body = await request.text();

    const res = await fetch(TRUINTEL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": request.headers.get("user-agent") || "",
        "X-Forwarded-For":
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "",
      },
      body,
    });

    const data = await res.text();

    return new Response(data, {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": request.headers.get("origin") || "*",
        "Access-Control-Allow-Credentials": "true",
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Proxy error" }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": request.headers.get("origin") || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, User-Agent, X-Forwarded-For",
      "Access-Control-Max-Age": "86400",
    },
  });
}
