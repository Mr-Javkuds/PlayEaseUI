// withHooks
import { memo } from 'react';

import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';


export interface AuthRegisterArgs {

}
export interface AuthRegisterProps {

}
function m(props: AuthRegisterProps): any {
  function elevation(value: any) {
    if (Platform.OS === "ios") {
      if (value === 0) return {};
      return { shadowColor: "black", shadowOffset: { width: 0, height: value / 2 }, shadowRadius: value, shadowOpacity: 0.24 };
    }
    return { elevation: value };
  }

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  function login(email: string, pass: string) {
    console.log(email, pass)
    if (email == 'admin' && pass == 'admin') {
      console.log('berhasil')
      LibNavigation.navigate('main/index')
    } else if (email == '' && pass == '') {
      console.log('kosong')
    } else if (email == 'admin' && pass == '') {
      console.log('password kosong')
    } else if (email == '' && pass == 'admin') {
      console.log('email kosong')
    } else if (email != 'admin' && pass != 'admin') {
      console.log('salah')
    } else if (email != 'admin' && pass == 'admin') {
      console.log('email salah')
    }
    else if (email == 'admin' && pass != 'admin') {
      console.log('password salah')
    } else {
      console.log('gagal')
    }

  }

  return (
    <View style={{ flex: 1, backgroundColor: '#1d9be3', marginTop: LibStyle.STATUSBAR_HEIGHT }}>
      <ScrollView style={{ flex: 1 }} >
        <View style={{ height: LibStyle.height / 4, backgroundColor: '#1d9be3', justifyContent: 'center', alignItems: 'flex-start', padding: 20 }}>
          <Text allowFontScaling={false} style={{ color: '#fcfcfc', fontSize: 28, fontWeight: 'bold' }} >PlayEasy </Text>
          <Text allowFontScaling={false} style={{ color: '#fcfcfc', fontSize: 28, fontWeight: 'bold' }} >selamat datang </Text>
          <Text allowFontScaling={false} style={{ color: '#fcfcfc', fontSize: 28, fontWeight: 'bold' }} >Daftar untuk mulai </Text>
          {/* <Image
          style={{ height: 100, width: 100 }}
          source={require('/home/yasin/tmp/playEasy/assets/gambar.png')} /> */}
        </View>
        <View style={{ height: LibStyle.height, backgroundColor: '#ffffff', padding: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems: 'center' }}>

          <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 30, }}>
            <Text style={{ color: '#000000', fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>Email</Text>
            <View style={{ padding: 5, backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 10, marginBottom: 20, ...elevation(3) }}>
              <TextInput
                placeholder='Search'
                autoCorrect={false}
                clearButtonMode='always'
                onChangeText={(query) => {
                  console.log(query)
                  setEmail(query)
                }}
                style={{ marginLeft: 10, width: LibStyle.width - 10, height: 45 }}
              />
            </View>
          </View>
          <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 10, }}>
            <Text style={{ color: '#000000', fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>password</Text>
            <View style={{ padding: 5, backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 10, marginBottom: 20, ...elevation(3) }}>
              <TextInput
                placeholder='password'
                autoCorrect={false}
                clearButtonMode='always'
                onChangeText={(query) => {
                  console.log(query)
                  setPass(query)
                }}
                style={{ marginLeft: 10, width: LibStyle.width - 10, height: 45 }}
              />
            </View>
          </View>
          <Pressable onPress={() => login(email, pass)} style={{ height: 50, width: LibStyle.width - 35, backgroundColor: '#1d9be3', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
            <Text style={{ color: '#fcfcfc', fontSize: 18, fontWeight: 'bold' }}> Login</Text>
          </Pressable>
          <View style={{ flexDirection: 'row', marginTop: 20, width: LibStyle.width - 35 }}>
            <Text style={{ color: '#000000', fontSize: 15, fontWeight: 'bold' }}>Sudah mamiliki akun? </Text>
            <Pressable onPress={() => { LibNavigation.navigate('auth/login') }}>
              <Text style={{ color: '#000000', fontSize: 15, fontWeight: 'bold' }}>Masuk </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
export default memo(m);