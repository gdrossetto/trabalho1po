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

function SearchEvent({route, navigation}) {
  const [searchText, setSearch] = useState('');
  const [eventos, setEventos] = useState([]);

  async function getEventosPorNome(nome) {
    try {
      let response = await fetch(
        'https://apparty1.herokuapp.com/buscaEventoPorNome?nome=' + nome,
      );
      let responseJson = await response.json();
      setEventos(responseJson);
      console.log(eventos);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Header style={{backgroundColor: '#1b0130'}}>
        <Left>
          <Button
            transparent
            onPress={() => {
              setSearch('');
              setEventos([]);
              navigation.navigate('Home');
            }}>
            <Icon style={{color: 'orange'}} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'orange'}}>Procurar Evento</Title>
        </Body>
      </Header>
      <View style={{backgroundColor: '#351d57'}}>
        <SearchBar
          containerStyle={{backgroundColor: '#2c1945'}}
          inputContainerStyle={{backgroundColor: '#351d57'}}
          placeholder="Digite o nome do evento..."
          onChangeText={text => {
            setSearch(text);
            getEventosPorNome(searchText);
          }}
          value={searchText}
        />
      </View>
      <ScrollView style={{flex: 1, backgroundColor: '#351d57'}}>
        <Title style={{paddingTop: 10}}>Resultados da busca</Title>

        {eventos.map((evento, i) => {
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
                <Image
                  style={{
                    width: 320,
                    height: 200,
                    borderRadius: 10,
                  }}
                  source={{
                    uri:
                      'https://img.freepik.com/vetores-gratis/silhueta-de-um-publico-de-festa_1048-9714.jpg?size=626&ext=jpg',
                  }}
                />
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 24,
                    paddingBottom: 5,
                    fontWeight: 'bold',
                    textAlign: 'center',
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
        })}
      </ScrollView>
    </Container>
  );
}
export default SearchEvent;
const styles = StyleSheet.create({
  cardEvento: {
    backgroundColor: '#1b0130',
    borderColor: 'orange',
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 15,
  },
});
