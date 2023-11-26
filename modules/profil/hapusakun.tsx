// withHooks
import { memo } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';


export interface ProfilHapusakunArgs {

}
export interface ProfilHapusakunProps {

}
function m(props: ProfilHapusakunProps): any {
  const [value, setValue] = React.useState('first');
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', marginTop: LibStyle.STATUSBAR_HEIGHT, paddingHorizontal: 20 }} >
      <View style={{ flexDirection: 'row', width: LibStyle.width, height: 50, }}>
        <LibIcon.Feather name="chevron-left" size={40} color="##494646ff" />
        <Text style={{ fontSize: 20, color: "#", marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Kebijakan Privasi</Text>
      </View>

      <View style={{ width: LibStyle.width, justifyContent: 'center', marginHorizontal: 20 }}>


      </View>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxHeight: 50, backgroundColor: 'pink', maxWidth: LibStyle.width }}>
          <RadioButton value="first" />
          <Text numberOfLines={3} style={{ maxWidth: LibStyle.width - 80 }}>
            {' Saya ingin menghapus akun saya karena Saya tidak lagi membutuhkan layanan ini.'}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxHeight: 50, backgroundColor: 'pink', maxWidth: LibStyle.width }}>
          <RadioButton value="second" />
          <Text numberOfLines={3} style={{ maxWidth: LibStyle.width - 80 }}>
            Saya ingin menghapus akun saya untuk alasan keamanan dan privasi.
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxHeight: 50, backgroundColor: 'pink', maxWidth: LibStyle.width }}>
          <RadioButton value="third" />
          <Text numberOfLines={3} style={{ maxWidth: LibStyle.width - 80 }}>
            Saya ingin menghapus akun saya karena
            Saya tidak lagi ingin terhubung dengan
            platform ini.
          </Text>
        </View>
        
      </RadioButton.Group>
    </View>
  )
}
export default memo(m);
