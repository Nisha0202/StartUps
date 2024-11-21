import mongoose, {  Schema } from 'mongoose';

// Define the Author interface
interface Author {
  _id: string; 
  name: string;
  image?: string;
  email: string;
  
}


// Create the Author schema
const AuthorSchema = new Schema<Author>({
  _id: { type: String, required: true }, // Change to String if using ObjectId
  name: { type: String, required: true },
  image: { type: String, required: false },
  email: { type: String, required: true },
});



// Create the model
const Author = mongoose.models.Author || mongoose.model<Author>('Author', AuthorSchema);

export default Author;