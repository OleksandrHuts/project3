import { useState } from "react";
import SearchBar from "../SearchBar";
import { searchMeals } from "../../services/api";

export default function Home() {
    const [searchText, setSearchText] = useState('');

    function onSearch() {
        console.log(searchMeals(searchText));
    }
    return (
        <SearchBar
            onSearch={onSearch}
            searchText={searchText}
            setSearchText={setSearchText}
        />
    )
}