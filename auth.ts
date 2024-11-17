import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { dbConnect } from "./db";
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [GitHub],
// })


import { MongoDBAdapter } from "@auth/mongodb-adapter"
const client = await dbConnect(); // Ensure the MongoDB client is ready
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [GitHub],
})