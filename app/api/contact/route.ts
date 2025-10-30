import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Contact form submitted:", data);
  return NextResponse.json({ success: true });
}
