import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    revenue: 2482900,
    users: 18245
  });
}