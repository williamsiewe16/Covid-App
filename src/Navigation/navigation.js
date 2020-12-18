import {createAppContainer, createSwitchNavigator, ScrollView} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator, DrawerNavigatorItems} from "react-navigation-drawer"
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import React from 'react'
import {Text, Image, Dimensions, StyleSheet, View, SafeAreaView} from 'react-native'

import Accueil from "../Pages/Accueil";
import Onboarding from "../Pages/Onboarding";

/** Onglet News */
import News from "../Pages/News"
import Articles from "../Pages/Articles"
import ArticleView from "../Components/ArticleView"

/** Onglet Stats */
import Stats from "../Pages/Stats"
import CountrySearch from "../Pages/CountrySearch"

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {
    Switch, Badge, Modal, Paragraph
} from "react-native-paper"
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import DrawerItem from "react-native-paper/src/components/Drawer/DrawerItem";
import HeaderIcon from "../Components/HeaderIcon";

const device_width = Dimensions.get('window').width
const icon_width = 7*device_width/100

let StatsNavigation = createStackNavigator({
    Stats: {
        screen: Stats,
    },
    Search: {
        screen: CountrySearch,
    }
}, )

let NewsNavigation = createStackNavigator({
    News: {
        screen: News,
    },
    Articles: {
        screen: Articles,
    },
    ArticleView: {
        screen: ArticleView,
    },
}, {headerLayoutPreset : 'center'})

let InfosNavigation = createStackNavigator({
    Infos: {
        screen: Accueil,
        navigationOptions: {
            headerTitle: "ACCUEIL",
            headerStyle : {backgroundColor: "#4aaf78", elevation: 0},
            headerTitleStyle : {color: "white"}
        }
    },
}, {headerLayoutPreset : 'center'})


let AppNavigation = createSwitchNavigator({
    test: createDrawerNavigator({
        stats: StatsNavigation, news: NewsNavigation, infos: InfosNavigation,
    }, {
        contentComponent: props => (
            <SafeAreaView style={{flex: 1}}>
                <View style={{justifyContent: "center", alignItems: "center", padding: 20}}>
                    <Image source={require('../../assets/images/stats.png')} style={styles.logo}/>
                </View>
                <ScrollView contentContainerStyle={{flex: 1}}>
                    <DrawerSection>
                        <DrawerItem icon={({color, size}) => (<Ionicons name="ios-stats" size={size}  color="black" />)} label={"Stats"} onPress={() => {props.navigation.navigate("stats")}}></DrawerItem>
                        <DrawerItem icon={({color, size}) => (<FontAwesome name={"newspaper-o"} size={size-7}  color="black" />)} label={"News"} onPress={() => {props.navigation.navigate("news")}}></DrawerItem>
                        <DrawerItem icon={({color,size}) => (<Ionicons name="md-information-circle-outline" size={size} color="black" />)} label={"Infos"}  onPress={() => {props.navigation.navigate("infos")}}></DrawerItem>
                    </DrawerSection>
                    <DrawerSection title={"Preferences"}>
                        <Text>Dark Theme</Text>
                        <Switch value={"e"}/>
                    </DrawerSection>
                </ScrollView>
                <View>
                    <Text style={{flex: 1}}>dghfg</Text>
                </View>
            </SafeAreaView>
        ),
        contentOptions: {
            labelStyle: {fontFamily: "Raleway-Regular"},
            activeTintColor: "red",
            activeBackgroundColor: 'red'
        }
    }),
    onBoarding: Onboarding,
},    {
    defaultNavigationOptions: {},
    initialRouteName: 'test'
})


const styles = StyleSheet.create({
    logo: {
        width: device_width/3, height: device_width/3
    },
})

export default createAppContainer(AppNavigation)
