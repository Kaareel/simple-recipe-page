interface Item {
  value: string;
  label: string;
}

interface Props {
  data: Item[];
}

function Table(props: Props) {
  return (
    <ul className="grid divide-y text-sm ">
      {props.data.map((item, index) => (
        <li className="py-3 text-center flex justify-between px-8">
          <span>{item.label}</span>
          <span className="text-amber-900 font-bold">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default Table;
