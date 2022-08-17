import "./wrapper.css"

//Only exist to hold all everything within
const Wrapper = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper