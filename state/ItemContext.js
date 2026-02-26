import { createContext,useState,useContext } from "react";
const ItemContext = createContext();

export function ItemProvider({children}){
    const [items, setItems] = useState([]);
    const [inputvalue, setInputValue]=useState('');
    const handleAddItem =()=>{
        if(inputvalue.trim()==='')return;
        setItems([...items,inputvalue]);
        setInputValue('');
    }
return (
    <ItemContext.Provider value={{items,inputvalue,setInputValue,handleAddItem}}>
        {children}
    </ItemContext.Provider>
);


}

//custom hook to use the item context
export function useItems(){
    return useContext(ItemContext);
}
