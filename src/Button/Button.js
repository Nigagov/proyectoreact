const Button = (props)=> {
    console.log(props)
    return <button onClick={props.handleClick} style={{color: props.color }}>{props.label}</button>
}

export default Button