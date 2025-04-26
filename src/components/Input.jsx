

function Input(props) {
 const {type,name,placeholder,onChange,value} = props
  
  return (
      <input 
        type = {type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    
    
  );
}

export default Input