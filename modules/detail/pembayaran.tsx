// withHooks
import { memo } from 'react';

import { Feather } from '@expo/vector-icons';

import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { UtilsDot } from 'esoftplay/cache/utils/dot/import';
import React from 'react';
import { Dimensions, ImageBackground, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import DashedLine from 'react-native-dashed-line';
import { RadioButton } from 'react-native-paper';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';


export interface DetailPembayaranArgs {

}
export interface DetailPembayaranProps {

}
function m(props: DetailPembayaranProps): any {
  const [value, setValue] = React.useState('first');
  let { width, } = Dimensions.get("window");

  const elevation = (value: any) => {
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
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>

        <View>
          <ImageBackground source={{ uri: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg' }} style={{ width: LibStyle.width, padding: 30, height: LibStyle.width / 2 }} />
          <View style={{ padding: 20, flexDirection: 'row', backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 15, marginTop: -50, marginBottom: 20, ...elevation(3) }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ fontFamily: "Roboto", marginTop: 10, fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
            <UtilsDot jumlah={4} /><View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ marginTop: 10, fontFamily: "Roboto", fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
            <UtilsDot jumlah={4} /><View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ marginTop: 10, fontFamily: "Roboto", fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
          </View>




          <View style={{ marginVertical: 10, marginHorizontal: 20, ...elevation(8), height: 100, backgroundColor: '#ffffff', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10 }}>


            <Text style={{ fontSize: 16, color: 'grey', marginVertical: 5, fontWeight: 'bold' }}>Total Biaya</Text>
            <Text style={{ fontSize: 26, color: '#04a9af', marginVertical: 5 }}>Rp 200.000</Text>


          </View>

          <View style={{ marginVertical: 10, marginHorizontal: 20, ...elevation(8), height: 170, backgroundColor: '#ffffff', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#04a9af', fontWeight: 'bold', marginBottom: 10 }}>Pilihan Pembayaran </Text>
            <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor='#979797da' />


            <View style={{ marginVertical: 18, }}>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value="first" />
                    <Text>Bayar Lunas</Text>
                  </View>

                  <Text>Rp. 300.00</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value="second" />
                    <Text>Bayar DP(50%)</Text>
                  </View>

                  <Text>Rp. 150.00</Text>
                </View>
              </RadioButton.Group>
            </View>


          </View>





        </View>
      </ScrollView>
      <View style={{
        shadowColor: 'black', shadowOffset: { width: 0, height: 10 },
        // bagian ini penting untuk shadow
        shadowRadius: 3, shadowOpacity: 0.26, elevation: 8, backgroundColor: '#ffffff',
        width: width, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 80,
      }}>
        <Pressable onPress={() => {
          LibNavigation.navigate('main/index')
        }} style={{ height: 40, backgroundColor: '#04a9af', alignItems: 'center', width: width - 50, justifyContent: 'center', borderRadius: 10 }}>
          <Text allowFontScaling={false} style={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold', }}>Bayar</Text>
        </Pressable>
      </View>
    </View>
  )
}
export default memo(m);