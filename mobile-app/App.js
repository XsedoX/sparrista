import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from "./Screens/HomeScreen";
import {UserMainInterface} from "./Screens/UserMainInterface";
import AppLoading from "expo-app-loading";
import { useFonts, Karla_400Regular } from '@expo-google-fonts/karla';

const Stack = createNativeStackNavigator();


function App() {

    let [fontsLoaded] = useFonts({
        Karla_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }
    else{
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="UserMainInterface" component={UserMainInterface} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}




export default App;