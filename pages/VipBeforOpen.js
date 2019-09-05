import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Platform,TouchableOpacity,ImageBackground } from 'react-native';
import  {MyStatusBar, ActionBar, GetMethodArea} from '.././common'

export default class VipBeforeOpen extends React.Component {
 
  render() {
    return (
              <View  style={styles.outContainer}>
                    <MyStatusBar barStyle="dark-content" translucent={false}/>
        
                    <View style={styles.topContainer}>
                        <ImageBackground style={{height:40,width:40}} source={require('.././images/vip-1-1.png')}> 
                        </ImageBackground>
                    </View>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleTop}>
                            <Text>会员特价</Text>
                            <Text>查看权益{' '}></Text>
                        </View>
                        <View style={styles.titeCicle}>
                            <View><ImageBackground style={{height:40,width:40}} source={require('.././images/vip-1-2.png')}> 
                            </ImageBackground>
                            <Text>险后咨询</Text></View>
                            <View><ImageBackground style={{height:40,width:40}} source={require('.././images/vip-1-3.png')}> 
                            </ImageBackground>
                            <Text>保养7折</Text></View>
                            <View><ImageBackground style={{height:40,width:40}} source={require('.././images/vip-1-4.png')}> 
                            </ImageBackground>
                            <Text>免费玻璃水</Text></View>
                            <View><ImageBackground style={{height:40,width:40}} source={require('.././images/vip-1-5.png')}> 
                            </ImageBackground>
                            <Text>会员开放日</Text></View>
                            <View><ImageBackground style={{height:40,width:40}} source={require('.././images/vip-1-6.png')}> 
                            </ImageBackground>
                            <Text>免费评估</Text></View>
        
                        </View>
                   </View>
                    
                    <View style = {styles.buttonArea}>
                        <TouchableOpacity style = {styles.button} onPress={this.onPressButton}   color="#339999" ><Text style = {{color:'#ffffff'}}>立即开通</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            );
          }
        }
        
        const styles = StyleSheet.create({
            outContainer: {
            justifyContent: 'space-between',
            
          },
          topContainer: {
            flexDirection:'row',
            justifyContent: 'space-between',
          },
          titleContainer:{
            flexDirection:'row',
          },
            titleTop:{
            fontSize: 12,
          },
          titeCicle:{
            flexDirection:'row',
          },


          buttonArea:{
           
          },
          button:{
           height:12,
          },
       
        });
