import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, Text, View, StyleSheet, StatusBar, Platform,TouchableOpacity  } from 'react-native';
import  {MyStatusBar, ActionBar, GetMethodArea} from '../common'


export default class ChexianFuwu extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#ffffff' }]}>        
          <MyStatusBar translucent={false}  barStyle="dark-content"/> 
          <ActionBar  title="车险服务"></ActionBar>          
          <ImageBackground style={styles.imageStyle} source={require('.././images/chexianfuwu-1.png')} >
          </ImageBackground> 
          <View style={styles.baojiaArea}>            
          <View style={styles.baojiaContainer}>            
            <View style = {styles.buttonArea1}>
              <TouchableOpacity style = {styles.button1} onPress={this.onPressButton}  color="#339999" ><Text style = {{color:'#ffffff',fontWeight:'bold',fontSize:10,}}>投保 吉林市  ></Text></TouchableOpacity>
            </View>            
            <View style={styles.hintTxt}><Text style={{fontSize:30,fontWeight:'bold'}} >吉B12345</Text></View>
            <View style = {styles.buttonArea}>
              <TouchableOpacity style = {styles.button} onPress={this.onPressButton}   color="#339999" ><Text style = {{color:'#ffffff'}}>立即报价</Text></TouchableOpacity>
            </View>
          </View> 
            
            </View> 
          <View style = {styles.hintArea}>
            <Text style = {{fontWeight:'bold'}}>保险服务</Text>
          </View>
         <View style={styles.baoxianArea}> 
          <View style={styles.baoxianContainer}>

           
            <View style={styles.lianjieContainer}>
               
            <View>
                <ImageBackground style={styles.imageStyle1} source={require('.././images/chexianfuwu-2.png')} >
                  
                </ImageBackground>
                <Text style={{textAlign:'center'}}>中国人民保险</Text>
                
              </View>

              <View>
                <ImageBackground style={styles.imageStyle1} source={require('.././images/chexianfuwu-3.png')} >
                  
                </ImageBackground>
                <Text style={{textAlign:'center'}}>中国平安</Text>
               
              </View>

              <View>
                <ImageBackground style={styles.imageStyle1} source={require('.././images/chexianfuwu-4.png')} >
                  
                </ImageBackground>
                <Text style={{textAlign:'center'}}>大地保险</Text>
                
              </View>
              </View>
            <View style={styles.lianjieContainer}>
               
               <View>
                <ImageBackground style={styles.imageStyle1} source={require('.././images/chexianfuwu-5.png')} >
                  
                </ImageBackground>
                <Text style={{textAlign:'center'}}>永安保险</Text>
              
              </View>

              <View>
                <ImageBackground style={styles.imageStyle1} source={require('.././images/chexianfuwu-6.png')} >
                  
                </ImageBackground>
                <Text style={{textAlign:'center'}}>安盛天平</Text>
                
              </View>

              <View>
                <ImageBackground style={styles.imageStyle1} source={require('.././images/chexianfuwu-7.png')} >
                </ImageBackground>
                <Text style={{textAlign:'center'}}>太平洋保险</Text>
                
              </View>
            </View>
            </View>
          </View>
      </View>

    );
  }
}




const styles = StyleSheet.create({
  imageStyle: {
    width: '100%', 
    height: 150,
    backgroundColor:'blue'
  },
  
  button:{
    height:40,
    width:250,
    backgroundColor:'#008080',
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArea:{
    height:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baojiaArea:{
    paddingLeft:16,
    paddingRight:16,
  } ,
  baojiaContainer:{
    justifyContent:'space-between',
    height:180,
    padding:30,
    backgroundColor:'#ffffff',
   
    borderColor:'#efefef',
    borderWidth:1,
    borderRadius:5,
    top:-20,
   
  },
  item1:{
    justifyContent:'space-around',
    height:30,
    margin:'auto',
    width:30,
  },
  item8: {
    justifyContent: 'center',
    margin:0,
    flex: 1
  },
  hintArea:{
    paddingLeft:20,
    justifyContent: 'center',  
  },
  hintTxt:{
    color:'#999999',
  },
 
  baoxianArea:{
    padding:16,
  },
  baoxianContainer:{
    justifyContent:'space-around',
    height:200,
    
    flexDirection:'column',
    borderColor:'#efefef',
    borderRadius:5,
    borderWidth:1,

  },
  lianjieContainer:{
    
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',  
      
  
  },
  imageStyle1: {
    width:50,
    height:40,
    justifyContent:'center',
    alignItems:'center',  
      
  },
  button1:{
    height:20,
    width:'45%',
    backgroundColor:'#dbb8b8',
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonArea1:{
    height:20,
    justifyContent: 'center',

  },




});



