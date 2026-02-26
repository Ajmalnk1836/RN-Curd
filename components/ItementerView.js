
import { StyleSheet, Text, View ,TextInput,Button,Platform,Alert} from 'react-native';
import { useItems } from '../state/ItemContext';
function ItementerView() {
    const {inputvalue,setInputValue,handleAddItem}=useItems();
    return (
        <View style={styles.bottomContainer}>
            <Text style={styles.heading}>Add the value</Text>
            <TextInput style={styles.textInput} 
            placeholder="Enter value here"
            value={inputvalue}
            onChangeText={(text)=>setInputValue(text)}  
            />
             <Button
          title="Add Item"
          onPress={() => {
            handleAddItem();
          }}  
        />

        </View>
    )
}


const styles = StyleSheet.create({
 
   bottomContainer: {   
    // backgroundColor: 'lightgreen',
    width: '100%',
    height: '40%',
    borderColor: 'black',
    borderWidth: 2,
     alignItems:'center',
  },
heading:{
    fontSize:20,
    fontWeight:'bold',
    margin:10,
    marginTop:60,

  },

  textInput:{
    height:40,
    margin:12,
    borderWidth:3,
    padding:10,
    width:'80%',

  }
 

  
});


export default ItementerView;