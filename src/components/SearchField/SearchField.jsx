import React from 'react';


const SearchField = ({ term, setTerm, setEndPoint }) => {
    const onChangeHandler = (e) => {
        setTerm(e.target.value);
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
        setEndPoint(term);
      };
  return (
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
  )
}

export default SearchField