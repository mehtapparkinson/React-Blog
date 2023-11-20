import React from 'react';
import './Home.css';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import postsData from '../postsData'; // Import your posts data

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Mehtap's Blog</h1>
      <p className="intro-text">
      I'm Mehtap, a junior developer with a passion for all things tech. In this space, I share my experiences, thoughts, and discoveries as I navigate through the tech world and beyond. From coding tips to personal stories and adventures, you'll find a diverse mix of content here. Join me on this journey, and let's explore the fascinating world of technology together!
      </p>
      <div className="blog-posts">
        {postsData.map(post => (
          <BlogPostCard
            key={post.id}
            id={post.id} 
            title={post.title}
            summary={post.summary}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
