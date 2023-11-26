// withHooks
import { Feather } from '@expo/vector-icons';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import DashedLine from 'react-native-dashed-line';
import { UtilsDot } from 'esoftplay/cache/utils/dot/import';

import { memo } from 'react';

import React from 'react';
import { ImageBackground, Platform, Text, View, ScrollView, Pressable, Dimensions } from 'react-native';
import { LibPicture } from 'esoftplay/cache/lib/picture/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { Divider } from 'react-native-paper';
import esp from 'esoftplay/esp';

export interface DetailOrderreviewArgs {

}
export interface DetailOrderreviewProps {

}
function m(props: DetailOrderreviewProps): any {
  let { width, } = Dimensions.get("window");
  const { data } = LibNavigation.getArgsAll(props)
  esp.log({ data });
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

  const diskon = (diskon?: any) => {

    if (diskon != null) {
      let disc = diskon
      return (
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
          <Text>Diskon</Text>
          <Text>{disc}%</Text>
        </View>
      )
    }

  }



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
          <View style={{ paddingHorizontal: 20 }}>
            <Text>Gor Sahabat</Text>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Feather name="map-pin" size={14} color="black" style={{ marginRight: 10, color: 'red' }} />
              <Text>Kota Semarang</Text>
            </View>

            <Text allowFontScaling={false} style={{ fontSize: 20, marginVertical: 20, fontWeight: 'bold' }}>Jadwal Pesan</Text>


            <DashedLine dashLength={10} dashThickness={2} dashGap={5} />

            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
              <LibPicture source={{ uri: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg' }} style={{ width: 80, height: 80, borderRadius: 10 }} />

              <View style={{ marginLeft: 10 }}>
                <Text>September 28 ,2023</Text>
                <Text style={{ fontWeight: 'bold' }}>{data.field}</Text>
                <Text style={{ fontWeight: 'bold' }}>{data.price}</Text>
              </View>

            </View>

          </View>

          <View style={{ marginHorizontal: 20, ...elevation(8), height: 220, backgroundColor: '#ffffff', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10 }}>
            <Text style={{ marginVertical: 10, }}>Ringkasan Pembayaran </Text>
            <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor='#979797da' />
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
              <Text>Biaya Sewa</Text>
              <Text>Rp 200.000</Text>
            </View>
            {diskon(25)}

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
              <Text>Total jam</Text>
              <Text>3</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
              <Text>Total Harga</Text>
              <Text>Rp 100.000 x 3</Text>
            </View>
            <Divider theme={{ colors: { primary: 'green' } }} />
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>

              <Text>Total Bayar</Text>

              <Text>Rp {data.finalPrice}</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 20, height: 10, backgroundColor: '#ffffff' }}></View>


        </View>
      </ScrollView>


      <View style={{ ...elevation(3), borderColor: 'grey', padding: 10, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
        <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Total Biaya</Text>
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Rp 300.000</Text>
        </View>
        <Pressable style={{ marginRight: 15, ...elevation(3), height: 50, borderRadius: 5, backgroundColor: '#0396a6', justifyContent: 'center', alignItems: 'center', }} onPress={() => { LibNavigation.navigate('detail/pembayaran') }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', paddingHorizontal: 15, paddingVertical: 5, }}>Selanjutnya</Text>
        </Pressable>
      </View>

    </View>


  )
}
export default memo(m);