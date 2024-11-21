import mongoose, { Schema } from 'mongoose';
import { StartupCardType, Author } from '@/types/StartupCardType'; // Import Author and StartupCardType

// Create the Author schema
const AuthorSchema = new Schema<Author>({
    _id: { type: String, required: true }, // Change to String if using ObjectId
    name: { type: String, required: true },
    image: { type: String, required: false },
    email:{type: String, required: true}
  });

// Create the StartupCardType schema
const StartupCardSchema = new Schema<StartupCardType>({
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  author: { type: AuthorSchema, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
});

// Create the model
const Startups = mongoose.models.StartupCard || mongoose.model<StartupCardType>('Startups', StartupCardSchema);

export default Startups;