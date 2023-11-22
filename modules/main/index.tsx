// withHooks
import { memo } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';

import React from 'react';
import { Dimensions, Image, Platform, Pressable, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { isIPhoneX } from 'react-native-isiphonex-device';
// import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface MainIndexArgs {

}
export interface MainIndexProps {

}
function m(props: MainIndexProps): any {
  // Dimensions.get("window");
  let { width, height } = Dimensions.get("window");

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
      title: 'Futsal'
    },
    {
      id: 2,
      title: 'Tennis'
    },
    {
      id: 3,
      title: 'Basket'
    },
    {
      id: 4,
      title: 'Badminton'
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

  const ListHeaderComponent = () => {
    return (
      <View>
        <Text allowFontScaling={false} style={{ margin: 15, marginBottom: 0, fontSize: 22, color: 'skyblue', fontWeight: 'bold' }}>
          {datLapangan[1].harga}
        </Text>
        {/* Pesan Selamat Datang */}
        <Text allowFontScaling={false} style={{ margin: 15, marginBottom: 0, fontSize: 30, color: 'skyblue', fontWeight: 'bold' }}>
          Halo, Yasin
        </Text>
        {/* Teks "Mau apa hari ini" */}
        <Text allowFontScaling={false} style={{ marginLeft: 15, marginTop: 0, fontSize: 26, color: 'black', fontWeight: 'bold' }}>
          Mau apa hari ini
        </Text>

        {/* Kotak pencarian */}
        <Pressable style={{width:width,height:80}} onPress={() => {
        LibNavigation.navigate('utils/searchlist'),console.log('tes')
          }}>
        <View style={{ padding: 10, flex: 1, margin: 15, borderRadius: 5, alignContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#fff', ...elevation(3) }}>
          <LibIcon color='grey' name={'search-web'} />
          <Text style={{ marginLeft: 10, flex: 1,color:'gray',fontSize: 16 }} >Cari lapangan </Text>
        </View>
        </Pressable>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 15 }}>
          {data?.map((item, i) => {
            return (
              <View key={item.id} style={{ height: 125, width: 125, marginRight: 5, borderRadius: 5, backgroundColor: 'pink', alignContent: 'center', alignItems: 'center', justifyContent: 'center', ...elevation(3) }}>
                <Text allowFontScaling={false}>{item.title}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (

    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: STATUSBAR_HEIGHT }}>

      <FlatList
        ListHeaderComponent={
          ListHeaderComponent()
        }
        data={datLapangan}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => { LibNavigation.navigate('detail/detail')}}>
            <View key={item.id} style={{ margin: 15, overflow: 'hidden', borderRadius: 10, ...elevation(2) }}>
              <Image source={{ uri: item.image }} style={{ width: width - 30, height: height / 5 }} />
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