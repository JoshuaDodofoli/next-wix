import React from 'react'
import Link from "next/link";
import { getBlogPosts } from '@/lib/blogPost';
import { Metadata } from 'next';

export const metadata: Metadata= {
  title: "Blog"
}

const page = async () => {
  const blogposts = await getBlogPosts();

  return (
    <div className='flex flex-1 w-full flex-col items-center justify-center px-6'>
      <div className="flex flex-col items-start">
        <span className='pb-6 font-semibold'><Link href="/">&larr; Back</Link></span>
        <h1 className='bg-3'>Welcome to the blog page. <br />
          This is where you view all the blogs that I write.
          🤠</h1>

        <h2 className='pt-6 font-bold'>Silly posts.😛 <em className='text-black/[.2]'>(Try tapping)</em></h2>
      </div>
      <ul className='w-full text-start'>
        {blogposts.map((post) => (
          <li key={post._id} className='flex items-start'>
            <span className='pr-2 text-sm font-extralight'>&#9828;</span>
            <Link className='text-sm' href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
