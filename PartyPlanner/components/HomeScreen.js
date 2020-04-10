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
  ActivityIndicator,
  TouchableOpacityBase,
  Image,
  FlatList,
  Dimensions,
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
  Segment,
} from 'native-base';
import ActionButton from 'react-native-action-button';
import NewEvent from './NewEvent';
import {Event} from './event';
import EventPage from './EventPage';
import {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {List, ListItem} from 'react-native-elements';
import Buffer from 'buffer';
import {FAB} from 'react-native-paper';

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

function vh(percentageHeight) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}

function HomeScreen({route, navigation}) {
  const [eventos, setEventos] = useState([]);
  const [isLoading, setLoading] = useState();

  const Stack = createStackNavigator();
  var count = 0;
  async function getEventos() {
    try {
      setLoading(true);
      let response = await fetch('https://apparty1.herokuapp.com/eventos');
      let responseJson = await response.json();
      setLoading(false);
      setEventos(responseJson);
      console.log(eventos);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      count = 0;

      getEventos();
    }, []),
  );

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: '#2c024f',
      }}>
      <FAB
        style={styles.fab}
        large
        color={'#2c024f'}
        icon="plus"
        onPress={() => navigation.navigate('Adicionar Evento')}
      />
      <Header
        style={{
          backgroundColor: '#1b0130',
          borderColor: 'orange',
        }}>
        <Title
          style={{
            color: 'orange',
            paddingTop: 10,
            fontSize: 24,
          }}>
          APParty
        </Title>
        <Right>
          <Button
            transparent
            onPress={() => {
              navigation.navigate('Perfil');
            }}>
            <Icon style={{color: 'orange'}} name="contact" />
          </Button>
        </Right>
      </Header>
      <ScrollView>
        <Title style={{marginTop: 15}}> Eventos em destaque </Title>
        {isLoading == true ? (
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color="orange"
          />
        ) : null}

        {/*eventos.map((evento, i) => {
  
          return (
            <TouchableOpacity
              style={{
                transparent: true,
              }}
              onPress={() => {
                navigation.navigate('Evento', {
                  eventoParam: evento,
                });
              }}>
              <Card style={styles.cardEvento}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'orange',
                    fontSize: 24,
                    paddingBottom: 5,
                    fontWeight: 'bold',
                  }}>
                  {evento.name}
                </Text>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 20,

                    textAlign: 'center',
                  }}>
                  {evento.data}
                </Text>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 20,
                    paddingBottom: 10,

                    textAlign: 'center',
                  }}>
                  {evento.local}
                </Text>
              </Card>
            </TouchableOpacity>
          );
        }) */}

        <FlatList
          initialNumToRender={10}
          data={eventos}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                transparent: true,
              }}
              onPress={() => {
                navigation.navigate('Evento', {
                  eventoParam: item,
                });
              }}>
              <Card style={styles.cardEvento}>
                <Image
                  source={{uri: item.foto}}
                  style={{
                    height: 200,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'orange',
                    fontSize: 24,
                    paddingBottom: 5,
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 20,

                    textAlign: 'center',
                  }}>
                  {item.data}
                </Text>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 20,
                    paddingBottom: 10,

                    textAlign: 'center',
                  }}>
                  {item.local}
                </Text>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </Container>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  cardEvento: {
    backgroundColor: '#1b0130',
    borderColor: 'orange',
    padding: 8,
    marginLeft: 10, //vh(3),
    marginRight: 10, //vw(3),
    marginTop: 20,
    borderRadius: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    zIndex: 1,
    right: 0,
    bottom: 0,
    backgroundColor: 'orange',
  },
});
