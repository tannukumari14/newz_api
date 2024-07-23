// "use client";
// import React, { useState } from "react";
// import initial_articles from "./data.js";
// import Header from "./header.js";
// import SearchBar from "./search_bar.js";
// import Footer from "./footer.js";
// import News_article from "./news_row.js";

// const Page = () => {
//   const [articles, setArticles] = useState(initial_articles);

//   const changeArticles = (newArticles) => {
//     setArticles(newArticles);
//   };

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <SearchBar changeArticles={changeArticles} />
//         <div className="top-news">Top News From India</div>
//         <News_article article1={articles[0]} article2={articles[1]} article3={articles[2]} />
//         <News_article article1={articles[3]} article2={articles[4]} article3={articles[5]} />
//         <News_article article1={articles[6]} article2={articles[7]} article3={articles[8]} />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import Header from "./header.js";
import SearchBar from "./search_bar.js";
import Footer from "./footer.js";
import NewsRow from "./news_row.js";

const Page = () => {
  const [articles, setArticles] = useState([]);
    console.log(articles,"Initial news fetched.");

  useEffect(() => {
    const fetchInitialNews = () => {
      const apiKey = "44137023ef4d47af8275855373f32548";
      // const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + apiKey;
      const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey="+apiKey;


      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const initialArticles = data.articles.slice(0, 9).map((article, index) => ({
            id: index + 1,
            title: article.title,
            urlToImage: article.urlToImage,
            description: article.description
          }));
          setArticles(initialArticles);

        })
        .catch((error) => {
          console.error("Error fetching initial news:", error);
        });
    };

    fetchInitialNews();
  }, []);

  const changeArticles = (newArticles) => {
    setArticles(newArticles);
  };

  return (
    <>
      <Header />
      <div className="container">
        <SearchBar changeArticles={changeArticles} />
        <div className="top-news">Top News From India</div>
        {articles.length > 0 && (
          <>
            <NewsRow article1={articles[0]} article2={articles[1]} article3={articles[2]} />
            <NewsRow article1={articles[3]} article2={articles[4]} article3={articles[5]} />
            <NewsRow article1={articles[6]} article2={articles[7]} article3={articles[8]} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;

