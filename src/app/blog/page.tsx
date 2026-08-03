import React from 'react'
import Link from "next/link";
import { wixClient } from '@/lib/wixClient';
import type { BlogPost } from '@/lib/blogPost';
import { Metadata } from 'next';

export const metadata: Metadata= {
  title: "Blog"
}

const page = async () => {
  const posts = await wixClient.items.query("Exampleposts").ascending("title").find();
  const blogposts = posts.items as BlogPost[];

  return (
    <div className=' flex items-center justify-center flex-col h-full w-full px-6'>
      <div className="flex flex-col items-start">
        <span className='pb-6 font-semibold'><Link href="/">&larr; Back</Link></span>
        <h1 className='bg-3'>Welcome to the blog page. <br />
          This is where you view all the blogs that I write.
          🤠</h1>

        <h2 className='pt-6 font-bold'>Silly posts.😛 <em className='text-black/[.2]'>(Try tapping)</em></h2>
      </div>
      <ul className='text-start items-start w-full'>
        <li className='flex flex-col items-start'>
          {blogposts.map((post) => (
            <div key={post._id} className=''>
              <Link className='text-sm' href={`/blog/${post.slug}`}>
              <span className='text-sm font-extralight pr-2'>&#9828;</span>
              {post.title}</Link>
            </div>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default page
