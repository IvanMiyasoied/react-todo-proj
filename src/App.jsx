import List from "./components/List"
import Input from "./components/Input"
import Button from "./components/Button"
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const initialFormData = {title:'',description: '',status:''}

 function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((prevTasks) => {
        const originKey = uuidv4();
        return [...prevTasks,{...formData,id:originKey}]
    })
    setFormData(initialFormData);
  };

  const [formData,setFormData] = useState(initialFormData);
  const [tasks,setTasks] = useState([])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Input type={'text'} placeholder={'Нове завдання'} name='title' onChange={(event) => {
         setFormData((prevData) => {
          return {...prevData,title:event.target.value}
         })
         console.log(formData);
         
      }} />
      <Button text='Додати' type='submit' />
      <textarea  name="description" placeholder={'Що повинно бути зроблене?'} onChange={(event) => {
         setFormData((prevData) => {
          return {...prevData,description:event.target.value}
         } )
      }}></textarea>
      <div className="statusDropdown">
        <label>Status</label>
        <select name="status" id=""  onChange={(event) => {
          setFormData((prevData) => {
            return {...prevData,status:event.target.value}
          })
        }}>
          <option value="">New</option>
          <option value="">In Progres</option>
          <option value="">Complited</option>
        </select>
      </div>
      </form>
      <List items ={tasks}  />
      
    </>
  )
}



export default App
