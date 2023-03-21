import './App.css';
import {DrinkButtons} from "./components/DrinkButtons";
import {coffee, tea} from "./utils/data";
import {DrinkChoice} from "./components/DrinkChoice";
import {useState} from "react";
import {DrinkSearch} from "./DrinkSearch";


export const App = () => {

  const greeting = () => {
    return(
        "Welkom bij ons menu!"
    )
  }
    const [userDrink, setUserDrink] = useState();
  return (
    <div className="App">
       <h1 className={userDrink && "hidden"}>{greeting()}</h1>

        {userDrink ? (
                <DrinkChoice drink={userDrink} />

            ): (
            <>
                'Please select a drink'
                <DrinkSearch />
                <DrinkButtons drinkTwo={coffee} drinkOne={tea} />
            </>
            )}
    </div>
  );
}


