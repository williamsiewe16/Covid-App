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

console.disableYellowBox = true

let precautions = [
    {
        titre: "Lavez vous fréquemment les mains",
        text: "Se laver fréquemment les mains avec une solution hydroalcoolique ou à l'eau et au savon.\n Pourquoi? Se laver les mains avec une solution hydroalcoolique ou à l'eau et au savon tue le virus s'il est présent vos mains."
    },
    {
        titre:"Evitez les contacts étroits.",
        text: " Maintenir une distance d'au moins 1 mètre avec les autres personnes ,en particulier si elles toussent,éternuent ou ont de la fièvre. \nPourquoi? Lorsqu'une personne infectée par un virus respiratoire,comme la COVID-19,tousse ou éternue,elle projette de petites gouttelettes contenant le virus.Si vous êtes trop près,vous pouvez inhaler le virus."
    },
    {
        titre:"Respectez les règles d'hygiènes",
        text:" Se couvrir la bouche et le nez avec le pli du coude ou avec in mouchoir en cas de toux ou d'éternuement-jeter le mouchoir immédiatement après dans une poubelle ferméee et se laver les mains avce une solution hydroalcoolique ou à l'eau et au savon.\nPourquoi? Se couvir la bouche et le nez en cas de toux ou d'éternuement permet d'éviter la propagation des virus et autres agents pathogènes."
    },
    {
        titre:"Portez un masque",
        text:"Avant de mettre un masque ,se laver les mains avec une solution hydroalcoolique ou à l'eau et au savon.\n Appliquez le masque de façon à recouvrir le nez et la bouche et veillez à l'ajuster au mieux sur votre visage.Lorsque l'on porte un masque ,éviter de le toucher ,chaque fois que l'on touche un masque usagé, se laver les mains à l'aided'une solution hydroalcoolique ou à l'eau et au savon.Lorsqu'il s'humidifie , le remplacer par un nouveau masque et ne pas réutiliser des masques à uasage unique.Pour retirer le masque : l'enlever par derrière(ne pas toucher le devant du masque);le jeter immédiatement dans une poubelle fermée ;se laver les mains avec une solution hydroalcoolique ou à l'eau et au savon."
    },
]
class Précautions extends React.Component {

    static navigationOptions =  {
        title: 'Précautions',
    }

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isLoading: false,
            hasContain: true
        }
    }

    render() {
        return (
            <View>
                {precautions.map(bloc => (
                    <View>
                        <Text style={styles.titre_container}>{bloc.titre}</Text>
                        <Text>{bloc.text}</Text>
                    </View>
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
    },
    titre_container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }

})

export  default Précautions


