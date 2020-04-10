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
import {NavigationContainer} from '@react-navigation/native';
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

function EventPage({route, navigation}) {
  const {eventoParam} = route.params;

  return (
    <Container>
      <Header style={{backgroundColor: '#1b0130'}}>
        <Left>
          <Button
            transparent
            onPress={() => {
              navigation.pop();
            }}>
            <Icon style={{color: 'orange'}} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'orange'}}>Descrição do evento</Title>
        </Body>
      </Header>
      <ScrollView style={{flex: 1, backgroundColor: '#351d57'}}>
        <Image
          style={{height: 260}}
          source={{
            uri: eventoParam.foto,
          }}
        />
        <Title
          style={{
            alignSelf: 'center',
            padding: 20,
            marginTop: 10,
            fontSize: 26,
            color: 'orange',
          }}>
          {eventoParam.name}
        </Title>

        <Text
          style={{
            padding: 10,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Quando vai ser?
        </Text>
        <Text
          style={{
            paddingLeft: 10,
            fontSize: 20,

            color: 'orange',
          }}>
          {eventoParam.data}
        </Text>
        <Text
          style={{
            padding: 10,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Onde vai ser?
        </Text>
        <Text
          style={{
            paddingLeft: 10,
            fontSize: 20,

            color: 'orange',
          }}>
          {eventoParam.local}
        </Text>

        <Text
          style={{
            padding: 10,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Como vai ser?
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 20,

            color: 'orange',
          }}>
          {eventoParam.descricao}
        </Text>
      </ScrollView>
    </Container>
  );
}
export default EventPage;
