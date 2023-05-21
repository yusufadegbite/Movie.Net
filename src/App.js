import React, { useState, useEffect } from "react";
import "./App.css";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "./components/images/Frame 6.svg";
import SearchResults from "./components/Search-results/SearchResults";
import SearchField from "./components/SearchField/SearchField";

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

  const onClick = () => {
    setTheme(!theme);
  };

  return (
    <div className={`App${theme ? " dark" : ""} w-100%  h-100%`}>
      <div className="bg-slate-300 h-100% dark:bg-dark-blue">
        <div className="container mx-auto px-2 py-6 md:px-6 md:mx-auto">
          <div className="flex justify-between">
            <div>
              <span className="text-3xl text-dark-blue font-bold dark:text-zinc-500">
                <img className="w-[5em] md:w-full"  src={logo} alt="logo" />
              </span>
            </div>
            <div className="header-cta between-column gap-3 mt-6 text-dark-blue dark:text-zinc-500">
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
          <SearchField term={term} setTerm={setTerm} setEndPoint={setEndPoint} />
          <SearchResults movies={movies} />
            
        </div>
        <h3 className="pt-48 md:pt-14 text-center dark:text-gray-700">copyright &copy; 2023,Yusphate.</h3> 
      </div>
    </div>
  );
}

export default App;
