import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import React from 'react'
import {Image, Dimensions, StyleSheet, View} from 'react-native'
import Accueil from "../Pages/Accueil";
import Onboarding from "../Pages/Onboarding";
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const device_width = Dimensions.get('window').width
const icon_width = 7*device_width/100

let AccueilNavigation = createStackNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: {
            headerTitle: "ACCUEIL",
            headerStyle : {backgroundColor: "#4aaf78", elevation: 0},
            headerTitleStyle : {color: "white"}
        }
    },
}, {headerLayoutPreset : 'center'})

let BottomNavigation = createMaterialBottomTabNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: {
            tabBarIcon: <FontAwesome name="home" size={icon_width}/>,
            inactiveColor: "#0000ff",
            activeColor: "#4aaf78",
        }
    } ,
    Accueil2: {
        screen: Accueil,
        navigationOptions: {
            tabBarIcon: <Ionicons name="ios-stats" size={icon_width-3} color="green" />,
            inactiveColor: "#0000ff",
            activeColor: "#4aaf78",
        }
    },
    Accueil3: {
        screen: Accueil,
        navigationOptions: {
            tabBarIcon: <FontAwesome name="newspaper-o" size={icon_width-7} color="green" />,
            inactiveColor: "#0000ff",
            activeColor: "#4aaf78",
        }
    }
},{
     shifting: true,
    inactiveColor: "#0000ff",
    tabBarColor: "#4aaf78",
    labeled: false,
    barStyle: {backgroundColor: 'white'},
})


let AppNavigation = createSwitchNavigator({
    onBoarding: Onboarding,
    Accueil: createStackNavigator({
        Accueil: BottomNavigation,
    },{
        headerMode: "none"
    })
},    {
    defaultNavigationOptions: {},
    initialRouteName: 'onBoarding'
})


const styles = StyleSheet.create({

})

export default createAppContainer(AppNavigation)
