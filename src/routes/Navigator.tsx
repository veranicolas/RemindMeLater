import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Main } from "../Main"

export const MainNavigation = () =>{

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Feed"
                component={Main}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )
}