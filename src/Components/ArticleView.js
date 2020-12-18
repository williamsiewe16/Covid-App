import React from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Text, Image
} from 'react-native'

import WebView from "react-native-webview"
import i18n from "../i18n/i18n";
import HeaderIcon from "../Components/HeaderIcon";

console.disableYellowBox = true

class ArticleView extends React.Component {

    static navigationOptions = (props) => {
        return {
            /* headerLeft: () => (<HeaderIcon icon={icon} style={style} action={() => {
                 props.navigation.openDrawer()
             }}/>),*/
            headerRight: () => (<HeaderIcon icon={require('../../assets/images/virus.png')} action={() => {}}/>),
            headerTitle: "NEWS",
            headerStyle : {backgroundColor: "red", elevation: 0},
            headerTitleStyle : {color: "white"}
        }
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let url = this.props.navigation.state.params.url
        console.log(url)
        return (
            <WebView style={styles.main_container} source={{ uri: url }} />
        )
    }
}


//On recupère la largeur et la hauteur de l'écran
const device_width = Dimensions.get('window').width
const device_height = Dimensions.get('window').height

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "rgb(240,240,240)"
    },

})

export  default ArticleView
