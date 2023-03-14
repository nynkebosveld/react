import './DrinkButtons.css'
export const DrinkChoice = ({drink}) => {
    return(
        <div>
        <h1>{drink.name}</h1>
        <img className={"img"} src={drink.imgUrl} alt={drink.alt} />
            <p>Ur drink will be ready in a few minutes!</p>
        </div>
    )
}