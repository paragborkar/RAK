import { useEffect, useState } from "react"
import Box from "./Box"


const Home = () => {
    const [name,setName] = useState("");
    const [data,setData] = useState("");
    const [items, setItems] = useState([]);
    const handleDelete = (indexToDelete) => {
        setItems(prevItems => prevItems.filter((item, index) => index !== indexToDelete));
      };
    const addTodo = (e) =>{
        e.preventDefault();
        // localStorage.setItem('myArray', JSON.stringify(name));
        // const retrievedArray = JSON.parse(localStorage.getItem('myArray'));
        setItems([...items, name]);
        setName("");
        // setItems(retrievedArray);
    }
  
  return (
   
    <div className="">
        <form className="flex flex-col w-60 items-center w-full mt-[20vh]" onSubmit={addTodo}>
            <h1 className="font-bold mb-8">Todo Form</h1>
            <label>Enter Your Name</label>
            <input type="text" className="mb-3" value={name} onChange={(e) =>setName(e.target.value)}/>
            <button className="py-3 px-8 bg-orange-200 border-rounded" type="submit">Sumit</button>
           <span>{data}</span>
           <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="my-4  mx-4 py-2 px-4 bg-gray-300" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
            {/* <Box name={name} /> */}
        </form>
    </div>
  )
}

export default Home
