import { createContext,useState,useContext, useEffect } from "react";
import * as SQLite from 'expo-sqlite';


const db =  SQLite.openDatabaseSync('items');
const ItemContext = createContext();

export function ItemProvider({children}){
    const [items, setItems] = useState([]);
    const [inputvalue, setInputValue]=useState('');

     useEffect(() => {
        initDb();
    }, []);

     const initDb =() =>{
       try{
         db.execSync('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT NOT NULL);');
 
     loadItems();
       }catch(error){
        console.log("error creating table ",error);
       }
    }
   
const loadItems  =  ()=>{
    const result =  db.getAllSync('SELECT * FROM iteqms;');
    console.log("result items is ",result);
    setItems(result);

}


    const handleAddItem =()=>{
        if(inputvalue.trim()==='')return;

        const result =  db.runSync('INSERT INTO items (name) VALUES (?);', [inputvalue]);
        console.log("result is ",result);
     loadItems();
        setInputValue('');
    }

    const deleteItem =  (id)=>{
    const result =  db.runSync('DELETE FROM items WHERE id = ?;', [id]);
        console.log("result is ",result);
      
          loadItems();
      
    }
return (
    <ItemContext.Provider value={{items,inputvalue,setInputValue,handleAddItem,deleteItem}}>
        {children}
    </ItemContext.Provider>
);


}

//custom hook to use the item context
export function useItems(){
    return useContext(ItemContext);
}
