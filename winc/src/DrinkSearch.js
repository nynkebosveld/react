import {useState} from "react";

export const DrinkSearch = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchField, setSearchField] = useState("Test")
    function updateSearch() {
       // setSearchField(document.querySelector("#searchBar").value())
    }

    return (
    <div>
        <label>Search for drinks:</label>
        <input onKeyUp={updateSearch()} id={'searchBar'} type={"text"}/>
    </div>
    )
}