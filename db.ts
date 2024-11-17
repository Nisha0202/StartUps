import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import { MongoClient } from "mongodb";

type ConnectionObject = {
  isConnected?: number;
  mongoClient?: MongoClient;
};

const connection: ConnectionObject = {};
const uri = process.env.MONGOO_URL as string;

export async function dbConnect(): Promise<MongoClient> {
  if (connection.isConnected) {
    console.log("Already Connected");
    return connection.mongoClient!;
  }

  try {
    const db = await mongoose.connect(uri);
    connection.isConnected = db.connections[0].readyState;

    // Extract MongoClient from mongoose's connection
    connection.mongoClient = new MongoClient(uri);
    await connection.mongoClient.connect();

    console.log("Connected");
    return connection.mongoClient;
  } catch (error) {
    console.log("Error in database connection", error);
    process.exit(1);
  }
}

