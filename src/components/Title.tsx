interface Props{
    title: string
}

function Title(props: Props) {
    return <h2 className="text-2xl my-2 font-bold text-amber-900">{props.title}</h2>
}
export default Title