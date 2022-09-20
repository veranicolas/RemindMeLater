import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export const RemindersList = (props:any) =>{

    return (
        <FlatList 
            style={{width:'100%', marginTop:30, marginBottom:20}}
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
        paddingLeft:15
    }
})
                