import React from 'react';
import News_article from "./news_article.js";

const News_row = ({article1, article2, article3}) => {
    return (
        <>
            <div className="row">
                <News_article article={article1}/>
                <News_article article={article2}/>
                <News_article article={article3}/>
            </div>
        </>
    );
}
export default News_row;
