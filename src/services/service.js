import axios from "axios"
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import React from "react";

/** corona lmao ninja api */
const lmaoAPI = "https://corona.lmao.ninja/v3/covid-19"

/** efro-vid api */
const efroVidAPI = "https://4f1b6f056a97.ngrok.io/api" //"https://efrovid.herokuapp.com/api"


let apiCalls = {
    getWorldWideData: () => {
        return axios.get(`${lmaoAPI}/all`)
            .then(response => {
                let data = response.data
                Object.keys(data).forEach(key => {
                    data[key] = data[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                })
                return data
            })
    },
    getCountryData: (country) => {
        return axios.get(`${lmaoAPI}/countries/${country}`)
            .then(response => {
                let data = response.data
                Object.keys(data).forEach(key => {
                    data[key] = data[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                })
                return data
            })
    },
    searchCountries: (text) => {
        return axios.get(`${efroVidAPI}/countries/search?text=${text}`)
            .then(response => response.data)
    },

    getArticles: (text) => {
        return axios.get(`${efroVidAPI}/news/search?text=${text}`)
            .then(response => response.data)
    }
}

export default apiCalls
