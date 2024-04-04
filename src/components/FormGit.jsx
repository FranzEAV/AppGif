import { useState } from "react"

export const FormGit = (props) => {

    const {addCategory} = props

    const {categories, setCategories} = props

    const [category, setCategory] = useState("")

    const handleInput = (event) => {
        setCategory(event.target.value)
    }

    const handleSubmitGif = (event) => {
        event.preventDefault() //evitar un renderizado de la aplicacion
        addCategory(category)
        setCategory("")
    }

    console.log("category", category)

    return (
        <form onSubmit={handleSubmitGif}>
            <input onChange={handleInput} type="text" placeholder="Buscador Gif..." value={category}/>
            <button>Buscar</button>
        </form>
    )
}