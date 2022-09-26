import React from "react";
import { Modal, Text, View, Button, TextInput, StyleSheet, Pressable} from "react-native";
import { useAtom } from 'jotai'
import { taskAtoms } from './jotai/atoms'
import { useForm, Controller } from "react-hook-form";

type TaskAtom = {
    id:string,
    title:string,
    body:string,
    color:string,
}

export const AddReminderModal = (props:any) =>{

    const [tasks, setTasks] = useAtom(taskAtoms)

    const {control, handleSubmit, formState:{errors}, reset} = useForm()

    const onPressAddTask = (data:any) =>{
        const task = {
            ...data,
            id:(Math.random()*1000).toString(),
            color:'white'
        }
        setTasks(()=> [...tasks, task])
        props.setVisible(false)
        reset()
    }

    const onPressCancel = () =>{
        props.setVisible(false)
        reset()
    }

    return(
        <Modal presentationStyle="fullScreen" animationType="slide" visible={props.visible}>
            <View style={styles.form}>
                <View style={{height:'40%', justifyContent:'space-evenly'}}>
                    <Controller
                        control={control}
                        name="title"
                        render={({field:{onBlur, onChange, value}})=>
                            (<View style={{flexDirection:'column', justifyContent:'center'}}>
                                <TextInput
                                    style={errors.title ? styles.inputsError : styles.inputs}
                                    placeholder="Title"
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={(value:string)=> onChange(value)}
                                />
                                {errors.title && <Text style={{color:'red'}}>Must enter a title</Text>}
                            </View>)}
                        rules={{
                            required:'Must enter a title'
                        }}
                    />
                    
                    <Controller
                        control={control}
                        name="body"
                        render={({field:{onBlur, onChange, value}})=>
                            (<View style={{flexDirection:'column', justifyContent:'center'}}>
                                <TextInput
                                    style={errors.body ? styles.inputsError : styles.inputs}
                                    placeholder="Description"
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={(value:string)=> onChange(value)}
                                />
                                {errors.body && <Text style={{color:'red'}}>Must enter a description</Text>}
                            </View>)}
                        rules={{
                            required:'Must enter a description',
                        }}
                    />
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                        <Pressable style={[styles.buttons, styles.shadows]} onPress={onPressCancel}>
                            <Text style={[styles.buttonText,{color:'red'}]}>CANCEL</Text>
                        </Pressable>
                        <Pressable style={[styles.buttons, styles.shadows]} onPress={handleSubmit(onPressAddTask)}>
                            <Text style={[styles.buttonText,{color:'green'}]}>ADD</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputs:{
        borderWidth:1, 
        borderColor:'grey', 
        paddingHorizontal:10, 
        paddingBottom:8, 
        borderRadius:8
    },
    inputsError:{
        borderWidth:1, 
        borderColor:'red', 
        paddingHorizontal:10, 
        paddingBottom:8, 
        borderRadius:8
    },
    form:{
        flexDirection:'column', 
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        padding:25
    },
    buttons:{
        width:'45%', 
        height: 50,
        backgroundColor:'white',
        borderWidth:1,
        
        borderRadius:10
    },
    buttonText:{
        textAlign:'center', 
        textAlignVertical:'center', 
        height:50,
        fontWeight:'bold'
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