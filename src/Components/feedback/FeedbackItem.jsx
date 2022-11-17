import { useState } from "react"

const FeedBackItem = () => {
const [rating,setRating] = useState(1)
const [texto, setTexto] = useState("Buen instructor, por favor mejorar los recursos")

    return(
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-rating">
                {texto}
            </div>
            <button onClick={()=>{setTexto("lol")}}>
                Boton
            </button>
        </div>
    )
}
export default FeedBackItem
