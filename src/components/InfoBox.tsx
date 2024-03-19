interface Props {
    title: string,
    totalTime: number,
    preparationTime: number,
    cookingTime: number,

}


function InfoBox(props: Props) {
  return (
    <div className=" bg-fuchsia-100 text-sm rounded-xl p-5">
      <p className="font-bold text-base text-fuchsia-600 mb-2">
        {props.title}
      </p>
      <ul className="list-disc pl-4 list-outside">
        <li className="mb-2">
          <span className="font-bold">total</span>: Approximately {props.totalTime} minutes
        </li>
        <li className="mb-2">
          <span className="font-bold">Preparation</span>: {props.preparationTime} minutes
        </li>
        <li className="mb-2">
          <span className="font-bold">Cooking</span>: {props.cookingTime} minutes
        </li>
      </ul>
    </div>
  );
}
export default InfoBox;
