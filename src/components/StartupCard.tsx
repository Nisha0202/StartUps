import { StartupCardType } from '@/types/StartupCardType'
import React from 'react'

export default function StartupCard({ post }: { post: StartupCardType }) {
  return (
    <div className="startup-card">
      <img src={post.image} alt={post.title} className="startup-card-image" />
      <div className="startup-card-content">
        <h2 className="startup-card-title">{post.title}</h2>
        <p className="startup-card-description">{post.description}</p>
        <div className="startup-card-footer">
          <span>Category: {post.category}</span>
          <span>Views: {post.views}</span>
          <span>Author ID: {post.author._id}</span>
          <span>Created At: {new Date(post._createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}
