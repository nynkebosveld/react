import './DrinkItem.css'
export const DrinkItem = ({drink}) => {
    return(
        <div className="Drink-Item">
            <img src={drink.imgUrl} alt={drink.alt}/>
            <h1>{drink.name}</h1>
        </div>
    )
}