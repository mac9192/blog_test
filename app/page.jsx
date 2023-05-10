"use client" 

import FeaturedPosts  from '@sections/FeaturedPosts';

import { getPosts } from '@services/index';
import PostCard from '@components/PostCard'
import Categories from '@components/Categories'
import PostWidget from '@components/PostWidget'
import About from '@components/About'

export default async function Home() {

 
  return (
    <div className="container mx-auto px-10 mb-8">
  <PostCard />
    </div>
  );
}

// Fetch data at build time

