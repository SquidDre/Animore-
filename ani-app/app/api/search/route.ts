import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongo';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
      return NextResponse.json({ message: 'Search query is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('anime');
    const collection = db.collection('anime_anilist');

    // Use a case-insensitive regex to find titles that start with the query
    const searchRegex = new RegExp(`^${query}`, 'i');

    const suggestions = await collection.find(
      { 'title.english': { $regex: searchRegex } },
      {
        // Projection: only return the fields we need
        projection: {
          _id: 0, // Exclude the _id
          'title.english': 1,
        },
      }
    ).limit(5).toArray(); // Limit to 5 suggestions

    // Extract just the titles into a simple array of strings
    const titles = suggestions.map(s => s.title.english);

    return NextResponse.json(titles);

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ message: 'Error fetching search suggestions' }, { status: 500 });
  }
}