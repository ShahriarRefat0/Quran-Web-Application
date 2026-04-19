"use client";

import React from 'react';

interface SearchbarProps {
  onSearch?: (query: string) => void;
  value?: string;
  placeholder?: string;
}

const Searchbar = ({ 
  onSearch, 
  value = '', 
  placeholder = "Search surah, ayah, or keyword" 
}: SearchbarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  const handleClear = () => {
    onSearch?.('');
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="h-11 w-full rounded-lg border border-[#e0b583]/30 bg-[#0e0e0e] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#e0b583]"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="h-11 rounded-lg border border-[#e0b583]/30 px-4 text-sm font-semibold text-[#e0b583] transition hover:bg-[#e0b583]/10 sm:px-5"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Searchbar;