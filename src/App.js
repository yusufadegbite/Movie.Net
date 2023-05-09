import React, { useState, useEffect } from "react";
import "./App.css";
import { FaMoon, FaSun } from "react-icons/fa";



function App() {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [endPoint, setEndPoint] = useState("");
  const [theme, setTheme] = useState(false);
  
  


  useEffect(() => {
    fetch(`https://netflix-data.p.rapidapi.com/search/?query=+${term}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2cb41a633emsh90b703829e295dfp14d0b2jsnf02347b0188f",
        "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setMovies(data.titles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [endPoint]);


  const onChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEndPoint(term);
  };

  const onClick = () => {
    setTheme(!theme);
  };

 

  

  return (
    <div className={`App${theme ? " dark" : ""} w-100%  h-screen`}>
      <div className="bg-slate-200 h-100% dark:bg-dark-blue">
    <div className="container mx-auto px-2 py-6 md:px-6 md:mx-auto">
      
      <div className="flex justify-between">
        <div>
        <span className="text-3xl text-dark-blue font-bold dark:text-zinc-500">movie.Net</span>
        </div>
        <div className="header-cta between-column gap-3 mt-2 text-dark-blue dark:text-zinc-500">
          {theme ? (
            <FaSun className="cursor-pointer text-2xl" onClick={onClick} />
          ) : (
            <FaMoon className="cursor-pointer text-2xl" onClick={onClick} />
          )}
        </div>
      </div>

      <div className="text-center my-6">
        <h1 className="text-4xl pt-16 font-bold tracking-tight text-dark-blue dark:text-zinc-500 sm:text-6xl">
          Discover latest information <br /> about movies
        </h1>
      </div>

      <div className="flex justify-center mx-auto my-14 rounded overflow-hidden max-w-sm py-4">
        <form className="w-full max-w-sm" onSubmit={onSubmitHandler}>
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              type="text"
              className="mx-3 border-indigo-900 appearance-none bg-transparent border-none w-full text-gray-700 dark:text-zinc-500 mr-3 py-1 px-1 leading-tight font-normal text-[20px] focus:outline-none"
              placeholder="Search movie"
              value={term}
              onChange={onChangeHandler}
            />
            <button 
              className="flex-shrink-0 bg-teal-600 hover:bg-teal-700 border-teal-600 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid item-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {movies.map((item) => {
          return (
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={item.jawSummary.backgroundImage.url} alt="" />
                <img src={item.jawSummary.logoImage.url} alt="" />
                <p className="px-3 py-4 dark:text-zinc-500">{item.jawSummary.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
