import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  ShadowPropTypesIOS,
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
  Form,
  Label,
  Item,
  Input,
} from 'native-base';
import {orange} from 'color-name';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';

const NewAccount = ({navigation}) => {
  var firebaseConfig = {
    apiKey: 'AIzaSyAfTS_Gehnvxct7oVDSyfO9Ob92SFWwwQM',
    authDomain: 'partyplanner-7131d.firebaseapp.com',
    databaseURL: 'https://partyplanner-7131d.firebaseio.com',
    projectId: 'partyplanner-7131d',
    storageBucket: 'partyplanner-7131d.appspot.com',
    messagingSenderId: '736310198115',
    appId: '1:736310198115:web:5b083a51f683218106dd56',
    measurementId: 'G-3NBTPPY1Z8',
  };
  firebase.initializeApp(firebaseConfig);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  async function register(email, password) {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(response);
    } catch (e) {
      console.error(e.message);
    }
  }
  return (
    <Container style={{flex: 1, backgroundColor: '#351d57'}}>
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
          <Title style={{color: 'orange'}}>Crie sua conta</Title>
        </Body>
      </Header>
      <ScrollView style={{flex: 1, backgroundColor: '#351d57'}}>
        <Form>
          <Item stackedLabel>
            <Label style={{color: 'orange'}}>Nome</Label>
            <Input
              value={name}
              onChangeText={text => setName(text)}
              style={{color: 'white'}}
            />
          </Item>
          <Item stackedLabel>
            <Label style={{color: 'orange'}}>E-Mail</Label>
            <Input
              value={email}
              multiline
              onChangeText={text => setEmail(text)}
              style={{color: 'white'}}
            />
          </Item>
          <Item stackedLabel>
            <Label style={{color: 'orange'}}>Senha</Label>
            <Input
              value={password}
              multiline
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={{color: 'white'}}
            />
          </Item>
          <Item stackedLabel>
            <Label style={{color: 'orange'}}>Confirme sua senha</Label>
            <Input secureTextEntry={true} style={{color: 'white'}} />
          </Item>
        </Form>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            justifyContent: 'center',
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
            height: 60,
          }}
          onPress={() => {
            register(email, password);
            navigation.navigate('HomeScreen');
          }}>
          <Text style={{color: '#351d57', fontSize: 22, textAlign: 'center'}}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};
export default NewAccount;
