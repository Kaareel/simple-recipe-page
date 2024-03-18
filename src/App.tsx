function App() {
  return (
    <div>
      <img src="./omelette.jpg" alt="main" />
      <div className="p-5">
        <h1 className="text-5xl mb-4">Simple Omelette Recipe</h1>
        <p className="mb-4">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perdection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className=" bg-fuchsia-100 text-sm rounded-xl p-5">
          <p className="text-4xl text-fuchsia-600 mb-2">Preparation time</p>
          <ul className="list-disc pl-4 list-outside">
            <li className="mb-2">
              <span className="font-bold">total</span>: Approximately 10 minutes
            </li>
            <li className="mb-2">
              <span className="font-bold">Preparation</span>: 5 minutes
            </li>
            <li className="mb-2">
              <span className="font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>
        <div> 
          <h2 className="text-4xl my-2 font-bold text-amber-900">Ingredients</h2>
          <ul className="list-disc mb-4 px-4 list-outside  marker:text-amber-900">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional filings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div className="border-t-[1px]"/>
        <h2 className="text-4xl my-2 font-bold text-amber-900">Instructions</h2>
        <ul className="list-decimal mb-4 px-4 list-outside marker:text-amber-900">
          <li className="mb-2">
            <span className="font-bold">Beat the eggs</span>: In a bowl, beat the eggs with a pinch of
            sat and pepper until they are well mixed. You can add a tablespoon
            of water or milk for a fluffier texture
          </li>
          <li className="mb-2">
            <span className="font-bold">Heat the pan</span>: Place a non-stick frying pan over medium
            heat and add butter or oil
          </li>
          <li className="mb-2">
            <span className="font-bold">Cook the omelette</span>: Once the butter is melted and
            bubbling, pour in the wggs. Tilt the pan of ensure the eggs evenly
            coat the surface
          </li>
          <li className="mb-2">
            <span className="font-bold">Add fillings(optional)</span>: When the eggs begin to set at
            the edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette
          </li>
          <li className="mb-2">
            <span className="font-bold">Fold and serve</span>: As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate
          </li>
          <li className="mb-2">
            <span className="font-bold">Enjoy</span>: Serve hot, with additional salt and pepper if
            needed
          </li>
        </ul>
        <div className="border-t-[1px]"/>
        <h2 className="text-4xl my-2 font-bold text-amber-900">Nutrition</h2>
        <span>
          The table below shows nutritional values per serving without the
          additional fillings
        </span>
        <div className="my-4">
          <ul className="grid divide-y text-sm ">
            <li className="py-3 text-center flex justify-between px-8">
              <span className="">Calories</span>
              <span className="text-amber-900 font-bold ">277kcal</span>
            </li>
            <li className="py-3 text-center flex justify-between px-8">
              <span>Carbs</span>
              <span className="text-amber-900 font-bold">0g</span>
            </li>
            <li className="py-3 text-center flex justify-between px-8">
              <span>Protein</span>
              <span className="text-amber-900 font-bold">20g</span>
            </li>
            <li className="py-3 text-center flex justify-between px-8">
              <span>Fat</span>
              <span className="text-amber-900 font-bold">22g</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
