import React, {Component, useState, useEffect} from 'react';

const App = () => {
  //state
  const [news, setNews] = useState([]);

  //fetch news
  const fetchNews = () => {
    //this will fetch news from hacker news api
    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error));
  };

  //lifecycle hooks
  useEffect(() => {
    fetchNews();
  });

  //return jsx
  return (
    <div>
      <h2>News</h2>
      {
        news.map((element, index) => (<p key={index}>{element.title}</p>))
      }
    </div>
  )
};

export default App;
