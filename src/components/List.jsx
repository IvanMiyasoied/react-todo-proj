import React from "react";


const List = ({items}) => {
  
  return (
    <ul>
      {items.map(({id,title,description,status,startDate,deadline,priority}) => {
        const year = startDate.getFullYear();
        const month = startDate.getMonth() + 1;
        const day = startDate.getDate();
        const currentDate = `${year}-${month}-${day}`
       console.log(year);
       
        return (
          <li key={id}>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Статус: {status}</p>
            <p>Дата створення: {currentDate}</p>
            <p>Закінчити: {deadline}</p>
            <p>Приоритет: {priority}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
