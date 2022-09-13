import React from "react";
import { Modal, View, Text, Button} from "react-native";

export const AddReminderModal = (props:any) =>{

    return(
        <Modal visible={props.visible}>
            <View>
                <Text>Modal is open</Text>
                <Button title="ADD" onPress={()=>{props.setVisible(false)}}/>
            </View>
        </Modal>
    )
}
