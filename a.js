import dictionary from '../database.js';
import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';

getWord = (text) =>{
    var text = text.toLowerCase()
    try{
        var word = dictionary[text]["Word"]
        var lexicalCategory = dictionary[text]["lexicalCategory"]
        var definition = dictionary[text]["definition"]

        this.setState({
            "word" : word,
            "lexicalCategory" : lexicalCategory,
            "definition" : definition
        })
    }
    catch(err){
        alert("Sorry this word is not available for now")
        this.setState({
            'test':'',
            'inSearchPressed':false
        })
    }
}