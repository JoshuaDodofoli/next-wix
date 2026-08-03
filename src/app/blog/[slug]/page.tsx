import React from 'react'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { wixClient } from '@/lib/wixClient';
import type { BlogPost } from '@/lib/blogPost';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const posts = await wixClient.items.query('Exampleposts').eq('slug', slug).find();
    const blogPost = posts.items[0] as BlogPost | undefined;

    if (!blogPost) {
        notFound();
    }

    return {
        title: blogPost.slug,
    };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const posts = await wixClient.items.query("Exampleposts").eq("slug", slug).find();
    const blogPost = posts.items[0] as BlogPost | undefined;

    if (!blogPost) {
        notFound();
    }

    return (
        <div className=" flex items-center justify-center flex-col h-screen">

            <div className="flex flex-col items-start px-6">
                <span className='pb-6 font-semibold'><Link href="/blog">&larr; Back</Link></span>

                <h1 className='font-semibold'>&#9824; {blogPost.title}</h1>
                <p className='py-4'>{blogPost.description}</p>
                <div className="items-end flex flex-col w-full gap-2">
                    <p className='text-sm font-semibold'>Author: {blogPost.author}&#9816;</p>
                    <p className='text-sm font-semibold'>Date published: {blogPost.date}</p>
                    <ul className='flex gap-3'>
                        <span className='font-extrabold'>&#127991;</span> <li className='text-black/[.4] text-sm'>{blogPost.arraystring}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page
