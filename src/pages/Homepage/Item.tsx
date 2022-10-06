import React from "react";
import { Text, StyleSheet, Pressable, View } from 'react-native'
import { useAtom } from "jotai";
import { deleteMode, taskAtoms } from "../../jotai/atoms";
import Icon from 'react-native-vector-icons/FontAwesome'

const Item = (item:any) =>{

    const [deleteModeActive, setDeleteMode] = useAtom(deleteMode)
    const [tasks, setTasks] = useAtom(taskAtoms)

    const onPressRemoveItem = () =>{
        setTasks(()=>{
            return tasks.filter((task:any)=>{
                return task.id !== item.item.id 
            })
        })
    }

    const onPressNavigate = () =>{
        item.navigation.navigate('Task', {itemId:item.item.id})
    }

    return(
        <Pressable 
            onPress={onPressNavigate} 
            onLongPress={()=>{setDeleteMode(true)}} 
            style={[styles.item, styles.shadows, {backgroundColor:item.item.color}]}
        >
            <View style={[styles.item, {flexDirection:'column', width:'70%', justifyContent:'center'}]}>
                <Text style={[styles.itemText, {color:item.item.color === 'white' ? 'black' : 'white'}]}>{item.item.title}</Text>
                <Text numberOfLines={1} style={[styles.itemBody, {color:item.item.color === 'white' ? 'black' : '#e8e8e8'}]}>{item.item.body}</Text>
            </View>
            {
                deleteModeActive && 
               (<Pressable style={styles.removeButton} onPress={onPressRemoveItem} android_ripple={{color:'white'}}>
                <Icon style={styles.removeIcon} name="remove" size={24} color="white"/>
                </Pressable>)
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%', 
        height:80,
        alignSelf:'center',
        marginVertical:12,
        borderRadius:12,
    },
    itemText:{
        textAlignVertical:'center', 
        height:30, 
        paddingLeft:15,
        fontSize:18,
        fontWeight:"600",
        color:'black'
    },
    itemBody:{
        width:'80%',
        textAlignVertical:'center', 
        height:30, 
        paddingLeft:15,
        fontSize:14,
        fontWeight:"400",
        color:'grey',
    },
    removeButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlignVertical:'center', 
        padding:20, 
        backgroundColor:'black', 
        borderTopRightRadius:12, 
        borderBottomRightRadius:12
    },
    removeIcon:{
        textAlignVertical:'center'
    },
    shadows:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 8,
    }
})

export { Item };