import {useState} from "react";
import {DrinkList} from "./components/DrinkList";
import {availableDrinks} from "./utils/data";

export const DrinkSearch = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchField, setSearchField] = useState('test drink')
    function updateSearch() {
       // setSearchField(document.querySelector("#searchBar").value())
    }

    return (
    <div>
        <label>Search for drinks:</label>
        <input onKeyUp={updateSearch()} id={'searchBar'} type={"text"}/>
        <DrinkList drinks={availableDrinks}/>
    </div>
    )
}