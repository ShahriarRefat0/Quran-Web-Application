import React from 'react';

const Searchbar = () => {
    return (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <input
                type="text"
                placeholder="Search surah, ayah, or keyword"
                className="h-11 w-full rounded-lg border border-[#e0b583]/30 bg-[#0e0e0e] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#e0b583]"
            />
            <button
                type="button"
                className="h-11 rounded-lg bg-[#e0b583]/90 px-4 text-sm font-semibold text-black transition hover:bg-[#e0b583] sm:px-5"
            >
                Search
            </button>
        </div>
    );
};

export default Searchbar;