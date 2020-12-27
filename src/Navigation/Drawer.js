import {Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking} from "react-native";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import DrawerItem from "react-native-paper/src/components/Drawer/DrawerItem";
import {FontAwesome, Ionicons, Entypo, AntDesign} from "@expo/vector-icons";
import {Switch} from "react-native-paper";
import React, {useState} from "react";
import connect from "react-redux/lib/connect/connect";
import DropDownPicker from 'react-native-dropdown-picker'
import i18n from "../i18n/i18n";
import RNRestart from 'react-native-restart'

const device_width = Dimensions.get('window').width

let myDrawer = props => {
    let changeTheme = () => props.dispatch({type: "CHANGE_THEME"})
    let changeLanguage = (locale) => {
        props.dispatch({type: "CHANGE_LANGUAGE", value: {locale: locale}})
        RNRestart.Restart();
    }
    let theme = props.isDarkTheme ? props.user.theme.dark : props.user.theme.default
    i18n.locale = props.user.locale
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: theme.drawerBackgroundColor, paddingRight: 8}}>
            <View style={{justifyContent: "center", alignItems: "center", padding: 20}}>
                <Image source={require('../../assets/images/stats.png')} style={styles.logo}/>
            </View>
            <ScrollView contentContainerStyle={{flex: 1}}>
                <DrawerSection>
                    <DrawerItem icon={({color, size}) => (<Ionicons name="ios-stats" size={size}  color={theme.textColor} />)} label={"STATS"} theme={{colors: {text: theme.textColor}}} onPress={() => {props.navigation.navigate("stats")}}></DrawerItem>
                    <DrawerItem icon={({color, size}) => (<FontAwesome name={"newspaper-o"} size={size-7}  color={theme.textColor} />)} label={"NEWS"} theme={{colors: {text: theme.textColor}}} onPress={() => {props.navigation.navigate("news")}}></DrawerItem>
                    <DrawerItem icon={({color,size}) => (<Ionicons name="md-information-circle-outline" size={size} color={theme.textColor} />)} label={"INFOS"} theme={{colors: {text: theme.textColor}}} onPress={() => {props.navigation.navigate("infos")}}></DrawerItem>
                </DrawerSection>
                <DrawerSection title={"Preferences"} theme={{colors: {text: theme.sectionTitleColor}}}>
                    <View style={styles.style1}>
                        <DrawerItem icon={({color, size}) => (<FontAwesome name="moon-o" size={size} color={theme.textColor} />)} label={i18n.t("DrawerDarkTheme")} theme={{colors: {text: theme.textColor}}}></DrawerItem>
                        <Switch value={props.isDarkTheme} onValueChange={() => changeTheme()}/>
                    </View>
                    <View style={styles.style1}>
                        <DrawerItem icon={({color, size}) => (<FontAwesome name="language" size={size} color={theme.textColor} />)} label={i18n.t("DrawerLanguage")} theme={{colors: {text: theme.textColor}}}></DrawerItem>
                        <DropDownPicker
                            items={[
                                {label: '', value: 'en', icon: () => <Image source={require("../../assets/images/us.png")} style={{width: 30, height: 20}}/>},
                                {label: '', value: 'fr', icon: () => <Image source={require("../../assets/images/fr.png")} style={{width: 30, height: 20}}/>},
                            ]}
                            defaultValue={props.user.locale}
                            containerStyle={{height: 40}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => changeLanguage(item.value)}
                        />
                    </View>
                </DrawerSection>
                <DrawerSection title={"Contact"} theme={{colors: {text: theme.sectionTitleColor}}}>
                    <View style={{justifyContent: "center", flexDirection: "row"}}>
                        <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL("https://www.facebook.com")}>
                            <Entypo name="facebook" size={device_width/11} color="#3b5998" style={{margin: 5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL("https://www.linkedin.com")}>
                            <AntDesign name="linkedin-square" size={device_width/11} color="#0e76a8" style={{margin: 5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL("https://www.twitter.com")}>
                            <AntDesign name="twitter" size={device_width/11} color="#00acce" style={{margin: 5}}/>
                        </TouchableOpacity>
                    </View>
                </DrawerSection>
            </ScrollView>
            <View>
                <Text style={{flex: 1}}>dghfg</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: device_width/3, height: device_width/3
    },
    style1: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    }
})
const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        isDarkTheme: state.userReducer.isDarkTheme
    }
}

export default connect(mapStateToProps)(myDrawer)
