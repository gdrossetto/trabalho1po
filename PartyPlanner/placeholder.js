import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Modal} from 'react-native';
import {Header,Card, Button, ThemeProvider } from 'react-native-elements';
import { TouchableOpacity, TouchableHighlight, TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainHeader from '../App' 

export default class HomeScree extends React.Component{

    state = {list:[
        {nome : "Indie Party",local:"Jack Music Pub",hora:"11:00"},
        {nome : "Cervejada BCC",local:"Republica Sansara",hora:"4:00"},
        {nome : "Integração",local:"Sagae",hora:"11:00"}],
        modalStatus:false}
    
    constructor(){
        super();
    }

    render(){
        return(
            <ScrollView stickyHeaderIndices={[0]} style={styles.content}
            ref={ref =>this.scrollView = ref}
            onContentSizeChange={()=>{
              this.scrollView.scrollToEnd({animated:true});
            }}
            >
              <MainHeader/>  
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalStatus}
        >
        <ScrollView stickyHeaderIndices={[0]}
            ref={ref =>this.scrollView = ref}
            onContentSizeChange={()=>{
              this.scrollView.scrollToEnd({animated:true});
            }}>
        <Header
          leftComponent={{ icon: 'arrow-back', color: 'orange' }}
          centerComponent={{ text: 'Adicionar Evento', style: { color: 'orange',fontSize:24,fontStyle:'italic' } }}
          containerStyle={{backgroundColor:'black',zIndex:1}}
          statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent'}}
         
        />   
          <TextInput placeholder="Nome do Evento" style={{backgroundColor:'orange',paddingLeft:5,paddingRight:5}}></TextInput>
          <Button title="Fechar Modal" titleStyle={{color:'black'}} buttonStyle={{marginTop:50,left:75,marginBottom:50,width:200,height:75,backgroundColor:'orange'}} onPress={()=>this.setModalState(false)}/>
        </ScrollView>
        </Modal>
        
          <View style={{zIndex:0}}>
        
            <Text style={styles.text}>Próximos Eventos</Text>
            {this.state.list.map((data,i)=>{
              return(
              <Card key={i} containerStyle={{backgroundColor:'orange'}} >
              <Text style={{fontWeight:'bold',fontSize:24}}>{data.nome}</Text>
            <Text style={{fontWeight:'bold'}}>{data.local}</Text>
            <Text style={{fontWeight:'bold'}}>{data.hora}</Text>
            </Card>);
            })}
            
             </View>
             <View>
             <Button title="Adicionar evento" titleStyle={{color:'black'}} buttonStyle={{marginTop:50,left:75,marginBottom:50,width:200,height:75,backgroundColor:'orange'}} onPress={()=>this.addItem()}/>
             <Button title="Adicionar evento" titleStyle={{color:'black'}} buttonStyle={{marginTop:50,left:75,marginBottom:50,width:200,height:75,backgroundColor:'orange'}} onPress={()=>this.setModalState(true)}/>
             </View>
             </ScrollView>
             
        );
    }

    addItem(){  
        let aux = this.state.list.concat({nome : "Fenda",local:"Fenda",hora:"2:00"});
        this.setState({list:aux})
        console.log(this.state.list)
        }
      setModalState(statusModal){
        this.setState({modalStatus:statusModal})
      }
    }


const styles = StyleSheet.create({
    content:{
      backgroundColor:'black',
      flex:1
    },
    text:{
      color:'orange',
      textAlign:"center",
      marginTop:8,
      fontSize:20,
      fontWeight:"bold"
    }
  });
  
  