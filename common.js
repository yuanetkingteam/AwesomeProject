
import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar, Platform,TouchableHighlight   } from 'react-native';

class MyStatusBar extends Component {
  render() {
    return (
      <View style = {{
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        backgroundColor:'transparent',
      }}>
    <StatusBar backgroundColor='white' barStyle={this.props.barStyle} translucent={this.props.translucent} />
          </View>
    );
  }
}

class ActionBar extends Component {
  render() {
    return (
      <View 
        style={{
        backgroundColor: this.props.backgroundColor,
        height: 50,
        justifyContent:'space-between',
        flexDirection: 'row'
        }}>
          <View style={styles.item1}><Text style={{color:this.props.color}}> {'<'} </Text></View>
          <View style={styles.item8}><Text style={[styles.titleTxt,{color:this.props.color}]}>{this.props.title}</Text></View>
          <View style={styles.item1}></View>
      </View>
    );
  }
}



class GetMethodArea extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex:1,
    }
  }
  getBlockStyles1() {
    if(this.state.selectedIndex == 1){
      return [styles.block,styles.blockGreen];
    }
    else{
      return [styles.block];
    }
  }
  getBlockStyles2() {
    if(this.state.selectedIndex == 2){
      return [styles.block,styles.blockGreen];
    }
    else{
      return [styles.block];
    }
  }
  render() {
    return (
      <View 
        style={{
        backgroundColor: '#efefef',
        height: 180,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 15,
    
        }}>
          <TouchableOpacity  style={this.getBlockStyles1()} onPress={()=>this.setState({selectedIndex:1})}><Text>自取保单</Text></TouchableOpacity >
          <TouchableOpacity  style={this.getBlockStyles2()} onPress={()=>this.setState({selectedIndex:2})}><Text>邮寄保单</Text></TouchableOpacity > 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  item1: {
    justifyContent: 'center',
    alignItems: 'center',
    width:30, 
  },
  item8:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  block:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center', 
    height: 100,
    width:50,
    margin:15,
    borderRadius:12,
    borderColor:'grey',
    borderWidth:1,
  },
  blockGreen:{
    borderColor:'#339999',
    backgroundColor: '#F9FFFF'
  },
  titleTxt:{
    fontSize:14, 
    fontWeight:'bold',
  }
});

export {MyStatusBar, ActionBar, GetMethodArea};