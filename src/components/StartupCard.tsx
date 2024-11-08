import formatDate from '@/functions/formatDate';
import { StartupCardType } from '@/types/StartupCardType'
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

// export default function StartupCard({ post }: { post: StartupCardType }) {
//   return (
//     <div className="startup-card">
//       <img src={post.image} alt={post.title} className="startup-card-image" />
//       <div className="startup-card-content">
//         <h2 className="startup-card-title">{post.title}</h2>
//         <p className="startup-card-description">{post.description}</p>
//         <div className="startup-card-footer">
//           <span>Category: {post.category}</span>
//           <span>Views: {post.views}</span>
//           <span>Author ID: {post.author._id}</span>
//           <span>Created At: {new Date(post._createdAt).toLocaleDateString()}</span>
//         </div>
//       </div>
//     </div>
//   )
// }

 const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <article className="startup-card group">
      <div className="flex-between mb-5">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex-between gap-2">
          <EyeIcon className="size-4 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-xl font-semibold line-clamp-1 mt-2">{title}</h3>
          </Link>
        </div>
        {/* <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image!}
            alt={author?.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link> */}
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <img src={image} alt="placeholder" className="startup-card_img rounded my-5" />
      </Link>

      <div className="flex-between">
        <Link href={`/?query=${category?.toLowerCase()}`} className='min-w-12 text-center'>
          <p className="category_style ">{category}</p>
        </Link>
        <button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Read</Link>
        </button>
      </div>
    </article>
  );
};

export default StartupCard