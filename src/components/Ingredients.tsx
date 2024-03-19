interface Props {
  steps: string
}

function Ingredients(props: Props) {
  return (
    <div>
        <li>{props.steps}</li>
    </div>
  );
}

export default Ingredients;
