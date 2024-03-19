import Image from "./components/Image";
import InfoBox from "./components/InfoBox";
import Ingredients from "./components/Ingredients";
import Title from "./components/Title";
import Instruction from "./components/Instruction";
import Table from "./components/Table";

function App() {
  const nutritionData = [
    { label: "Calories", value: "277kcal" },
    { label: "Carbs", value: "0g" },
    { label: "Protein", value: "20g" },
    { label: "Fat", value: "22g" },
  ];

  return (
    <div className="bg-orange-100 flex justify-center">
      <div className="rounded-2xl bg-white w-full md:max-w-3xl md:my-28 flex flex-col justify-center">
        <Image src="/omelette.jpg" />

        <div className="px-8">
          <h1 className="text-4xl mb-4">Simple Omelette Recipe</h1>
          <p className="mb-4">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perdection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <InfoBox
            title="Preparation Time"
            totalTime={10}
            preparationTime={5}
            cookingTime={5}
          />

          <div>
            <Title title="Ingredients" />
            <ul className="list-disc mb-4 px-4 list-outside  marker:text-amber-900">
              <Ingredients steps="2-3 large eggs" />
              <Ingredients steps="Salt, to taste" />
              <Ingredients steps="Pepper, to taste" />
              <Ingredients steps="1 tablespoon of butter or oil" />
              <Ingredients steps="Optional filings: cheese, diced vegetables, cooked meats, herbs" />
            </ul>
          </div>

          <div className="border-t-[1px]" />

          <Title title="Instructions" />
          <ul className="list-decimal mb-4 px-4 list-outside marker:text-amber-900">
            <Instruction
              title="Beat the eggs"
              description=": In a bowl, beat the eggs with a pinch of sat and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture"
            />
            <Instruction
              title="Heat the pan"
              description=": Place a non-stick
              frying pan over medium heat and add butter or oil"
            />
            <Instruction
              title="Cook the omelette"
              description=": Once the butter is melted and bubbling, pour in the eggs. Tilt the pan of ensure the eggs evenly coat the surface"
            />
            <Instruction
              title="Add fillings(optional)"
              description=": When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette"
            />
            <Instruction
              title="Fold and serve"
              description=": As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate"
            />
            <Instruction
              title="Enjoy"
              description=": Serve hot, with additional salt and pepper if needed"
            />
          </ul>

          <div className="border-t-[1px]" />
          
          <Title title="Nutrition" />
          <span>
            The table below shows nutritional values per serving without the
            additional fillings
          </span>
          <div className="my-4">
            <Table data={nutritionData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
