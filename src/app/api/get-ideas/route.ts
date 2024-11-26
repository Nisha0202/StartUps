import { NextRequest } from "next/server";
import { dbConnect } from "../../../../db";
import Startups from "../../../models/Startups";

export async function GET(request:NextRequest) {
  await dbConnect();

  try {
    // Extract query parameter from the request URL
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query"); // Get 'query' parameter

    // Define a filter based on the query
    const filter = query
      ? {
          $or: [
            { title: { $regex: query, $options: "i" } }, // Match 'title'
            { description: { $regex: query, $options: "i" } }, // Match 'description'
          ],
        }
      : {}; // If no query, fetch all startups

    // Fetch startups based on the filter
    const startups = await Startups.find(filter).lean();

    // Check if startups are found
    if (!startups || startups.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: query ? "No startups match your query." : "No startups found.",
        }),
        { status: 404 }
      );
    }

    // Return the filtered or all startups
    return new Response(
      JSON.stringify({
        success: true,
        startups,
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
