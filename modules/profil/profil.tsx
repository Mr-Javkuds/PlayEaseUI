// withHooks
import { memo } from 'react';

import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibPicture } from 'esoftplay/cache/lib/picture/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { UtilsCustomCard } from 'esoftplay/cache/utils/customCard/import';
import React from 'react';
import { Dimensions, ImageBackground, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { isIPhoneX } from 'react-native-isiphonex-device';


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




  return (
    <View style={{ flex: 1, backgroundColor: "#fff", }} >
      <ScrollView contentContainerStyle={{ }}>
        <View style={{ flex: 1, }}>
          <ImageBackground
            style={{ width: LibStyle.width, padding: 30, height: LibStyle.width / 2 }}
            source={image} >
            <Text allowFontScaling={false} style={{ marginTop: 70, fontWeight: 'bold', fontSize: 20, color: '#fff', justifyContent: 'flex-end', }}>Profile Saya</Text>
          </ImageBackground>
          <View style={{ padding: 20, flexDirection: 'row', backgroundColor: 'pink', width: LibStyle.width - 60, alignSelf: 'center', borderRadius: 15, marginTop: -50, marginBottom: 20 }}>
            <LibPicture source={{ uri: 'https://www.gluwee.com/wp-content/uploads/2022/08/Sabo-728x405.jpg' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
            <View style={{ padding: 10, justifyContent: 'center' }}>
              <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 'bold' }}>PDI Club</Text>
              <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 'normal' }}>PDI@gmail.com</Text>
            </View>
          </View>
        </View>

        <UtilsCustomCard name={'Edit Profile'} />
        <UtilsCustomCard name={'Edit Password'} />
        <UtilsCustomCard name={'Edit Alamat'} />
        <UtilsCustomCard name={'Edit Nomor Telepon'} />
        <UtilsCustomCard name={'Edit Email'} />

      

      </ScrollView>

      <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-between', height: 60, backgroundColor: 'red' }}>
        <View style={{ backgroundColor: 'green', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
        <Pressable onPress={() => {
          
              LibNavigation.navigate('main/index')
            }}>
          <Text allowFontScaling={false}>Home</Text>
          </Pressable>
        </View>
        
        <View style={{ backgroundColor: 'green', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
        <Pressable onPress={() => {
              LibNavigation.navigate('favorit/favorit')
            }}>
          <Text allowFontScaling={false}>Favorite</Text>
          </Pressable>
        </View>
        
        <View style={{ backgroundColor: 'green', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
         <Pressable onPress={() => {
          LibNavigation.navigate('jadwal/jadwal')
         } }>
          <Text allowFontScaling={false}>Jadwal</Text>
          </Pressable>
        </View>

        <View style={{ backgroundColor: 'green', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
          <Pressable style={{ justifyContent: 'center', alignItems: 'center', }} onPress={
            () => {
              LibNavigation.navigate('profil/profil')
            }
          }>
            <Text allowFontScaling={false}>Profile</Text>
          </Pressable>
        </View>

      </View>

    </View>
  );
}
export default memo(m);