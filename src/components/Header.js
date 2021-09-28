import PropTypes from 'prop-types'
import Button from './Button'

//header component that takes props, title (string), onAdd (fn), showAdd (fn)
const Header = ({ title, onAdd, showAdd}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button /* calls on button component*/ 
                /* styling depending on if add task form is shown*/
                color={showAdd ? 'red' : 'green'} 
                /* styling depending on if add task form is shown*/
                text={showAdd ? 'Close' : 'Add'}
                /* when btn is clicked run onAdd fn on line 65 in App.js*/
                onClick = {onAdd} 
            />
        </header>
    )
}

//default property value
Header.defaultProps = {
    title: 'Task Tracker'
}

//built in type system for props
//gives warning in consoles
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JSX
//within tag: style ={headingStyle}
// const headingStyle = {
//     color: 'red', backgroundColor: "black"
// }

export default Header
