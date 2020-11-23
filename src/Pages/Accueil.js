import React from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Slider,
    Button,
    ActivityIndicator,
    Text,
    ScrollView,
    Animated,
    Image,
    SectionList,
    TouchableOpacity
} from 'react-native'

import OnBoarding from "react-native-onboarding-swiper"
import Snackbar from 'react-native-snackbar'
import { SearchBar } from "react-native-elements"
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import connect from "react-redux/lib/connect/connect";

console.disableYellowBox = true

class Accueil extends React.Component {

    static navigationOptions =  {
        title: 'Accueil',
    }

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isLoading: false,
            hasContain: true
        }
    }

    _search = (data) => {
        if(data.nameOrPlace != ""){
            this.props.dispatch({type: "SET_ALL_INFOS", value: data})
             setTimeout(() => this.props.navigation.navigate('Search'), 500)
        }
    }

    render() {
            return (
                <View>
                    <Text>sHello!</Text>
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
    loader : {
        backgroundColor: '#4aaf78',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_container: {
        flex: 1,
    },
    first_view : {
        marginBottom: device_width/7,
        height: device_height/2,
        backgroundColor: '#4aaf78',
    },
    second_view : {
        paddingTop: device_width/12, paddingBottom: device_width/12,/* paddingLeft: device_width/30, paddingRight: device_width/30,*/
        backgroundColor: 'rgb(239,239,239)',
    },
    third_view : {
        paddingTop: device_width/12, paddingBottom: device_width/12,/* paddingLeft: device_width/30, paddingRight: device_width/30,*/
        backgroundColor: 'white',
    },
    SEE_ALL: {
        position: "relative", top: -5,
        color: "black", backgroundColor: "#DDDDDD",
        padding: device_width/40,paddingLeft: device_width/20, paddingRight: device_width/20, marginRight: device_width/30,
        fontSize: device_width/40, borderRadius: 20, fontWeight: "bold"
    }

})

const mapStateToProps =  (state) => {
    return {
        auth: state.userReducer,
        search: state.searchReducer,
    }
}


export  default  connect(mapStateToProps)(Accueil)
