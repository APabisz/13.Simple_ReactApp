import React from "react"
import "../styles/Article.css"

const Article = ({ title, author, text }) => {
  return (
    <article className='article-item'>
      <h3 className='article-title'>{title}</h3>
      <span className='article-author'>Author: {author}</span>
      <p className='article-text'>{text}</p>
    </article>
  )
}

export default Article
