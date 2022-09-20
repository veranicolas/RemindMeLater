import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Pressable } from 'react-native'
import { RemindersList } from './List';
import { AddReminderModal } from './Modal';
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconAdd = (props:any) =>{
    return(
        <Pressable style={{alignSelf:'flex-end', paddingVertical:15}} android_ripple={{color:'black',radius:23, foreground:false}} onPress={props.onPressAddButton} >
            <Icon style={[styles.shadows,{borderRadius:55}]} color={'white'} name='add-circle' size={55} />
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
    shadows:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 14,
    }
});

export { Main }