import React from "react";
import { Modal, Text, View, Button, TextInput} from "react-native";
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

    const { control, handleSubmit, formState:{errors}, reset } = useForm()

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

    return(
        <Modal visible={props.visible}>
            <View>
                <Controller
                    control={control}
                    name="title"
                    render={({field:{onBlur, onChange, value}})=>
                        (<>
                            <TextInput
                                placeholder="Title"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={(value:string)=> onChange(value)}
                            />
                            {errors.title && <Text style={{color:'red'}}>Must enter a title</Text>}
                        </>)}
                    rules={{
                        required:'Must enter a title'
                    }}
                />
                
                <Controller
                    control={control}
                    name="body"
                    render={({field:{onBlur, onChange, value}})=>
                        (<>
                            <TextInput
                                placeholder="Description"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={(value:string)=> onChange(value)}
                            />
                            {errors.body && <Text style={{color:'red'}}>Must enter a description</Text>}
                        </>)}
                    rules={{
                        required:'Must enter a description',
                    }}
                />
                
                <Button title="ADD" onPress={handleSubmit(onPressAddTask)}/>
            </View>
        </Modal>
    )
}
