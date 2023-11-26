// withHooks
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibPicture } from 'esoftplay/cache/lib/picture/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { memo } from 'react';

import React from 'react';
import { Image, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';



export interface ProfilGantikatasandiArgs {

}
export interface ProfilGantikatasandiProps {

}
function m(props: ProfilGantikatasandiProps): any {
  function elevation(value: any) {
    if (Platform.OS === "ios") {
      if (value === 0) return {};
      return { shadowColor: "black", shadowOffset: { width: 0, height: value / 2 }, shadowRadius: value, shadowOpacity: 0.24 };
    }
    return { elevation: value };
  }
  return (
    <View style={{ flex: 1, marginTop: LibStyle.STATUSBAR_HEIGHT }} >
      <ScrollView style={{ flex: 1 }} >

        {/* column */}
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>

          <View style={{ flexDirection: 'row', width: LibStyle.width, height: 50, backgroundColor: "#ffffff", padding: 10, }}>
            <LibIcon.Feather name="chevron-left" size={40} color="#292D32" />
            <Text style={{ fontSize: 20, color: "#292D32", marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Informasi Akun</Text>
          </View>

          <Image
            style={{ width: LibStyle.width - 30, justifyContent: 'center', height: 190,marginBottom:20 }}
            source={require('/home/yasin/tmp/playEasy/assets/passwors.png')} />
          <Text style={{color: '#000',fontWeight:'600'}}>
          Silahkan Masukkan Kata Sandi Baru
          </Text>
          <Text style={{color: '#000',fontWeight:'600',textAlign:'center'}}>
          Jangan pernah memberikan kata sandi Anda kepada siapa pun, bahkan orang yang Anda percayai.
          </Text>
          {/* Column searchbar 1 */}
          <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 30, }}>
            <Text style={{ color: '#000000', fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>Username</Text>
            <View style={{ padding: 5, backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 10, marginBottom: 20, ...elevation(3) }}>
              <TextInput
                placeholder='Search'
                autoCorrect={true}
                style={{ marginLeft: 10, width: LibStyle.width - 10, height: 45 }}
              />
            </View>
          </View>
          {/* Column searchbar 2 */}
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
          {/* button Edit */}
          <Pressable onPress={() => console.log('login')} style={{ height: 50, width: LibStyle.width - 30, backgroundColor: '#1d9be3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, ...elevation(3) }}>
            <Text style={{ color: '#fcfcfc', fontSize: 18, fontWeight: 'bold' }}> Edit </Text>
          </Pressable>

        </View>
      </ScrollView>

    </View>
  )
}
export default memo(m);