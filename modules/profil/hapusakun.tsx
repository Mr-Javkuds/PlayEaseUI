// withHooks
import { memo } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';



export interface ProfilHapusakunArgs {

}
export interface ProfilHapusakunProps {

}
function m(props: ProfilHapusakunProps): any {

  const [value, setValue] = React.useState('first');
  function elevation(value: any) {
    if (Platform.OS === 'ios') {
      if (value === 0) return {};
      return {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: value / 2 },
        shadowRadius: value,
        shadowOpacity: 0.24,
      };
    }
    return { elevation: value };
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginTop: LibStyle.STATUSBAR_HEIGHT, paddingHorizontal: 20 }} >
      <View style={{ flexDirection: 'row', width: LibStyle.width, height: 80, }}>
        <LibIcon.Feather name="chevron-left" size={40} color="#494646ff" />
        <Text style={{ fontSize: 20, color: "black", marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Kebijakan Privasi</Text>
      </View>

      <View style={{ width: LibStyle.width, justifyContent: 'center', marginHorizontal: 20 }}>


      </View>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxHeight: 80,  maxWidth: LibStyle.width ,marginTop:18}}>
          <RadioButton value="first" />
          <Text numberOfLines={3} style={{ maxWidth: LibStyle.width - 80 ,fontSize:18}}>
            {'Saya ingin menghapus akun saya karena Saya tidak lagi membutuhkan layanan ini.'}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxHeight: 80,  maxWidth: LibStyle.width ,marginTop:18}}>
          <RadioButton value="second" />
          <Text numberOfLines={3} style={{ maxWidth: LibStyle.width - 80 ,fontSize:18}}>
            Saya ingin menghapus akun saya untuk alasan keamanan dan privasi.
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxHeight: 80,  maxWidth: LibStyle.width ,marginTop:18}}>
          <RadioButton value="third" />
          <Text numberOfLines={3} style={{ maxWidth: LibStyle.width - 80 ,fontSize:18}}>
            Saya ingin menghapus akun saya karena
            Saya tidak lagi ingin terhubung dengan
            platform ini.
          </Text>
        </View>
      </RadioButton.Group>
      
      <Pressable style={{ marginRight: 15, ...elevation(3), height: 50, borderRadius: 5, backgroundColor: '#0396a6', justifyContent: 'center', alignItems: 'center', marginTop:18}} onPress={()=>{LibNavigation.navigate('main/index') }}>
      <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', paddingHorizontal: 15, paddingVertical: 5, }}>Hapus Akun</Text>
      </Pressable>
    </View>
  )
}
export default memo(m);
