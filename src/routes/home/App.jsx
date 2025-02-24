import Input from "../../components/inputs";
import QuestionMarkIcon from "../../assets/question_mark_icon"
import ModalPopUp from "../../components/modal";
import { useEffect, useRef, useState } from "react";
import './app.css'

function App() {
  const [modalIsOpen, setModal] = useState(false)
  const containerRef = useRef(null)
  const [inputValue, setInputValue] = useState({
    owner: "",
    event_name: "",
    endsAt: "",
    items: [],
  });

  useEffect(() => { 
    if(containerRef.current){ 
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
}, [inputValue.items])

const checkFieldsAndPost = () => {

  const listData = {
    owner: inputValue.owner,
    event_name: inputValue.event_name,
    ends: inputValue.endsAt,
    items: inputValue.items.map((item) => { return {item_name: item.item_name}})
  }

  const isEmpty = Object.values(listData).some((value) => {
    if (Array.isArray(value)) {
      // Se o valor for um array, verificar cada objeto dentro dele
      return value.some((item) => {
        // Percorre os objetos no array e verifica se algum campo está vazio
        return Object.values(item).some((innerValue) => innerValue.trim() === "");
      });
    }
    // Para valores simples, apenas verifica se estão vazios
    return typeof value === "string" && value.trim() === "";
  });
  

  if(isEmpty){ 
   alert("Campos vazioS")
    return
  }
 
}

  const addComponent = () => {
    const newId = new Date().getTime(); 
    setInputValue((prev) => ({
      ...prev,
      items: [...prev.items, { id: newId, item_name: "" }], 
    }));
  };



  const handleChange = (event, inputFieldName, itemId) => {
    
    if (itemId) {
      setInputValue((prev) => ({
        ...prev,
        items: prev.items.map((item) =>
          item.id === itemId
            ? { ...item, item_name: event.target.value } 
            : item
        ),
      }));
      return;
    }

  
    setInputValue((prev) => ({
      ...prev,
      [inputFieldName]: event.target.value, 
    }));
  };

  const deleteItem = (event, id) => { 
    setInputValue((prev) => {
      // Encontrando o índice do item com o id correspondente
      const index = prev.items.findIndex((item) => item.id === id);
      
      // Se o item for encontrado, removemos ele usando splice
      if (index !== -1) {
        const updatedItems = [...prev.items]; // Faz uma cópia para evitar mutar o array diretamente
        updatedItems.splice(index, 1); // Remove 1 item no índice encontrado
        return {
          ...prev,
          items: updatedItems,
        };
      }
      
      return prev; // Retorna o estado sem mudanças se o item não for encontrado
    });
  };


  return (
    <>
      <main>
        <div className="mainContainer">
          <div className="header">
          <h1>Crie sua lista de compras</h1> <button className="questionMarkIcon" onClick={() => setModal(prev => !prev)}><QuestionMarkIcon /> </button>
          
            <input placeholder={"Nome do evento"} value={inputValue.event_name} onChange={(event) => handleChange(event, "event_name")} className="inputUI"/>
            <input placeholder={"Seu email"} value={inputValue.owner} onChange={(event) => handleChange(event, "owner")} className="inputUI"/>
            Dia: <input id="date" type="date" value={inputValue.endsAt} onChange={(event) => handleChange(event, "endsAt")} className="inputDate"/>
         
          </div>

          <div className="itensContainer" ref={containerRef}>
            {inputValue.items.map((input) => (<Input key={input.id} id={input.id} value={input.item_name} placeholder="Nome do item" onChange={(event) => handleChange(event, null, input.id)} onClick={deleteItem} />))}
          </div>


          <div className="buttonContainer">
          <button className="button add" onClick={addComponent}>Adiocionar item</button>
          <button className="button create" onClick={checkFieldsAndPost}>Criar lista</button>
          </div>

        {modalIsOpen ? <ModalPopUp /> : null}
        </div>

      </main>
    </>
  );
}

export default App;
