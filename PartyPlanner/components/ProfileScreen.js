import * as React from 'react';
import {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  Image,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native-gesture-handler';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
} from 'native-base';
import ActionButton from 'react-native-action-button';
import NewEvent from './NewEvent';
import {Event} from './event';
import {useState} from 'react';
import {SearchBar} from 'react-native-elements';


function ProfileScreen(){

    return(
        <Container>
            <Header style={{backgroundColor: '#1b0130'}}>
                <Title style={{color: 'orange', paddingTop: 15}}>Perfil</Title>
            </Header>
            <ScrollView style={{backgroundColor: '#2c024f',flex:1}}>
                <Image style={{alignSelf:"center",marginTop:30,borderRadius:100,height:150,width:150}} source={{uri:'https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png'}}></Image>
                <Title style={{color:'orange'}}>Gabriel Rossetto</Title>
            </ScrollView>
        </Container>
    );

} 
export default ProfileScreen;