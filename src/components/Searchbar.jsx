const Searchbar = ({ userName, setUserName, fetchUserdata }) => {
  return (
    <div className="mt-8 w-[60rem] rounded-lg bg-slate-800 p-2 shadow-md">
      <form
        className="flex  items-center justify-between"
        onSubmit={fetchUserdata}
      >
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-4 h-6 w-6 text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="w-[48rem] bg-slate-800 px-3 py-2 text-xl focus:outline-none"
            type="search"
            name="serach"
            id=""
            placeholder="Search Github username..."
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-4 py-2 text-xl font-semibold shadow-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
