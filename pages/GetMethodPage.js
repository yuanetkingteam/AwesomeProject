import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Platform,TouchableOpacity  } from 'react-native';
import  {MyStatusBar, ActionBar, GetMethodArea} from '.././common'

export default class GetMethodPage extends React.Component {
  constructor(props){ 
    super(props);
    this.onPressButton = this.onPressButton.bind(this); 
  }
  onPressButton(){
    console.log(this.getMethodObj.state.selectedIndex); 
    alert('选择领取方式:'+this.getMethodObj.state.selectedIndex);
  }
  render() {
    return (
      <View  style={styles.outterContainer}>
        <View style={styles.mainContainer} > 
          <MyStatusBar barStyle="dark-content" translucent={true}/>
          <ActionBar title="领取方式" backgroundColor="#ffffff"/>
          <GetMethodArea ref={self => {this.getMethodObj = self}} {...this.props}/>
          <View style = {styles.addressContainer}>
              <View style={styles.item1}><Text></Text></View>
              <View style={styles.item8}>
                <Text style={styles.biggerTxt}>吉林市丰满区吉林大街52-2号</Text>
                <Text>迅捷养车{'   '}0432-4578372</Text>
              </View>
              <View style={styles.item1}><Text>{'>'}</Text></View>
          </View>
          <View style = {styles.hintArea}>
            <Text style = {styles.hintTxt}>保单生成需2小时，邮费由个人承担</Text>
          </View>
        </View>
        <View style = {styles.buttonArea}>
          <TouchableOpacity style = {styles.button} onPress={this.onPressButton}   color="#339999" ><Text style = {{color:'#ffffff'}}>确定</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outterContainer: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor:'#efefef'
  },
  mainContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  buttonArea:{
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    height:50,
    width:'80%',
    backgroundColor:'#008080',
    borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer:{
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#ffffff',
  },
  item1: {
    justifyContent: 'center',
    alignItems: 'center',
    width:30,
  },
  item8: {
    justifyContent: 'center',
    margin:0,
    flex: 1
  },
  biggerTxt:{
    fontSize:16,
    lineHeight:35,
  },
  hintArea:{
    paddingLeft:30,
    height:40,
    justifyContent: 'center',
  },
  hintTxt:{
    color:'#999999',
  }
});



