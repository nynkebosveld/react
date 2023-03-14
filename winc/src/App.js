import './App.css';
import {DrinkButtons} from "./components/DrinkButtons";
import {coffee, tea} from "./utils/data";
import {Button} from "./components/ui/Button";
import {DrinkChoice} from "./components/DrinkChoice";



export const App = () => {

  const greeting = () => {
    return(
        "Welkom bij ons menu!"
    )
  }
  const userDrink = tea

  return (
    <div className="App">
      <h1>{greeting()}</h1>
      <DrinkButtons drinkTwo={coffee} drinkOne={tea} />
        <DrinkChoice drink={userDrink} />
    </div>
  );
}


