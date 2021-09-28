import PropTypes from "prop-types"

//button functional component takes in color, text, and function onClick
//imported into Header
const Button = ({color, text, onClick}) => {
 
    return (
    <button 
        onClick = {onClick} /* when clicked run fn onClick */
        style = {{backgroundColor: color}}
        className = 'btn'
    >
        {text}
    </button> 
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

//built in type system for props
//gives warning in consoles
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
