import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../postsData'; 
import './Article.css';

function Article() {
  let { id } = useParams();
  const article = postsData.find(post => post.id === parseInt(id, 10));

  if (!article) {
    return <div className="article-not-found">Article not found</div>;
  }

  return (
    <div className="article-card">
      <h1 className="article-title">{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-body">
        <p className="article-summary">{article.summary}</p>
        <div 
          className="article-content" 
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
}

export default Article;
