import "./listAccess.css"
import ItemList from "../../components/item_list"
import { useParams } from "react-router"
import { useEffect, useState } from "react"



function ListAccess(){
    const {id} = useParams()
    const [listItems, setList] =useState("")

useEffect(()=> {
        async function getList(){
            
            try{
                const items =  await fetch(`http://localhost:4000/api/v1/shop`, {method: "GET", headers: {"Content-type": "application/json", "Authorization": `Bearer ${id}`}})
                const listItems = await items.json()
                console.log(listItems)
                setList(listItems)
            }catch(e){
                console.log("erro aqui:",e)
            }
        }
        getList()
    }
    , [])

return(
<>
<main>
        <div className="mainContainerAcessPage">

            <div>
                <h1>{listItems.event_name}</h1> 
          
                <span className="endsAt">Termina em: {listItems.endsAt} </span> <br />
                <span className="owner">Evento por: euheber1@gmail.com </span>
            </div>
        <div className="listItemsContainer">
            {/* {listItems.list.map((item)=> (<ItemList item_name={item.item_name} key={item.id} isPurchased={item.isPurchased}/>))} */}
            {listItems && listItems.list && listItems.list.map((item) => (<ItemList key={item.id} item_name={item.item_name} isPurchased={item.isPurchased} itemId={item.id} /> ))}
                        
            
   
        </div>

        </div>
      </main>
</>
)

}


export default ListAccess