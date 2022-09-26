import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Item } from "./Item";
import { taskAtoms } from "./jotai/atoms";
import { useAtom } from "jotai";

export const RemindersList = (props:any) =>{

    const [tasks] = useAtom(taskAtoms)

    return (
        <FlatList 
            style={styles.itemList}
            data={tasks}
            renderItem={(item)=>{
                return <>
                    <Item deleteMode={props.deleteMode} setDeleteMode={props.setDeleteMode} item={item.item}/>
                </>
            }}
            keyExtractor={(item, index)=> { return (Math.random()).toString()}}
        />
    )
}

const styles = StyleSheet.create({
    itemList:{
        width:'100%', 
        marginTop:30, 
        marginBottom:0
    }
})
                