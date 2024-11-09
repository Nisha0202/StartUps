import formatDate from '@/functions/formatDate';
import { StartupCardType } from '@/types/StartupCardType'
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


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
      <div className="flex-between mb-2">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex-between gap-2">
          <EyeIcon className="size-4 text-primary" />
          <span className="">{views}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex-between">
          <Link href={`/user/${author?._id}`}>
            <p className="line-clamp-1">{author?.name}</p>
          </Link>
      <Link href={`/user/${author?._id}`}>
          <Image
            // src={author?.image!}
            src={'/user.svg'}
            alt={author?.name!}
            width={24}
            height={24}
            className="rounded-full"
          />
        </Link>
        </div>

        <Link href={`/startup/${_id}`}>
            <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          </Link>
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