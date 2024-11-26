import { NextRequest } from "next/server";
import { dbConnect } from "../../../../db";
import Startups from "../../../models/Startups";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();


  try {
    // Fetch all startups
    const startups = await Startups.find({}).lean(); 
    // Check if there are any startups
    if (!startups || startups.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "No startups found.",
        }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        startups, // Returning the fetched startups
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Database query error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong.",
      }),
      { status: 500 }
    );
  }
}
