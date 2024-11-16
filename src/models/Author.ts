import mongoose, {  Schema } from 'mongoose';

// Define the Author interface
interface Author {
  _id: number; // You might want to change this to string if using ObjectId
  name: string;
  image?: string;
  githubId?: string;
}


// Create the Author schema
const AuthorSchema = new Schema<Author>({
  _id: { type: Number, required: true }, // Change to String if using ObjectId
  name: { type: String, required: true },
  image: { type: String, required: false },
  githubId: { type: String, required: false },
});



// Create the model
const Author = mongoose.models.Author || mongoose.model<Author>('Author', AuthorSchema);

export default Author;