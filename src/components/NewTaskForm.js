import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [category, selectCategory] = useState("Code")
  const [text, setText] = useState("")


  const optionList = categories.filter((category) => category !== "All").map((category) => {
    return(
      <option 
      value={category}
      >
        {category}
      </option>
    )
  })

  const submitHandler = (e) => {
    e.preventDefault()


    onTaskFormSubmit({
      text: text,
      category: category
    })
  }

  const handleText = (e) => {

    setText(e.target.value);
  }

  const handleCategory = (e) => {
    selectCategory(e.target.value)
  }



  return (
    <form onSubmit={submitHandler} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category}>
          {/* render <option> elements for each category here */}
          {optionList}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
