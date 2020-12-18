import React from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Text, Image, TouchableOpacity
} from 'react-native'

import HeaderIcon from "../Components/HeaderIcon";
import i18n from "../i18n/i18n";

console.disableYellowBox = true

class News extends React.Component {

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
        this.state = {
            search: '',
            places: [
                {name: i18n.t("NewsFrance"), image: require('../../assets/images/stats.png'), text: "coronavirus en France"},
                {name: i18n.t("NewsAfrica"), image: require('../../assets/images/stats.png'), text: "coronavirus en Afrique"},
                {name: i18n.t("NewsEurope"), image: require('../../assets/images/stats.png'), text: "coronavirus en Europe"},
                {name: i18n.t("NewsAmerica"), image: require('../../assets/images/stats.png'), text: "coronavirus en Amerique"},
                {name: i18n.t("NewsAsia"), image: require('../../assets/images/stats.png'), text: "coronavirus en Asie"},
            ],
        }
    }

    _navigate = (text) => {
        this.props.navigation.navigate("Articles", {text: text})
    }

    render() {
        let places = this.state.places
        return (
            <View style={styles.main_container}>
                {places.map(place => (
                    <TouchableOpacity style={styles.bloc} activeOpacity={0.8} onPress={() => this._navigate(place.text)}>
                        <Image source={place.image} style={{width: 60, height: 60}}/>
                        <Text>{place.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    componentDidMount() {
    }
}


//On recupère la largeur et la hauteur de l'écran
const device_width = Dimensions.get('window').width
const device_height = Dimensions.get('window').height

const styles = StyleSheet.create({

    loading_container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_container: {
        flex: 1,
        backgroundColor: "rgb(240,240,240)", padding: 30
    },
    bloc: {
        backgroundColor: "white", padding: 10, elevation: 8, margin: 6,
        borderRadius: 4, justifyContent: "center", alignItems: "center"
    }

})


export  default News
