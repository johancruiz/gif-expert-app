import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku', 'Luffy'])

    const onAddCategory = () => {
        setCategories([...categories, 'Naruto'  ]);
    }

  return (
    <>
    {/**Titulo */}
        <h1>GifExpertApp</h1>
    {/** Input */}
    <AddCategory />

    {/** Listado Gif */}
    <button onClick={onAddCategory} >Add</button>
    <ol>
        {categories.map((category) => {
            return <li key={category} >{category}</li>
        })}
        
    </ol>
        {/** Gif Item */}
    </>
  )
}
