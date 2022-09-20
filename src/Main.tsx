import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Pressable } from 'react-native'
import { CustomIconButton } from './components/CustomButton';
import { RemindersList } from './List';
import { AddReminderModal } from './Modal';


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
                <CustomIconButton name="add-circle" onPressAddButton={onPressAddButton}/>
                
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
        backgroundColor:'white'
    },
    title:{
        marginTop:StatusBar.currentHeight,
        width:'100%', 
        height:40, 
        fontSize:32, 
        color:'black', 
        fontWeight:'bold',
        paddingLeft:8
    },
});

export { Main }