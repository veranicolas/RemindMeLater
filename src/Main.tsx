import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, FlatList, Pressable } from 'react-native'
import { RemindersList } from './List';
import { AddReminderModal } from './Modal';
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconAdd = (props:any) =>{
    return(
        <Pressable style={{alignSelf:'flex-end', paddingVertical:15}} android_ripple={{color:'black',radius:24}} onPress={props.onPressAddButton} >
            <Icon color={'white'} name='add-circle' size={55} />
        </Pressable>
    )
}

const Main = () =>{

    const [visible, setVisible] = useState(false)

    const DATA = ['Do this', 'Do that', 'Do that other thing','Do that other thing','Do this', 'Do that']

    const onPressAddButton = () =>{
        setVisible(true)
    }

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Reminders</Text>
                <RemindersList reminders={DATA}/>
                <IconAdd onPressAddButton={onPressAddButton}/>
                
                <AddReminderModal visible={visible} setVisible={setVisible}/>
                <StatusBar translucent/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:15,
        height:'100%',
        width:'100%',
        backgroundColor:'#e8e8e8'
    },
    title:{
        marginTop:StatusBar.currentHeight,
        width:'100%', 
        height:40, 
        fontSize:32, 
        color:'black', 
        fontWeight:'bold'
    },
    
});

export { Main }