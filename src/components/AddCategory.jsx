import { useState } from "react"


export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch')

  return (
    <>
        <input 
            type="text"
            placeholder="Search Gifs..."
            value={inputValue}
        />
    </>
  )
}
