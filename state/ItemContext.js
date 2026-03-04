import { createContext,useState,useContext ,useEffect, use} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const ItemContext = createContext();


export function ItemProvider({children}){
    const [items, setItems] = useState([]);
    const [inputvalue, setInputValue]=useState('');

//lod item when app 
useEffect(()=>{
    loadItems();
},[]);

    const handleAddItem =()=>{
        if(inputvalue.trim()==='')return;
        setItems([...items,inputvalue]);
        saveItems(items);
        setInputValue('');
    }

    const deleteItem =(index)=>{
        const newItems = [...items];
        newItems.splice(index,1);
        setItems(newItems);
          saveItems(newItems);
      
    }

      const saveItems = async (newItems) => {
    try {
      await AsyncStorage.setItem('items', JSON.stringify(newItems));
    } catch (error) {
      console.log('Error saving items:', error);
    }
  };



const loadItems = async()=>{
    try{
const stored = await AsyncStorage.getItem('items');
console.log('Loaded items from storage:');
if(stored !=null){
        console.log('Loaded items done:');
    setItems(JSON.parse(stored));
}else{
   console.log('Loaded items failed:');
}

    }catch(error){
        console.log('Error loading items:', error);
    }
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
