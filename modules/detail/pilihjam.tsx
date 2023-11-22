// withHooks
import { Feather } from '@expo/vector-icons';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibSlidingup } from 'esoftplay/cache/lib/slidingup/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { UtilsDatepicker } from 'esoftplay/cache/utils/datepicker/import';
import { UtilsDot } from 'esoftplay/cache/utils/dot/import';
import moment from 'esoftplay/moment';
import useSafeState from 'esoftplay/state';
import { memo, useEffect, useRef, useState } from 'react';

import React from 'react';
import { FlatList, ImageBackground, Platform, Pressable, Text, View } from 'react-native';



export interface DetailPilihjamArgs {

}
export interface DetailPilihjamProps {


}
function m(props: DetailPilihjamProps): any {
 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);


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



  const jam = [
    { id: 1, title: '08:00', statusLapangan: 'Belum Dipesan' },
    { id: 2, title: '09:00', statusLapangan: 'Belum Dipesan' },
    { id: 3, title: '10:00', statusLapangan: 'Belum Dipesan' },
    { id: 4, title: '11:00', statusLapangan: 'Belum Dipesan' },
    { id: 5, title: '12:00', statusLapangan: 'Belum Dipesan' },
    { id: 6, title: '13:00', statusLapangan: 'Belum Dipesan' },
    { id: 7, title: '14:00', statusLapangan: 'Belum Dipesan' },
    { id: 8, title: '15:00', statusLapangan: 'Sudah Dipesan' },
    { id: 6, title: '17:00', statusLapangan: 'Sudah Dipesan' },
    { id: 5, title: '16:00', statusLapangan: 'Sudah Dipesan' },
    { id: 7, title: '18:00', statusLapangan: 'Sudah Dipesan' },
    { id: 8, title: '19:00', statusLapangan: 'Sudah Dipesan' },
    // Tambahkan lebih banyak objek data dengan properti harga dan lapangan
  ];

  const handlePress = (index: number) => {
    const isSelected = selectedIndices.includes(index);
    if (isSelected) {
      // Hapus indeks jika sudah dipilih
      setSelectedIndices((prevSelected) => prevSelected.filter((item) => item !== index));
    } else {
      // Tambahkan indeks jika belum dipilih
      setSelectedIndices((prevSelected) => [...prevSelected, index]);
    }
    console.log(...selectedIndices);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <FlatList
        data={jam}
        ListHeaderComponent={
          <View>
            <ImageBackground source={{ uri: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg' }} style={{ width: LibStyle.width, padding: 30, height: LibStyle.width / 2 }} />
            <View style={{ padding: 20, flexDirection: 'row', backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 15, marginTop: -50, marginBottom: 20, ...elevation(3) }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ fontFamily: "Roboto", marginTop: 10, fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
              <UtilsDot jumlah={4} /><View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ marginTop: 10, fontFamily: "Roboto", fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
              <UtilsDot jumlah={4} /><View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ marginTop: 10, fontFamily: "Roboto", fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
            </View>

          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (

          <Pressable onPress={() => { handlePress(index) }}>
            <View key={item.id} style={{ marginHorizontal: 15, marginTop: 15, paddingHorizontal: 10, height: 70, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: selectedIndices.includes(index) ? '#0396a6' : '#ffffff', borderRadius: 5, ...elevation(5) }}>

              <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text allowFontScaling={false} style={{ color: selectedIndices.includes(index) ? 'white' : '#009EB4', fontSize: 18 }}>{item.title}</Text>
                <Text allowFontScaling={false} style={{ color: selectedIndices.includes(index) ? 'white' : '#009EB4', }}>{item.statusLapangan}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
      <View style={{ ...elevation(3), borderColor: 'grey', padding: 10, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
        <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Total harga</Text>
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Rp. 200.000</Text>
        </View>
        <Pressable style={{ marginRight: 15, ...elevation(3), height: 50, borderRadius: 5, backgroundColor: '#0396a6', justifyContent: 'center', alignItems: 'center', }} onPress={() => { LibNavigation.navigate('detail/orderreview') }} >
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', paddingHorizontal: 15, paddingVertical: 5, }}>Selanjutnya</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default memo(m);