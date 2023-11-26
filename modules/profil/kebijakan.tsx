// withHooks
import { memo } from 'react';

import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { Text, View } from 'react-native';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';


export interface ProfilKebijakanArgs {

}
export interface ProfilKebijakanProps {

}
function m(props: ProfilKebijakanProps): any {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', marginTop: LibStyle.STATUSBAR_HEIGHT, paddingHorizontal: 20 }} >
     <View style={{ flexDirection: 'row', width: LibStyle.width, height: 50, }}>
              <LibIcon.Feather name="chevron-left" size={40} color="##494646ff" />
              <Text style={{ fontSize: 20, color: "#", marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Kebijakan Privasi</Text>
      </View>
      <Text

        style={{
          color: 'black',
          fontFamily: 'Inter',
          fontSize: 14, // change this to a number
          fontWeight: '400',
          padding: 10,}}>

        Kami sangat memperhatikan privasi
        pengguna dan akan melindungi informasi
        pribadi yang diberikan kepada kami
        dengan menggunakan prosedur dan
        keamanan teknologi yang sesuai, serta
        mengikuti peraturan dan ketentuan yang
        berlaku untuk menjaga kerahasiaan
        dan keamanan informasi pengguna.
      </Text>
    </View>
  )
}
export default memo(m);