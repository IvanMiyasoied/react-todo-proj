import List from "./components/List";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialFormData = {
  title: "",
  description: "",
  status: "new",
  startDate: "",
  deadline: "",
  priority: "medium",
};

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((prevTasks) => {
      const date = new Date();
      const originKey = uuidv4();
      return [...prevTasks, { ...formData, id: originKey,startDate: date }];
    });
    setFormData(initialFormData);
  };

  const [formData, setFormData] = useState(initialFormData);
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          placeholder={"Нове завдання"}
          name="title"
          value={formData.title}
          onChange={(event) => {
            setFormData((prevData) => {
              return { ...prevData, title: event.target.value };
            });
          }}
        />
        <textarea
          name="description"
          placeholder={"Що повинно бути зроблене?"}
          value={formData.description}
          onChange={(event) => {
            setFormData((prevData) => {
              return { ...prevData, description: event.target.value };
            });
          }}
        ></textarea>

        <div className="deadline">
          <label htmlFor="deadline">DeadLine</label>
          <Input
            type="date"
            name="deadline"
            id="deadline"
            value={formData.deadline}
            onChange={(event) => {
              setFormData((prevData) => {
                return { ...prevData, deadline: event.target.value };
              });
            }}
          />
        </div>

        <div>
          <label >Приоритет : <select name="priority" id="priority" value={formData.priority} onChange={(event) => {
            setFormData((prevData) => {
              return { ...prevData, priority: event.target.value };
            });
          }}>
            <option value="low">Низький</option>
            <option value="medium">Середній</option>
            <option value="high">Високий</option>
          </select>
          </label>
        </div>
        <Button text="Додати" type="submit" />
      </form>
      <List items={tasks} />
    </>
  );
}

export default App;
