import './App.css';
import {DrinkChoice} from "./components/DrinkChoice";
import {useState} from "react";
import {DrinkSearch} from "./DrinkSearch";
// import {Button} from "./components/ui/Button";
import {DrinkItem} from "./components/DrinkItem.js"



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
            <>
                <DrinkChoice drink={userDrink} />
            </>
            ): (
            <>
                'Please select a drink'
                <DrinkSearch />

            </>
            )}

    </div>
  );
}


