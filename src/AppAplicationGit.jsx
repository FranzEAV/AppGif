import { CardGif, FormGit } from "./components"
import { useState } from "react"

export const AppAplicationGif = () => {

        const [categories, setCategories] = useState(["Goku"])

        const addCategory = (category) =>{
            setCategories([category, ...categories])
        }

    return (
        <div>
            <h1>Aplicativo Gif Certus :D</h1>
            <FormGit addCategory={addCategory}/>
            {categories.map((category) => (
            <div key={category} > {category}</div>
            ))}

            {
                categories.map((category) =>(
                    <CardGif key={category} category={category}/>
                ))
            }

            
        </div>
    )
}