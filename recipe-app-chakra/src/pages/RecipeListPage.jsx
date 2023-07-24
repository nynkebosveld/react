import {
    Heading,
    Card,
    CardBody,
    Stack,
    Image,
    Text, Input, CloseButton,
} from '@chakra-ui/react';
import {data} from '../utils/data';
import React, {useState} from "react";
import "../assets/css/pages/RecipeListPage.scss"

function Recipes(props) {
}

export const RecipeListPage = () => {
    const [search, setSearch] = useState("");


    const [chosenRecipe, setChosenRecipe] = useState(null);
    const setSearchInput = (event) => {
        setSearch(event.target.value)
    }

    const setRecipe = (index) => {
        setChosenRecipe(index);
        if (index === null) {
            window.location.reload();
        }
    }
    if (chosenRecipe === null) {
        let searchValueHealthLabel;
        let searchValueDietLabel;
        return (
            <>
                <div className="searchContainer">
                    <Input onChange={setSearchInput} placeholder='Search for a recipe' size='md'/>
                </div>
                <div className="container">
                    {/*<Center h="100vh" flexDir="column">*/}
                    {data.hits.map((hit, index) => {
                        hit.recipe.healthLabels.map((healthLabel, index) => {
                            if (healthLabel.toLowerCase().includes(search.toLowerCase())) {
                                searchValueHealthLabel = true
                            }
                        })
                        hit.recipe.dietLabels.map((healthLabel, index) => {
                            if (healthLabel.toLowerCase().includes(search.toLowerCase())) {
                                searchValueDietLabel = true
                            }
                        })
                        if (search === " " || hit.recipe.label.toLowerCase().includes(search.toLowerCase()) || hit.recipe.dishType[0].toLowerCase().includes(search.toLowerCase()) || searchValueHealthLabel || searchValueDietLabel)
                            return (
                                <>
                                    <Card key={index} onClick={() => setRecipe(index)} size={"lg"} maxW='sm' maxH='xxl'>
                                        <CardBody>
                                            <Image
                                                boxSize='400px'
                                                objectFit='cover'
                                                srcSet={`${hit.recipe.image}`}
                                                // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                                alt='Green double couch with wooden legs'
                                                borderRadius='md'
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading size='md'>{`${hit.recipe.label}`} </Heading>
                                                {
                                                    hit.recipe.healthLabels.includes("Vegan") || hit.recipe.healthLabels.includes("Vegetarian") &&
                                                    <Text className={'veganLabel'} color='purple.600' noOfLines={2}>
                                                        {hit.recipe.healthLabels.map((dietLabel, index) => {
                                                            return (
                                                                <span
                                                                    key={index}>{dietLabel.includes("Vegan") || dietLabel.includes("Vegetarian") && dietLabel} </span>
                                                            )
                                                        })}
                                                    </Text>
                                                }

                                                {
                                                    hit.recipe.dietLabels.length > 0 &&
                                                    <Text className={'dietLabel'} color='green.600' noOfLines={2}>
                                                        {hit.recipe.dietLabels.map((dietLabel, index) => {
                                                            return (
                                                                <span key={index}>{dietLabel} </span>
                                                            )
                                                        })}
                                                    </Text>
                                                }
                                                <Text>
                                                    Dish:&nbsp;
                                                    <span className={'dishType'}>
                                                         {hit.recipe.dishType}
                                                        </span>
                                                </Text>
                                                {hit.recipe.cautions.length > 0 &&
                                                    <Text>
                                                        Caution:&nbsp;
                                                    </Text>
                                                }
                                                {hit.recipe.cautions.length > 0 &&
                                                    <Text className={'cautionContainer'}>
                                                        {hit.recipe.cautions.map((caution, index) => {
                                                            return (
                                                                <span className={'cautionsLabel'}
                                                                      key={index}>{caution} </span>
                                                            )
                                                        })}
                                                    </Text>
                                                }
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </>
                            )
                    })}
                </div>
            </>
        );
    } else {
        let recipe = data.hits[chosenRecipe].recipe;

        return (
            <>
                <div className="rootContainer">
                    <div className="chosenFlex">
                        <header>
                            <button onClick={() => setRecipe(null)}>
                                <CloseButton size='md'/>
                            </button>
                        </header>
                        <main>
                            <div className="chosenRecipeContainer">
                                <div className="chosenRecipeImage">
                                    <Image
                                        className={'recipeImage'}
                                        boxSize='600px'
                                        objectFit='cover'
                                        srcSet={`${recipe.image}`}
                                        // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='md'
                                    />
                                </div>
                                <div className="chosenRecipeInfo">
                                    <div className="leftSide">
                                        <p className={'chosenDishType'}>
                                            {recipe.dishType}
                                        </p>
                                        <p className={'chosenLabel'}>
                                            {recipe.label}
                                        </p>
                                        <p className={'chosenCookingTime'}>
                                            Total cooking time: {recipe.totalTime} minutes
                                        </p>
                                        <p className={'chosenServingTime'}>
                                            Servings: {recipe.yield}
                                        </p>
                                        <ul className={'chosenIngredients'}>
                                            <span className={`textDeco`}> Ingriedients: </span>
                                            {recipe.ingredientLines.map((ingredient, index) => {
                                                    return (
                                                        <li className={'ingredientList'} key={index}>
                                                            {ingredient}
                                                        </li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </div>
                                    <div className="rightSide">
                                        <div className="healthLabelContainer">
                                            <p className={'chosenHealthLabels'}>
                                                Health labels:
                                            </p>
                                            <div className={'chosenHealthLabels'}>
                                                {recipe.healthLabels.map((healthLabel, index) => {
                                                        return (
                                                            <p className={'healthLabel'} key={index}>{healthLabel}</p>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>

                                        <div className="dietLabelContainer">
                                            <p className={'chosenDietLabels'}>
                                                Diet:
                                            </p>
                                            <div className={'chosenDietLabels'}>
                                                {recipe.dietLabels.map((dietLabels, index) => {
                                                        return (
                                                            <p className={'DietLabels'} key={index}>{dietLabels}</p>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>

                                        <div className="cautionsLabelContainer">
                                            <p className={'chosenCautionsLabels'}>
                                                Diet:
                                            </p>
                                            <div className={'chosenCautionsLabels'}>
                                                {recipe.cautions.map((cautions, index) => {
                                                        return (
                                                            <p key={index}>{cautions}</p>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>

                                        <div className="nutriensLabelContainer">
                                            <p className={'chosenNutriensLabels'}>
                                                Nutrients:
                                            </p>
                                            <div className={'chosenNutriensLabels'}>
                                                {Object.keys(recipe.totalNutrients).map((nutrient, index) => {
                                                        return (
                                                            <p key={index}>{nutrient}: {recipe.totalNutrients[nutrient].quantity.toFixed(2)} {recipe.totalNutrients[nutrient].unit}</p>
                                                        )
                                                    }
                                                )
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        )
    }
};
