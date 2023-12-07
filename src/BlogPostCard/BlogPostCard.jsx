import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogPostCard.css';

function BlogPostCard({ id, title, summary, imageUrl }) {
  const navigate = useNavigate();

  const openArticle = () => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="blog-post-card">
      {imageUrl && <img src={imageUrl} alt={title} className="blog-post-card-image" />}
      <div className="blog-post-card-content">
        <h3>{title}</h3>
        <p>{summary}</p>
        <button className="read-more-button" onClick={openArticle}>Read More</button>
      </div>
    </div>
  );
}

export default BlogPostCard;
