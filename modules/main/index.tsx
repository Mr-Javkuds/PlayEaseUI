// withHooks
import { memo, useState } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { ActivityIndicator } from 'react-native';
import React from 'react';
import { Dimensions, Image, Platform, Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { isIPhoneX } from 'react-native-isiphonex-device';
import { AntDesign, Feather } from '@expo/vector-icons';
import { BottomNavigation } from 'react-native-paper';
// import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface MainIndexArgs {

}
export interface MainIndexProps {

}
function m(props: MainIndexProps): any {
  // Dimensions.get("window");
  let { width, height } = Dimensions.get("window");
  const [loading, setLoading] = useState(true);
  function elevation(value: any) {
    if (Platform.OS === "ios") {
      if (value === 0) return {};
      return { shadowColor: "black", shadowOffset: { width: 0, height: value / 2 }, shadowRadius: value, shadowOpacity: 0.24 };
    }
    return { elevation: value };
  }
  // Menghitung tinggi status bar berdasarkan platform
  const STATUSBAR_HEIGHT = (Platform.OS === "ios" ? isIPhoneX ? 44 : 20 : StatusBar.currentHeight) || 0;
  // Data kategori
  let data = [
    {
      id: 1,
      title: 'Futsal',
      img:'/home/yasin/tmp/playEasy/assets/futsal.png'

    },
    {
      id: 2,
      title: 'bulu tangkis',
      img:'/home/yasin/tmp/playEasy/assets/bulutangkis.png'
    },
    {
      id: 3,
      title: 'renang',
      img:'/home/yasin/tmp/playEasy/assets/renang.png'
    },
    {
      id: 4,
      title: 'pingpong',
      img:'/home/yasin/tmp/playEasy/assets/pingpong.png'
    },
  ];

  // Data lapangan
  let datLapangan = [
    {
      id: 1,
      title: 'Fenus futsal',
      lokasi: 'Semarang',
      rateing: 4.0,
      harga: 100000,
      image: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg'
    },
    {
      id: 2,
      title: 'Lapangan Futsal Semarang',
      lokasi: 'Semarang',
      rateing: 4.5,
      harga: 120000,
      image: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg'
    },
    {
      id: 3,
      title: 'Futsal Center',
      lokasi: 'Jakarta',
      rateing: 4.2,
      harga: 150000,
      image: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg'
    },
    {
      id: 4,
      title: 'Lapangan Futsal Bandung',
      lokasi: 'Bandung',
      rateing: 4.3,
      harga: 110000,
      image: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg'
    },
    {
      id: 5,
      title: 'Futsal Arena',
      lokasi: 'Surabaya',
      rateing: 4.1,
      harga: 130000,
      image: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg'
    },
    {
      id: 6,
      title: 'Lapangan Futsal Bali',
      lokasi: 'Bali',
      rateing: 4.4,
      harga: 140000,
      image: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg'
    }
  ];

  const botnav = () => {
    return (
      <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-between', height: 60, backgroundColor: '#ffffff' }}>
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
          <Pressable onPress={() => {
            LibNavigation.navigate('main/index')
          }}>
            <Image source={require("/home/yasin/tmp/playEasy/assets/Home.png")} style={{ width: 30, height: 30 }} />

          </Pressable>
        </View>

        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
          <Pressable onPress={() => {
            LibNavigation.navigate('favorit/favorit')
          }}>
            <Image source={require("/home/yasin/tmp/playEasy/assets/heart.png")} style={{ width: 30, height: 30 }} />

          </Pressable>
        </View>

        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
          <Pressable onPress={() => {
            LibNavigation.navigate('jadwal/jadwal')
          }}>
            <Image source={require("/home/yasin/tmp/playEasy/assets/calender.png")} style={{ width: 30, height: 30 }} />

          </Pressable>
        </View>

        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: width / 4 }}>
          <Pressable style={{ justifyContent: 'center', alignItems: 'center', }} onPress={
            () => {
              LibNavigation.navigate('profil/profil')
            }
          }>
            <AntDesign name="user" size={28} color="#B9BCBE" />
          </Pressable>
        </View>

      </View>
    )
  } 

  const ListHeaderComponent = () => {
    return (
      <View>
        <Text allowFontScaling={false} style={{ margin: 15, marginBottom: 0, fontSize: 22, color: 'skyblue', fontWeight: 'bold' }}> Playeasy</Text>
        {/* Pesan Selamat Datang */}
        <Text allowFontScaling={false} style={{ margin: 15, marginBottom: 0, fontSize: 30, color: 'skyblue', fontWeight: 'bold' }}>
          Halo, Yasin
        </Text>
        {/* Teks "Mau apa hari ini" */}
        <Text allowFontScaling={false} style={{ marginLeft: 15, marginTop: 0, fontSize: 26, color: 'black', fontWeight: 'bold' }}>
          Mau apa hari ini
        </Text>

        {/* Kotak pencarian */}
        <Pressable style={{ width: width, height: 80 }} onPress={() => {
          LibNavigation.navigate('utils/searchlist'), console.log('tes')
        }}>
          <View style={{ padding: 10, flex: 1, margin: 15, borderRadius: 5, alignContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#fff', ...elevation(3) }}>
            <LibIcon color='grey' name={'search-web'} />
            <Text style={{ marginLeft: 10, flex: 1, color: 'gray', fontSize: 16 }} >Cari lapangan </Text>
          </View>
        </Pressable>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 15, height: 150 }}>
          {data?.map((item, i) => {
            return (
              <Pressable key={item.id} onPress={() => { LibNavigation.navigate('kategori/kategoridetail') }}>
                <View key={item.id} style={{ height: 125, width: 125, margin: 5, borderRadius: 5, backgroundColor: '#ffffff', alignContent: 'center', alignItems: 'center', justifyContent: 'center', ...elevation(5) }}>
                <Image source={require('/home/yasin/tmp/playEasy/assets/futsal.png')} style={{ width: 50, height: 50 }} />
                  <Text allowFontScaling={false}>{item.title}</Text>
                 
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (

    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: STATUSBAR_HEIGHT }}>

      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={datLapangan}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Pressable key={item.id} onPress={() => { LibNavigation.navigate('kategori/kategoridetail') }}>
              <View key={item.id} style={{ margin: 15, overflow: 'hidden', borderRadius: 10, ...elevation(2) }}>
                {loading && <ActivityIndicator size="large" color="blue" />}
                <Image source={{ uri: item.image }} style={{ width: width - 30, height: height / 5 }} onLoadEnd={() => setLoading(false)} />
                <View style={{ position: 'absolute', justifyContent: 'flex-end', padding: 10, top: 0, bottom: 0, left: 0, right: 0 }}>
                  {/* Judul dan rating */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text allowFontScaling={false} style={{ color: "white" }}>{item.title}</Text>
                    <View style={{ width: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <LibIcon name="star" size={20} color="orange" />
                      <Text allowFontScaling={false} style={{ color: "white" }}>{item.rateing}</Text>
                    </View>
                  </View>
                  {/* Lokasi dan harga */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <View style={{ width: 90, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <LibIcon name="map" size={20} color="red" />
                      <Text allowFontScaling={false} style={{ color: "white" }}>{item.lokasi}</Text>
                    </View>
                    <Text allowFontScaling={false} style={{ color: 'white' }}>{`RP.${item.harga}`}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}
      />

      {botnav()}



    </View>
  )
}
export default memo(m);