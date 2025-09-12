import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

interface Item {
  _id: string;
  name: string;
  [key: string]: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[] | { message: string }>
) {
  const client = await clientPromise;
  const db = client.db("mydatabase");
  const collection = db.collection<Item>("mycollection");

  if (req.method === "GET") {
    const query = req.query.q?.toString() || "";
    const results = await collection
      .find({ name: { $regex: query, $options: "i" } })
      .toArray();

    res.status(200).json(results);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}