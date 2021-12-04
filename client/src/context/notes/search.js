import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchState = (props) => {

    const [search, setsearch] = useState(null)

    return (
        <div>
            <SearchContext.Provider value={[search, setsearch]}> 
                {props.children}
            </SearchContext.Provider>
        </div>
    )
}

export default SearchState