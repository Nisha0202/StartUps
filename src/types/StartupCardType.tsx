import React from 'react'


  interface Author {
    _id: number;
  }

 export interface StartupCardType {
    _createdAt: string; // Date string indicating when the post was created
    views: number; // Number of views for the post
    author: Author; // Author object with an id property
    _id: string; // Unique identifier for the post
    description: string; // Description of the post
    image: string; // URL of the image associated with the post
    category: string; // Category of the post
    title: string; // Title of the post
  }


