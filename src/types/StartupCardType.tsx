
export interface Author {
    _id: string;
    name: string;
    image?: string;
    email : string;
  }

 export interface StartupCardType {
    _id: string; // Unique identifier for the post
    createdAt: string | Date; // Date string indicating when the post was created
    views: number; // Number of views for the post
    author: Author; // Author object with an id property
    description: string; // Description of the post
    image: string; // URL of the image associated with the post
    category: string; // Category of the post
    title: string; // Title of the post
  }


