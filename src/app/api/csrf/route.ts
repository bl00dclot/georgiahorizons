import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { cookies } from "next/headers";


export async function GET() {
  const csrfToken = randomBytes(32).toString("hex");
  const cookie = await cookies();
  cookie.set("csrfToken", csrfToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/booking",
    maxAge: 60 * 60// 1 hour
    });

    return NextResponse.json({ csrfToken });
    }