// withHooks
import { memo } from 'react';

import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibPicture } from 'esoftplay/cache/lib/picture/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { UtilsCustomCard } from 'esoftplay/cache/utils/customCard/import';
import React from 'react';
import { Dimensions, Image, ImageBackground, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { isIPhoneX } from 'react-native-isiphonex-device';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export interface ProfilProfilArgs {

}
export interface ProfilProfilProps {

}
function m(props: ProfilProfilProps): any {
  let { width, height } = Dimensions.get("window");
  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };


  function elevation(value: any) {
    if (Platform.OS === "ios") {
      if (value === 0) return {};
      return { shadowColor: "black", shadowOffset: { width: 0, height: value / 2 }, shadowRadius: value, shadowOpacity: 0.24 };
    }
    return { elevation: value };
  }
  //button

  // Menghitung tinggi status bar berdasarkan platform
  const STATUSBAR_HEIGHT = (Platform.OS === "ios" ? isIPhoneX ? 44 : 20 : StatusBar.currentHeight) || 0;

  {/* <UtilsCustomCard name={'Informasi Akun'} function={LibNavigation.navigate('auth/login')} /> */ }
  {/* <UtilsCustomCard name={'Notifikasi'} />
        <UtilsCustomCard name={'Ganti Kata sandi'} />
        <UtilsCustomCard name={'Kebijakan Privasi'} />
        <UtilsCustomCard name={'Hapus Akun'} /> */}

        const botnav = () => {
          return (
            <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-between', height: 60, backgroundColor: '#ffffff' }}>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
                <Pressable onPress={() => {
                  LibNavigation.navigate('main/index')
                }}>
                  <Image source={require("/home/yasin/tmp/playEasy/assets/Home.png")} style={{ width: 30, height: 30 }} />
      
                </Pressable>
              </View>
      
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
                <Pressable onPress={() => {
                  LibNavigation.navigate('favorit/favorit')
                }}>
                  <Image source={require("/home/yasin/tmp/playEasy/assets/heart.png")} style={{ width: 30, height: 30 }} />
      
                </Pressable>
              </View>
      
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
                <Pressable onPress={() => {
                  LibNavigation.navigate('jadwal/jadwal')
                }}>
                  <Image source={require("/home/yasin/tmp/playEasy/assets/calender.png")} style={{ width: 30, height: 30 }} />
      
                </Pressable>
              </View>
      
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
                <Pressable style={{ justifyContent: 'center', alignItems: 'center', }} onPress={
                  () => {
                    LibNavigation.navigate('profil/profil')
                  }
                }>
                  <AntDesign name="user" size={28} color="#B9BCBE" />
                </Pressable>
              </View>
      
            </View>
          )
        }

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff",marginTop:LibStyle.STATUSBAR_HEIGHT }} >
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View>
          <ImageBackground
            style={{ width: LibStyle.width, padding: 30, height: LibStyle.width / 2 }}
            source={image} >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text allowFontScaling={false} style={{ marginTop: 50, fontWeight: 'bold', fontSize: 20, color: '#fff', justifyContent: 'flex-end', }}>Profile Saya</Text>
            </View>
          </ImageBackground>
          <View style={{ padding: 20, flexDirection: 'row', backgroundColor: '#ffffff', width: LibStyle.width - 60, alignSelf: 'center', borderRadius: 15, marginTop: -50, marginBottom: 20, ...elevation(5) }}>
            <LibPicture source={{ uri: 'https://www.gluwee.com/wp-content/uploads/2022/08/Sabo-728x405.jpg' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
            <View style={{ padding: 10, justifyContent: 'center' }}>
              <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 'bold' }}>Sanji</Text>
              <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 'normal' }}>One PieceI@gmail.com</Text>
            </View>
          </View>
        </View>

        {/* Informasi Akun */}
        <Pressable style={{ marginTop: 15,marginHorizontal:15, }} onPress={() => { LibNavigation.navigate('profil/informasiakun') }}>
          <View style={{ flexDirection: 'row', width: width - 30, height: 50, backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 12, ...elevation(5), justifyContent: 'space-between', alignItems: 'center' }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginLeft: 10 }}>Informasi Akun</Text>
            <Feather name="user" size={24} color="black" />
          </View>
        </Pressable>

        {/* Notifikasi */}
        <Pressable style={{ marginTop: 15,marginHorizontal:15, }} onPress={() => { LibNavigation.navigate('profil/notifikasi') }}>
          <View style={{ flexDirection: 'row', width: width - 30, height: 50, backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 12, ...elevation(5), justifyContent: 'space-between', alignItems: 'center' }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginLeft: 10 }}>Notifikasi</Text>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </Pressable>

        {/* Ganti Kata Sandi */}
        <Pressable style={{ marginTop: 15,marginHorizontal:15, }} onPress={() => { LibNavigation.navigate('profil/gantikatasandi') }}>
          <View style={{ flexDirection: 'row', width: width - 30, height: 50, backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 12, ...elevation(5), justifyContent: 'space-between', alignItems: 'center' }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginLeft: 10 }}>Ganti Kata Sandi</Text>
            <MaterialCommunityIcons name="lock-outline" size={24} color="black" />
          </View>
        </Pressable>

        {/* Kebijakan Privasi */}
        <Pressable style={{ marginTop: 15,marginHorizontal:15, }} onPress={() => { LibNavigation.navigate('profil/kebijakan') }}>
          <View style={{ flexDirection: 'row', width: width - 30, height: 50, backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 12, ...elevation(5), justifyContent: 'space-between', alignItems: 'center' }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginLeft: 10 }}>Kebijakan Privasi</Text>
            <MaterialIcons name="verified-user" size={24} color="black" />
          </View>
        </Pressable>

        {/* Hapus Akun */}
        <Pressable style={{ marginTop: 15,marginHorizontal:15, }} onPress={() => { LibNavigation.navigate('profil/hapusakun') }}>
          <View style={{ flexDirection: 'row', width: width - 30, height: 50, backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 12, ...elevation(5), justifyContent: 'space-between', alignItems: 'center' }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginLeft: 10 }}>Hapus akun</Text>
            <Feather name="trash" size={24} color="black" />
          </View>
        </Pressable>

        {/* Logout */}
        <Pressable style={{ marginTop: 15,marginHorizontal:15, }} onPress={() => { LibNavigation.navigate('auth/login') }}>
          <View style={{ flexDirection: 'row', width: width - 30, height: 50, backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 12, ...elevation(5), justifyContent: 'space-between', alignItems: 'center' }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginLeft: 10 }}>Keluar</Text>
            <Feather name="log-out" size={24} color="black" />
          </View>
        </Pressable>




      </ScrollView>

      {botnav()}

    </View>
  );
}
export default memo(m);