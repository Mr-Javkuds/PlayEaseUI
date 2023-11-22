
import { LibPicture } from 'esoftplay/cache/lib/picture/import';
import { LibSlidingup } from 'esoftplay/cache/lib/slidingup/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { UtilsDatepicker } from 'esoftplay/cache/utils/datepicker/import';
import moment from 'esoftplay/moment';
import { Feather } from '@expo/vector-icons';
import useSafeState from 'esoftplay/state';
import React, { memo, useRef, useState } from 'react';
import { Image, ImageBackground, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { UtilsDot } from 'esoftplay/cache/utils/dot/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';


export interface DetailPilihTanggalProps { }

function DetailPilihTanggalComponent(props: DetailPilihTanggalProps): any {
  const [tanggalDipilih, setTanggalDipilih] = useSafeState('')
  let [isSelected, setSelected] = useSafeState(false)

  const [selectedIndex, setSelectedIndex] = useState(0);

  const slide = useRef<LibSlidingup>(null)




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



  const lap = [
    { id: 1, lapangan: 'Lapangan A', harga: 'Rp 100.000', url: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg', },
    { id: 2, lapangan: 'Lapangan B', harga: 'Rp 100.000', url: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg', },
    { id: 3, lapangan: 'Lapangan C', harga: 'Rp 100.000', url: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg', },
    { id: 4, lapangan: 'Lapangan D', harga: 'Rp 100.000', url: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg', },
    { id: 5, lapangan: 'Lapangan E', harga: 'Rp 100.000', url: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg', },
    { id: 6, lapangan: 'Lapangan F', harga: 'Rp 100.000', url: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg', },
    { id: 7, lapangan: 'Lapangan G', harga: 'Rp 100.000', url: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg', },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <FlatList
      data={lap}
      ListHeaderComponent={
        <View>
          <ImageBackground source={{ uri: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg' }} style={{ width: LibStyle.width, padding: 30, height: LibStyle.width / 2 }} />
          <View style={{ padding: 20, flexDirection: 'row', backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 15, marginTop: -50, marginBottom: 20, ...elevation(3) }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ fontFamily: "Roboto", marginTop: 10, fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
            <UtilsDot jumlah={4} /><View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ marginTop: 10, fontFamily: "Roboto", fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
            <UtilsDot jumlah={4} /><View style={{ justifyContent: 'center', alignItems: 'center' }}><Feather name="calendar" size={24} color="#009EB4" /><Text style={{ marginTop: 10, fontFamily: "Roboto", fontSize: 13, fontWeight: "bold", fontStyle: "normal", lineHeight: 13, textAlign: "center", color: "#000000" }}> Pilih jadwal </Text></View>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <UtilsDatepicker onDateChange={(d) => { setTanggalDipilih(moment(d).localeFormat('dddd, DD MMMM YYYY')) }} minDate={moment().localeFormat('YYYY-MM-DD')} maxDate={moment().add(12, 'days').localeFormat('YYYY-MM-DD')} />
            <Text style={{ paddingVertical: 10, fontSize: 18, fontWeight: 'bold' }}>Lapangan</Text>
          </View>
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => { setSelectedIndex(index), slide.current?.show() }}>
          <View key={item.id} style={{ margin: 15, paddingRight: 10, height: 80, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: selectedIndex === index ? '#0396a6' : '#ffffff', borderRadius: 5, ...elevation(5) }}>
            <LibPicture source={{ uri: item.url }} style={{ flex: 1.8, height: 80, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, resizeMode: 'contain', marginRight: 20, ...elevation(5) }} />
            <View style={{ flex: 3, }}>
              <Text allowFontScaling={false} style={{ color: selectedIndex === index ? 'white' : '#009EB4', fontSize: 18 }}>{item.lapangan}</Text>
              <Text allowFontScaling={false} style={{ color: '#000000' }}>{item.harga}</Text>
            </View>
          </View>
        </Pressable>
      )}
    />
    <View style={{ ...elevation(3), borderColor: 'grey', padding: 10, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
      <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{lap[selectedIndex]?.lapangan}</Text>
        <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{lap[selectedIndex]?.harga}</Text>
      </View>
      <Pressable style={{ marginRight: 15, ...elevation(3), height: 50, borderRadius: 5, backgroundColor: '#0396a6', justifyContent: 'center', alignItems: 'center', }}
       onPress={() => { LibNavigation.navigate('detail/pilihjam',{}) }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', paddingHorizontal: 15, paddingVertical: 5, }}>Selanjutnya</Text>
      </Pressable>
    </View>
  </View>
  );
}


export default memo(DetailPilihTanggalComponent);


