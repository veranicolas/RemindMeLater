import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export const RemindersList = (props:any) =>{

    return (
        <FlatList 
            style={{width:'100%', marginTop:30, marginBottom:30}}
            data={props.reminders}
            renderItem={(item)=>{
                return <View style={styles.item}>
                        <Text style={styles.itemText}>{item.item}</Text>
                    </View>
            }}
            keyExtractor={(item, index)=> { return (Math.random()).toString()}}
        />
    )
}

const styles = StyleSheet.create({
    item:{
        width:'100%', 
        height:110, 
        backgroundColor:'white', 
        marginVertical:12,
        borderRadius:12
    },
    itemText:{
        textAlignVertical:'center', 
        height:110, 
        paddingLeft:15
    }
})
                