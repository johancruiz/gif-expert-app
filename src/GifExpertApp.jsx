import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku', 'Luffy'])

    const onAddCategory = (category) => {
        if (categories.includes(category)) return
        
        setCategories([category, ...categories  ]);
    }

  return (
    <>
    {/**Titulo */}
        <h1>GifExpertApp</h1>
    {/** Input */}
    <AddCategory 
        addNewCategory={ onAddCategory }
    />

    {/** Listado Gif */}
    
    <ol>
        {categories.map((category, i) => {
            return <li key={i} >{category}</li>
        })}
        
    </ol>
        {/** Gif Item */}
    </>
  )
}
