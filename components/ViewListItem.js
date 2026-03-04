import { FlatList, StyleSheet,Text,View,TouchableOpacity } from "react-native";
import { useItems } from "../state/ItemContext";

function ListItemView() {
    const {items,deleteItem} = useItems();

    return (
        <View style={styles.topContainer}>  
         
            <FlatList
           data={items}
           keyExtractor={(item,index)=>item.id}
           renderItem={({item,index})=> 
        (
            <View style={styles.itemRow}>
                <Text>{item.name}</Text>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    
        }
         ListEmptyComponent={
          <Text style={{ margin: 20, fontSize: 16 }}>No items added yet</Text>
        }
           
           />
    
        </View>
    );
}

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    flex:1,
    height: '60%',
    //  backgroundColor: 'lightblue',

  },
  itemRow: {
    flexDirection: 'row',        // places text and button side by side
    justifyContent: 'space-between', // pushes delete to the right
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    color: 'red',
  },
  
});
export default ListItemView;