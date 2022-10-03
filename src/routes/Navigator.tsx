import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Homepage } from "../pages/Homepage/Homepage"
import { TaskPage } from "../pages/TaskPage"

export const MainNavigation = () =>{

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Feed"
                component={Homepage}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Task"
                component={TaskPage}
                options={{
                    headerTitle:''
                }}
            />
        </Stack.Navigator>
    )
}