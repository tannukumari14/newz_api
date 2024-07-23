import React from 'react';


const News_article = ({article}) => (
  <>
  {article &&(
    <div className='col-sm-4'>
      <img className='image' src={article.urlToImage} alt={article.title} />
      <h2 className='title'>{article.title}</h2>
      <p className='description'>{article.description}</p>
      <a className="arrow_para">
        Read full article <img className="arrow" src="arrow.jpeg" alt="arrow" />
      </a>
    </div>
  )}
  </>
);
export default News_article;
