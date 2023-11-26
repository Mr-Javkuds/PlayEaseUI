// withHooks
import { memo, useState } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ToggleButton } from 'react-native-paper';


export interface ProfilNotifikasiArgs {

}
export interface ProfilNotifikasiProps {

}
function m(props: ProfilNotifikasiProps): any {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff", padding: 10, marginTop: LibStyle.STATUSBAR_HEIGHT }}>
      <View style={{ flexDirection: 'row' }}>
        <LibIcon.Feather name="chevron-left" size={40} color="#2d2d2d99" />
        <Text style={{ fontSize: 20, color: "#2d2d2d", marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Notifikasi</Text>
      </View>

      <Text style={{ fontSize: 20, color: "#2d2d2d", marginLeft: 10, marginTop: 45, fontWeight: 'bold' }}>Senyapkan Notifikasi</Text>

      <View style={{ flexDirection: 'row',  height:100,alignItems:'center'}}>

        <Text style={{ fontSize: 18,maxWidth:(LibStyle.width/4)*2.8, color: "#2d2d2d", marginLeft: 10, marginTop: 5, fontWeight: '400' ,}}>Terima notifikasi dari
          PlayEase, antara promo
          lapangan dan status pemesanan</Text>
          <View style={{ width:LibStyle.width/3.8,height:60,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center'}}>
          <Switch  trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
          </View>
        </View>
    </View>

  )
}
export default memo(m);