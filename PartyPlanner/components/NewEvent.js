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
  Form,
  Label,
  Item,
  Input,
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';
import {firebase} from '@react-native-firebase/storage';

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
const FireBaseStorage = storage();

const options = {
  maxHeight: 800,
  maxWidth: 800,
  title: 'Adicionar Foto do evento',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

// Initialize Firebase

function NewEvent({navigation}) {
  var data = new Date();
  var dataFormat =
    data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
  const [name, setName] = React.useState('');
  const [local, setLocal] = React.useState('');
  const [capacidade, setCapacity] = React.useState();
  const [date, setDate] = React.useState(dataFormat);
  const [currentDate, setCurrentDate] = React.useState(dataFormat);
  const [photo, setPhoto] = React.useState('');
  const [desc, setDesc] = React.useState('');

  const getFileLocalPath = response => {
    const {path, uri} = response;
    return Platform.OS === 'android' ? path : uri;
  };

  const createStorageReferenceToFile = response => {
    const {fileName} = response;
    return FireBaseStorage.ref(fileName);
  };

  const uploadFileToFireBase = imagePickerResponse => {
    const fileSource = getFileLocalPath(imagePickerResponse);
    console.log(fileSource);
    const storageRef = createStorageReferenceToFile(imagePickerResponse);

    return storageRef.putFile(fileSource);
  };

  const monitorFileUpload = uploadTask => {
    uploadTask.on('state_changed', snapshot => {
      switch (snapshot.state) {
        case 'running':
          console.log('Enviando foto');
          break;
        case 'success':
          snapshot.ref.getDownloadURL().then(downloadURL => {
            setPhoto(downloadURL);
          });
          break;
        default:
          break;
      }
    });
  };

  var event = [{name: name, local: local, capacidade: capacidade}];
  const img = (
    <Image
      source={{uri: photo}}
      style={{width: 300, height: 200, marginLeft: 30, marginRight: 30}}
    />
  );
  const noImg = (
    <Text style={{textAlign: 'center', color: 'orange'}}>
      Nenhuma imagem selecionada!
    </Text>
  );
  return (
    <Container>
      <Header style={{backgroundColor: '#1b0130'}}>
        <Left>
          <Button
            transparent
            onPress={() => {
              setCapacity();
              setDesc('');
              setName('');
              setLocal('');
              setDate(currentDate);
              navigation.navigate('Home');
            }}>
            <Icon style={{color: 'orange'}} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'orange'}}>Adicionar Evento</Title>
        </Body>
      </Header>
      <ScrollView style={{flex: 1, backgroundColor: '#351d57'}}>
        <ScrollView style={{flex: 1, backgroundColor: '#351d57'}}>
          <Form>
            <Item stackedLabel style={{borderRadius: 10}}>
              <Label style={{color: 'orange'}}>Nome do evento</Label>
              <Input
                value={name}
                multiline
                onChangeText={text => setName(text)}
                style={{color: 'white'}}
              />
            </Item>
            <Item stackedLabel style={{borderRadius: 10}}>
              <Label style={{color: 'orange'}}>Local</Label>
              <Input
                value={local}
                multiline
                onChangeText={text => setLocal(text)}
                style={{color: 'white'}}
              />
            </Item>
            <Item stackedLabel style={{borderRadius: 10}}>
              <Label style={{color: 'orange'}}>Data</Label>
              <DatePicker
                style={{width: 400, paddingBottom: 10}}
                date={date}
                customStyles={{
                  dateText: {color: 'white'},
                  dateInput: {borderWidth: 0},
                }}
                mode="date"
                placeholder="select date"
                format="DD/MM/YYYY"
                showIcon={false}
                minDate={currentDate}
                maxDate="10/12/2050"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={date => {
                  setDate(date);
                }}
              />
            </Item>
            <Item stackedLabel style={{borderRadius: 10}}>
              <Label style={{color: 'orange'}}>Capacidade</Label>
              <Input
                value={capacidade >= 0 ? capacidade.toString() : 0}
                keyboardType={'numeric'}
                onChangeText={text => setCapacity(parseInt(text))}
                style={{color: 'white'}}
              />
            </Item>
            <Item stackedLabel style={{borderRadius: 10}}>
              <Label style={{color: 'orange'}}>Descrição</Label>
              <Input
                value={desc}
                multiline
                onChangeText={text => setDesc(text)}
                style={{color: 'white'}}
              />
            </Item>
          </Form>

          <Button
            large
            style={{
              backgroundColor: 'orange',
              justifyContent: 'center',
              marginTop: 30,
              borderRadius: 10,
              marginBottom: 30,
              marginLeft: 80,
              marginRight: 80,
            }}
            onPress={() => {
              ImagePicker.showImagePicker(options, response => {
                console.log('Response = ', response.uri);

                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log(
                    'User tapped custom button: ',
                    response.customButton,
                  );
                } else {
                  const uploadTask = uploadFileToFireBase(response);
                  monitorFileUpload(uploadTask);
                  //setPhoto(response.data);
                }
              });
            }}>
            <Text>Adicionar imagem</Text>
          </Button>
        </ScrollView>

        {photo.length != '' ? img : noImg}

        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: 'orange',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 20,
            marginRight: 20,
            height: 60,
          }}
          onPress={() => {
            if ((name && local && capacidade) == '') {
              console.log(name, local, capacidade);
              alert('Complete todos os campos');
            } else {
              setCapacity(0);
              setDesc('');
              setName('');
              setLocal('');
              setDate(currentDate);
              createEvent(name, capacidade, local, date, desc, photo);
              navigation.navigate('HomeScreen');
            }
          }}>
          <Text style={{color: '#351d57', fontSize: 22, textAlign: 'center'}}>
            Adicionar Evento
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}
export default NewEvent;

function createEvent(name, capacidade, local, date, desc, photo) {
  fetch('https://apparty1.herokuapp.com/eventos', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      capacidade: capacidade,
      local: local,
      data: date,
      descricao: desc,
      foto: photo,
    }),
  });
}
