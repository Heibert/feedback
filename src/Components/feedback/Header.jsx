import { propTypes } from "prop-types"

const Header = ({estilo}) => {
    return(
        <header style={estilo}>
            <h1>Encabezado</h1>
            <p>Feedback App</p>
        </header>
    )
}
Header.defaultProps={
    bgcolor: "#e5b23c",
    color: "#FFFFFF"
}

Header.propTypes={
    
}

export default Header