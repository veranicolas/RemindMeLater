import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Item = (item:any) =>{

    const onPressRemoveItem = () =>{
        console.log('item removed')
    }

    return(
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.item}</Text>
            <Pressable style={styles.removeButton} onPress={onPressRemoveItem} android_ripple={{color:'white'}}>
                <Icon style={styles.removeIcon} name="remove" size={24} color="white"/>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%', 
        height:80,
        alignSelf:'center',
        backgroundColor:'white', 
        marginVertical:12,
        borderRadius:12,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 8,
    },
    itemText:{
        textAlignVertical:'center', 
        height:80, 
        paddingLeft:15,
        fontSize:16,
        fontWeight:"500",
    },
    removeButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlignVertical:'center', 
        padding:20, 
        backgroundColor:'red', 
        borderTopRightRadius:12, 
        borderBottomRightRadius:12
    },
    removeIcon:{
        textAlignVertical:'center'
    }
})

export { Item };