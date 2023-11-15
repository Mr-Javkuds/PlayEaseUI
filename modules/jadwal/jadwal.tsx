// withHooks
import { memo } from 'react';

import { LibStatusbar } from 'esoftplay/cache/lib/statusbar/import';
import { LibTabs } from 'esoftplay/cache/lib/tabs/import';
import React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import useSafeState from 'esoftplay/state';
import { UseCondition } from 'esoftplay/cache/use/condition/import';
import { JadwalRiwayat } from 'esoftplay/cache/jadwal/Riwayat/import';
import { JadwalDalamProses } from 'esoftplay/cache/jadwal/dalamProses/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';


export interface JadwalJadwalArgs {

}
export interface JadwalJadwalProps {


}
function m(props: JadwalJadwalProps): any {
 let { width, height } = Dimensions.get("window");

  const [tab, setTab] = useSafeState(0)



  return (
    <View style={{ flex: 1, marginTop: LibStyle.STATUSBAR_HEIGHT }}>
      <Text allowFontScaling={false} style={{ marginLeft: 10, fontSize: 22, color: 'skyblue', fontWeight: 'bold' }}>
        Jadwal
      </Text>
      <View style={{ width: LibStyle.width, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable onPress={() => setTab(0)} style={{ width: LibStyle.width / 2, borderBottomWidth: tab == 0 ? 2 : 0, borderBottomColor: tab == 0 ? 'cyan' : 'white', padding: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text allowFontScaling={false}>Dalam Proses</Text>
        </Pressable>
        <Pressable onPress={() => setTab(1)} style={{ width: LibStyle.width / 2, borderBottomWidth: tab == 1 ? 2 : 0, borderBottomColor: tab == 1 ? 'cyan' : 'white', padding: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text allowFontScaling={false}>Rowayat</Text>
        </Pressable>
      </View>

      {
        tab == 0 ? <JadwalDalamProses /> : <JadwalRiwayat />
      }

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
  )
}
export default memo(m);