import React, { useState } from "react";

const SearchBar = ({ changeArticles }) => {
  const [userInput, setUserInput] = useState("");

  const handleSearchInput = (e) => {
    setUserInput(e.target.value);
  };

  const fetchNews = () => {
    const apiKey = "44137023ef4d47af8275855373f32548";
    const url = "https://newsapi.org/v2/everything?q=" + userInput + "&apiKey=" + apiKey;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const searchArticles = data.articles.slice(0, 9).map((article, index) => ({
          id: index + 1,
          title: article.title,
          urlToImage: article.urlToImage,
          description: article.description
        }));
        changeArticles(searchArticles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search"
        className="search-bar"
        value={userInput}
        onChange={handleSearchInput}
      />
      <button
        className="go_button"
        onClick={fetchNews}
      >Go</button>
    </div>
  );
};

export default SearchBar;
