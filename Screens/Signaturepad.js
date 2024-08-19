import React, {useRef, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,TouchableOpacity, Text, ScrollView, View} from 'react-native';
import {SignatureView} from 'react-native-signature-capture-view';


const Newapp = () => {
  const SignatureRef = useRef(null);
  const [text,setText] = useState('')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1,width:'90%',height:'90%',margin:15,
      justifyContent:'center',alignContent:'center',flexDirection:'column',}}>
        <SignatureView
        style={{
          borderWidth:2,
          height:200,
        }}
        
          ref={SignatureRef}
          // onSave is automatically called whenever signature-pad onEnd is called and saveSignature is called
          onSave={(val) => {
            //  a base64 encoded image
            console.log('saved signature')
            console.log(val);
            setText(val)
           
          }}
          onClear={() => {
            console.log('cleared signature')
            setText('')
          }}
        />
        <StatusBar/>
        <View style={{flexDirection: 'row', justifyContent:'center', height: 50}}>
        <TouchableOpacity
        style={{ justifyContent:'center',alignItems:'center', flex:1,backgroundColor:'#f05659',borderRadius:10}}
          onPress={() => {
            SignatureRef.current.clearSignature();
          }}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={{ justifyContent:'center',alignItems:'center', flex:1,backgroundColor:'#7fe391',borderRadius:10}}
          onPress={() => {
            SignatureRef.current.saveSignature();
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
        </View>
       
        <ScrollView style={{flex:1,margin: 20}}>
          <Text numberOfLines={10} ellipsizeMode='tail'>{text}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Newapp;
