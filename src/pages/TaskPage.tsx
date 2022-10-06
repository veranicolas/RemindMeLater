import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useAtom } from "jotai";
import { taskAtoms } from "../jotai/atoms";
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/MaterialIcons'

type TaskNavigation = NativeStackScreenProps<any,'Task'>

const STATUSBAR_HEIGHT = StatusBar.currentHeight

const TaskPage = ({ route, navigation }:TaskNavigation) =>{

    const [tasks] = useAtom(taskAtoms)
    //@ts-ignore
    const { itemId } = route.params
    const task = tasks.find((task:any)=>{
        return task.id === itemId
    })

    return(
        <View style={styles.container}>
            <View style={[{height:60, width:'100%', marginTop:STATUSBAR_HEIGHT, padding:10}]}>
                <Icon onPress={()=>{navigation.goBack()}} name="arrow-back" size={35} color="#333333"/>
            </View>
            <View style={{paddingHorizontal:55, paddingVertical:20}}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.body}>{task.body}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%', 
        width:'100%',
        backgroundColor:'white',
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#333333'
    },
    body:{
        marginTop: 10,
        fontSize:18
    }
})

export { TaskPage }