import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { HeaderStyled } from "./style";

type Props = {
  setRenderedCategory: Dispatch<SetStateAction<string>>;
  setCurrentQuery: Dispatch<SetStateAction<string>>;
};

const Header = ({ setRenderedCategory, setCurrentQuery }: Props) => {
  const { getSearchResults } = useData();
  const theme = useTheme();
  const [query, setQuery] = useState<string>("");

  // handle submit search query
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // fetch search results
    getSearchResults(query);

    // to show query as "Search Results of 'something'"
    setCurrentQuery(query);

    // set main screen to searching
    setRenderedCategory("searching");

    // empty search bar content
    setQuery("");

    // scroll to top of the container
    const scrollDemo = document.querySelector("#gallery-scroll");
    scrollDemo?.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // if query is empty wehen submit, show Trending GIFs
    if (query === "") setRenderedCategory("trending");

    // notify here
    toast.success("Here what we found!");
  };

  // handle search bar content changing
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <HeaderStyled theme={theme}>
      <a className="logo" href="https://giphy.com/">
        <span>Powered by</span>
        {/* GIPHY logo svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 164 35"
          className="Svg-sc-jx1qpn cietHP"
        >
          <g fillRule="evenodd" clipRule="evenodd">
            <path fill="#00ff99" d="M0 3h4v29H0z"></path>
            <path fill="#9933ff" d="M24 11h4v21h-4z"></path>
            <path fill="#00ccff" d="M0 31h28v4H0z"></path>
            <path fill="#fff35c" d="M0 0h16v4H0z"></path>
            <path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path>
            <path fill="#121212" opacity="0.4" d="M24 16v-4h4M16 0v4h-4"></path>
          </g>
          <g fill="#ffffff">
            <path d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3 0-7.1 4.7-14.4 14.9-14.4 3.8 0 7.1.8 10.7 4.4L59.1 12zM68.2 31.2V4h7.6v27.2h-7.6zM88.3 23.8v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9h-5.5zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5v6.7zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2H125zM149.2 13.3l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7l5.5 9.3z"></path>
          </g>
        </svg>
      </a>

      <form action="" id="search-bar-form" onSubmit={handleSubmit}>
        {/* Search bar */}
        <div className="input-control">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="search-text-input"
            placeholder="Search for all GIFs ..."
          />
          <button className="submit-btn" aria-label="Buttomn with search icon">
            <MagnifyingGlassIcon width="2rem" height="2rem" />
          </button>
        </div>
      </form>
    </HeaderStyled>
  );
};

export default Header;
