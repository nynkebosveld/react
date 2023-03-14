import {Button} from "./ui/Button";

export const DrinkButtons = ({ drinkOne, drinkTwo}) => {

    return (
        <>
            <header>
                <h2>"Would you like coffee or tea?</h2>
            </header>
            <div className={"button-group"}>
                <Button text={drinkOne.name} />
                <Button text={drinkTwo.name} />
            </div>
        </>
    )
}

