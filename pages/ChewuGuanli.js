import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Platform,TouchableOpacity,ImageBackground  } from 'react-native';
import  {MyStatusBar, ActionBar, GetMethodArea} from '../common'
import { setWorldAlignment } from 'expo/build/AR';



export default class ChewuGuanli extends Component {
 
  render() {
    return (

      <View  style={styles.outterContainer}>
          <View style={styles.mainContainer} >             
                  <ImageBackground style={{height:200,width:'100%'}} source={require('.././images/chewuguanli-1.png')}>
                    <MyStatusBar /> 
                    <ActionBar color="#ffffff" title="车务管理" backgroundColor="transparent" />    
      
                  </ImageBackground>
              
              <View style={styles.circleArea}>
                  <View style={{
                    borderWidth:2,
                    borderColor:'#efefef',
                    borderRadius:8,                    
                  }}>

                      <View style={styles.circletop}><Text style={{color:'grey'}}> ——{' '}为你推荐{' '}——</Text></View>
                      <View style={{
                            backgroundColor: 'white',
                            height: 100,
                            flexDirection: 'row',       
                            alignItems: 'center',  
                            justifyContent: 'space-evenly',   
                            
                        }}>
                              <TouchableOpacity >

                                  <ImageBackground style={{height:40,width:40}} source={require('.././images/chewuguanli-2.png')}> 
                                  </ImageBackground>  
                                  <View style={styles.circleTxt}>
                                  <Text style={{fontSize:11,color:'black'}}>检车代办</Text></View>
                              </TouchableOpacity >
                              <TouchableOpacity  >
                                  <ImageBackground style={{height:40,width:40}} source={require('.././images/chewuguanli-3.png')}>     
                                  </ImageBackground>
                                  <View style={styles.circleTxt}>
                                  <Text style={{fontSize:11,color:'black'}}>牌照业务</Text></View> 

                              </TouchableOpacity >
                              <TouchableOpacity>
                                  <ImageBackground style={{height:40,width:40}} source={require('.././images/chewuguanli-4.png')}>     
                                  </ImageBackground> 
                                  <View style={styles.circleTxt}>
                                  <Text style={{fontSize:11,color:'black'}}>证件业务</Text></View> 
                              </TouchableOpacity > 
                         
                    </View>
                      

                  </View>
              </View>
                  
                  <View style = {styles.txtArea}>
                  <ImageBackground style={{height:110,width:'100%'}} source={require('.././images/chewuguanli-5.png')}>     
                  </ImageBackground>
                  </View>         
            </View>
            <View style={styles.bottom}><Text style={{paddingLeft:15,fontSize:18,color:'black'}}>服务优势</Text></View>
            <View style = {styles.buttonArea}>           
                  <TouchableOpacity>
                        <ImageBackground style={{height:40,width:40}} source={require('.././images/chewuguanli-6.png')}>     
                        </ImageBackground>
                        <Text></Text>
                          <Text>上门取车</Text>
                            <Text style={styles.bottomtxt}>对接资料，订单</Text>
                            <Text style={styles.bottomtxt}>确认</Text>
                      </TouchableOpacity> 
                    
                  <TouchableOpacity>
                        <ImageBackground style={{height:40,width:40}} source={require('.././images/chewuguanli-7.png')}>     
                        </ImageBackground>
                        <Text></Text>
                          <Text>专业代办</Text>
                            <Text style={styles.bottomtxt}>代办服务，上线</Text>
                            <Text style={styles.bottomtxt}>检测</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                        <ImageBackground style={{height:40,width:40}} source={require('.././images/chewuguanli-8.png')}>     
                        </ImageBackground>
                        <Text></Text>
                          <Text>无需排队</Text>
                            <Text style={styles.bottomtxt}>服务完成，交接</Text>
                            <Text style={styles.bottomtxt}>车辆</Text>
                  </TouchableOpacity>
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    backgroundColor:'#efefef'

  },
  mainContainer: {
    justifyContent: 'flex-start',   
  },

  
  circleArea:{
    
    
    padding:10,
    backgroundColor:'white',
    
  },
  circletop:{

    justifyContent: 'center',
    alignItems: 'center',
    height:40,
    backgroundColor:'white',
   
    
  },
  
  txtArea:{
    
    padding:10,
    backgroundColor:'white',
    
  },
  bottom:{
    fontWeight:'bold',
    fontSize:20,
    
    backgroundColor:'white',
    height:35,
  },
  
  buttonArea:{
    height:150,
    flexDirection:'row',
    justifyContent:'space-evenly',
    
    alignItems: 'center',
    backgroundColor:'white',
  },
  button:{
    height:140,
    borderColor:'#efefef',
    borderWidth:0.5,
    padding:20,
    
    backgroundColor:'white',
    borderRadius:5,
    
    alignItems: 'center',
  }, 
  bottomtxt:{
    color:'grey',
    fontSize:10,
    backgroundColor:'white',
    lineHeight:20,
  },

  
  titleTxt:{
    fontSize:14, 
    fontWeight:'bold',
  },
  circleTxt:{
  
    justifyContent: 'center',
    alignItems: 'center', 
    height:40,
    backgroundColor:'white',
    
    
    
  },
});