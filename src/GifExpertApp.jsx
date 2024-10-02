import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku'])

    const onAddCategory = (category) => {
        if (categories.includes(category)) return
        
        setCategories([category, ...categories  ]);
    }

  return (
    <>
   
        <h1>GifExpertApp</h1>
    
    <AddCategory 
        addNewCategory={ onAddCategory }
    />

        {
            categories.map((category) => 
            (
                <GifGrid key={category} category={category} />
            ))
        }
        
    
        
    </>
  )
}
