
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import Dictionary from './localDb'

export default class App extends React.Component() {
  constructor(){
    super();
    this.state={
      Text:'',
      word:[],
      lexiCategory:[],
      definition:[],
    }
  }
  render(){
    return (
      <View style={styles.container}> 
        <Header backgroundColor={"red"} centerComponent={
          {
            text:'Dictionary Book',
             style:{color:"red", fontSize:12}
          
          }
          
        }>
        
        </Header>
       
        <TextInput style={styles.container} value={this.state.Text}
         onChangeText={(textObj)=>{
          this.setState({
            text:textObj
          })
         
        }}>
        </TextInput>
     <TouchableOpacity style={stlyes.define}
     onPress={
       ()=>{
        var lowerCaseWord=this.state.text.toLowerCase();
        Dictionary[lowerCaseWord]?(
         this.setState({
           word:Dictionary[lowerCaseWord].word
         }),
         this.setState({
           lexiCategory:Dictionary[lowerCaseWord].lexiCategory
         }),
         this.setState({
           definition:Dictionary[lowerCaseWord].definition
         })
        ):
        (
          Alert.alert("Please type a word before entering"),
          console.log("Please type a word before entering")
        )
       }
        
            
     

     }
     >
          <Text style={styles.text}>
            Define 
          </Text>
     </TouchableOpacity>
      <View>
        
        <Text style={styles.text}>
            {this.state.word,this.state.lexiCategory,this.state.definition}
        </Text>
      </View>
  </View>
      
    );
  }
}
  
 


 const style=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  define:{
    width:"10%",
    height:55,
    alignSelf:"center",
    margin:10,
    padding:10,
    borderWidth:4,
    borderRadius:10
  },
  text:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
  },
  inputBox:{
    marginTop:50,
    width:"70%",
    height:40,
    alignSelf:"center",
    textAlign:"center",
    borderWidth:4,

     
  },




 })
