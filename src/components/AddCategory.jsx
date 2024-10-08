import { useState } from "react"


export const AddCategory = ({  addNewCategory }) => {

    const [inputValue, setInputValue] = useState()

    const onInputChange = ({ target }) => {
      setInputValue(target.value);
      console.log(target.value);
    }

    const onSubmit = ( event ) => {
      event.preventDefault();

      if(inputValue.trim().length <= 1) return;

      
      addNewCategory( inputValue.trim() )
      setInputValue('')
    }

  return (
    <>
    <form onSubmit={ onSubmit }>
          <input 
            type="text"
            placeholder="Search Gifs..."
            value={inputValue}
            onChange={  onInputChange }
          />
    </form>
       
    </>
  )
}
