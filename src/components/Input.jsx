

function Input(props) {
 const {type,name,placeholder,onChange} = props
  
  return (
      <input 
        type = {type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    
    
  );
}

export default Input