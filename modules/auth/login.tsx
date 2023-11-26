// withHooks

import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { memo } from 'react';

import React from 'react';
import { Image, Platform, Pressable, Text, TextInput, View } from 'react-native';



export interface AuthLoginArgs {

}
export interface AuthLoginProps {

}
function m(props: AuthLoginProps): any {
  
  function elevation(value: any) {
    if (Platform.OS === "ios") {
      if (value === 0) return {};
      return { shadowColor: "black", shadowOffset: { width: 0, height: value / 2 }, shadowRadius: value, shadowOpacity: 0.24 };
    }
    return { elevation: value };
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#1d9be3', marginTop: LibStyle.STATUSBAR_HEIGHT }}>

      <View style={{ height: LibStyle.height / 3, backgroundColor: '#1d9be3', justifyContent: 'center', alignItems: 'center' }}>
        <Text allowFontScaling={false} style={{ color: '#fcfcfc', fontSize: 28, fontWeight: 'bold' }} >Welcome To PlayEasy </Text>
        <Image
          style={{ height: 100, width: 100 }}

          source={require('/home/yasin/tmp/playEasy/assets/gambar.png')} />
      </View>
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems: 'center' }}>
        <Text allowFontScaling={false} style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }} >Gabung PlayEasy Sekarang </Text>
        <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 90, }}>
          <Text style={{ color: '#000000', fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>Username</Text>
          <View style={{ padding: 5, backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 10, marginBottom: 20, ...elevation(3) }}>
            <TextInput
              placeholder='Search'
              autoCorrect={true}
              style={{ marginLeft: 10, width: LibStyle.width - 10, height: 45 }}
            />
          </View>
        </View>
        <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 10, }}>
          <Text style={{ color: '#000000', fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>Email</Text>
          <View style={{ padding: 5, backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 10, marginBottom: 20, ...elevation(3) }}>
            <TextInput
              placeholder='Search'
              autoCorrect={true}
              style={{ marginLeft: 10, width: LibStyle.width - 10, height: 45 }}
            />
          </View>
        </View>
        <Pressable onPress={()=>console.log('login')} style={{ height:50,width:LibStyle.width-60,backgroundColor:'#1d9be3',justifyContent:'center',alignItems:'center',borderRadius:15}}>
          <Text style={{color:'#fcfcfc', fontSize: 18, fontWeight: 'bold'}}> Login</Text>
        </Pressable>
      </View>
    </View>
  )
}
export default memo(m);