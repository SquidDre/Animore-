import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../lib/mongo";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";
    
    const client = await clientPromise;
    const db = client.db("anime");
    const collection = db.collection("anime");
    
    const results = await collection
      .find({ Name: { $regex: query, $options: "i" } })
      .toArray();

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}