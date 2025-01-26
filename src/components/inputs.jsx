function Input({value, onChange, placeholder, onClick, id}) {

  return (
    <>
     <div className="inputContainer">
      <input type="text" value={value} onChange={onChange} placeholder={placeholder}  className="inputUI item"/>
      <button onClick={(event) => onClick(event, id)} className="deleteButton">Remover</button>
     </div>
    </>
  );
}

export default Input
