// app/api/test/route.ts
import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongo";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mydatabase");
    await db.command({ ping: 1 });
    return NextResponse.json({ status: "Connected successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Connection failed", details: error },
      { status: 500 }
    );
  }
}