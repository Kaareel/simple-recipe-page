interface Props {
    title: string,
    description: string,
}
function Instruction(props: Props){
    return (
        <li className="mb-2">
              <span className="font-bold">{props.title}</span>{props.description}
            </li>
    )
}

export default Instruction