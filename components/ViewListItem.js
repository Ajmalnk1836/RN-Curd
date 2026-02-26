import { FlatList, StyleSheet,Text,View } from "react-native";
import { useItems } from "../state/ItemContext";

function ListItemView() {
    const {items} = useItems();

    return (
        <View style={styles.topContainer}>   
            <FlatList
           data={items}
           keyExtractor={(item,index)=>index.toString()}
           renderItem={({item})=> <Text>{item}</Text>}
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
  
});
export default ListItemView;