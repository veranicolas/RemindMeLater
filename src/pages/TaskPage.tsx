import { useAtom } from "jotai";
import React from "react";
import { Text, View } from "react-native";
import { taskAtoms } from "../jotai/atoms";

const TaskPage = ({id}:any) =>{

    const [tasks] = useAtom(taskAtoms)
    const currentTask = tasks.filter((task)=>{
        return task.id === id
    })

    return(
        <View style={{height:'100%', width:'100%'}}>
            <Text>{currentTask[0].id}</Text>
        </View>
    )
}

export { TaskPage }