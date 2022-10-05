import React from "react";
import { Text, StyleSheet, Pressable } from 'react-native'
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

    return(
        <Pressable onLongPress={()=>{setDeleteMode(true)}} style={[styles.item, {backgroundColor:item.item.color}]}>
            <Text style={styles.itemText}>{item.item.title}</Text>
            <Text numberOfLines={1} style={styles.itemBody}>{item.item.body}</Text>
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
        flexDirection:'column',
        justifyContent:'center',
        width:'95%', 
        height:80,
        alignSelf:'center',
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
        height:30, 
        paddingLeft:15,
        fontSize:18,
        fontWeight:"600",
        color:'black'
    },
    itemBody:{
        width:'90%',
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
    }
})

export { Item };