import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Pressable } from 'react-native'
import { CustomIconButton } from './components/CustomButton';
import { RemindersList } from './List';
import { AddReminderModal } from './Modal';


const Main = () =>{

    const [visible, setVisible] = useState(false)
    const [deleteMode, setDeleteMode] = useState(false)

    const DATA = ['Do this', 'Do that', 'Do that other thing','Do that other thing','Do this', 'Do that']

    const onPressAddButton = () =>{
        setVisible(true)
    }

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Reminders</Text>
                    {
                        deleteMode &&
                        (<Pressable style={styles.cancelButton} onPress={()=>{setDeleteMode(false)}}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </Pressable>)
                    }
                </View>
                <RemindersList deleteMode={deleteMode} setDeleteMode={setDeleteMode} reminders={DATA}/>
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
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:StatusBar.currentHeight,
        width:'100%', 
        height:40, 
        paddingHorizontal:10
    },
    titleText:{
        fontSize:32, 
        color:'black', 
        fontWeight:'bold',
    },
    cancelButton:{
        height:40,
        width:65,
        borderRadius:8,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 8,
    },
    cancelButtonText:{
        height:40, 
        fontWeight:'bold',
        textAlignVertical:'center', 
        textAlign:'center', 
        color:'red'
    }
});

export { Main }