import React from 'react'

const SearchResults = ({ movies }) => {

  return (
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
  )
}

export default SearchResults
