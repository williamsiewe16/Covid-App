import React from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Button,
    ActivityIndicator,
    Text,
    ScrollView,
    Animated,
    Image,
} from 'react-native'

import OnBoarding from "react-native-onboarding-swiper"
import axios from 'axios'
import BottomIcon from "../Components/BottomIcon";

console.disableYellowBox = true

class Onboarding extends React.Component {

    static navigationOptions =  {
        title: 'Accueil',
    }

    constructor(props) {
        super(props)
        this.pages=[{
            backgroundColor: '#ffffff',
            image: <BottomIcon icon={require('../../assets/images/logo.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
        },{
            title: 'Onboarding',
            backgroundColor: '#ffffff',
            image: <BottomIcon icon={require('../../assets/images/home-run.png')} />,
            subtitle: 'Done with React Native Onboarding Swiper',
        }]
    }

    _onDone = () => {
      this.props.navigation.navigate('Accueil')
    }

    render() {
        return (
            <OnBoarding
                pages={this.pages} style={styles.main_container}
                onDone={this._onDone}
                onSkip={this._onDone}
            />
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

})

export default Onboarding
