export default function TopBar() {
  return (
    <div className="ml-64 flex center justify-end items-center bg-zinc-800 text-gray-100 py-3 px-8 sticky top-0  flex-1 gap-3">
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="UI Kits, Dashboards..."
          />
          <button
            className="cursor-pointer absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-[#dab02a] focus:shadow-none active:bg-slate-700 hover:bg-[#dab02a] hover:text-black focus:text-black ease-linear duration-200 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
      <button
        type="button"
        className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
      >
        <div
          className={`bg-slate-200 block w-8 h-[0.2rem] rounded transition-all origin-[1px]`}
        />
        <div
          className={`bg-slate-200 block w-8 h-[0.2rem] rounded transition-all origin-[1px]`}
        />
        <div
          className={`bg-slate-200 block w-8 h-[0.2rem] rounded transition-all origin-[1px]`}
        />
      </button>
    </div>
  );
}
