

const Cake = ({cake}) => {

  // showIngredientListItems

  const showIngredientListItems = cake.ingredients.map((ingredients) => {
    return <li>{ingredients}</li>
  });

  return (
    <>
        <h2>{cake.cakeName}</h2>
        <p>rating: {cake.rating} </p>
        <p>priceL {cake.price}</p>
        <p>Ingredients :</p>
        <p>{showIngredientListItems}</p>

    </>
  )
}

export default Cake;