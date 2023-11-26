// withHooks
import { memo } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { Platform, Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { LibPicture } from 'esoftplay/cache/lib/picture/import';


export interface ProfilInformasiakunArgs {

}
export interface ProfilInformasiakunProps {

}
function m(props: ProfilInformasiakunProps): any {
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
          <View style={{ height:200, width: LibStyle.width, alignItems: 'center', borderBottomLeftRadius: 105, borderBottomRightRadius: 0, backgroundColor: '#1d9be3' }}>
            {/* image */}
            {/* appbar */}
            <View style={{ flexDirection: 'row', width: LibStyle.width, height: 50, backgroundColor: "#1d9be3", padding: 10, }}>
              <LibIcon.Feather name="chevron-left" size={40} color="#ffffff99" />
              <Text style={{ fontSize: 20, color: "#ffffff", marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Informasi Akun</Text>
            </View>
          </View>

          <LibPicture source={{ uri: 'https://www.gluwee.com/wp-content/uploads/2022/08/Sabo-728x405.jpg' }} style={{ width: 180, height: 180, borderRadius: 90, marginTop: -82 }} />
          {/* Column searchbar 1 */}
          <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 50, }}>
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