import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import db from '../config';

var index = 0;
var storyNumber = 1;

export default class WriteScreen extends React.Component{

    increaseIndex = () =>{
        
        db.ref("StoryIndex").update({
            "Index": index + 1
        });

        index = index + 1;
    }

    increaseStoryNumber = () => {
        storyNumber = storyNumber + 1;
    }

    refresh = () =>{
        db.ref("Story1").update({
         "Author": "",
         "Title": "",
         "Story": "",
        });

        db.ref("Story2").update({
            "Author": "",
            "Title": "",
            "Story": "",
           });

           db.ref("Story3").update({
            "Author": "",
            "Title": "",
            "Story": "",
           });

           db.ref("StoryIndex").update({
               "Index": 0
           });

           storyNumber = 1;
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Enter Your Details Here!</Text>
                
            <TextInput
            style = {styles.textInput}
            placeholder = "Enter Name Here"
            onChangeText = {text => {
                db.ref("Story" + storyNumber).update({
                  "Author": text
                })
            }}/>

            <TextInput
            style = {styles.textInput2}
            placeholder = "Title of the Story"
            onChangeText = {text => {
                db.ref("Story" + storyNumber).update({
                  "Title": text
                })
            }}/>

            <TextInput
            style = {styles.textInput3}
            placeholder = "Write Your Story Here"
            multiline = 'true'
            onChangeText = {text => {
                db.ref("Story" + storyNumber).update({
                  "Story": text
                })
            }}/>

            <TouchableOpacity style = {styles.button}
            onPress = {() => {
                this.increaseIndex();
                this.increaseStoryNumber();
            }}>
                <Text style = {styles.text5}>Click Here to Submit!</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button2}
            onPress = {() => {
                this.refresh();
            }}>
                <Text style = {styles.text5}>Refresh Entries</Text>
            </TouchableOpacity>

            </View>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1
    },

    textInput: {
        fontColor: 'white',
        borderWidth: 4,
        width: 700,
        height: 50,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    textInput2: {
        fontColor: 'white',
        borderWidth: 4,
        width: 900,
        height: 50,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    textInput3: {
        fontColor: 'white',
        borderWidth: 4,
        width: 1500,
        height: 300,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    text: {
        fontSize: 40,
        backgroundColor: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },

   text2: {
       background: 'black',
       fontFamily: 'Calibri',
       fontColor: 'yellow',
      // textAlign: 'center',
       marginTop: 50,
       marginLeft: 200
   },

   button: {
       width: 200,
       height: 50,
       alignSelf: 'center',
       backgroundColor: 'red',
       textAlign: 'center',
       marginTop: 20,
       borderRadius: 40,
   },

   button2: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'red',
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 40,
},

   text5: {
      fontFamily: 'Algerian',
      fontSize: 20 
   }
})