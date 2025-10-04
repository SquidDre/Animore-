import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

interface AnimeDoc {
    id: number;
    title: string;
    genres: string[];
    description: string[];
    umap_x: number

}