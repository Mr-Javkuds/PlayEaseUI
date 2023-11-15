// withHooks
import { memo } from 'react';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { Dimensions, FlatList, Image, Platform, Pressable, StatusBar, Text, View } from 'react-native';

import { isIPhoneX } from 'react-native-isiphonex-device';


export interface FavoritFavoritArgs {
  
}
export interface FavoritFavoritProps {
  
}
function m(props: FavoritFavoritProps): any {
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
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: STATUSBAR_HEIGHT ,  }}>
  <FlatList
        ListHeaderComponent={
          <View style={{ flexDirection: 'row', flex:width-30,justifyContent:'flex-start', alignItems: 'center',paddingLeft:15 }}>
            <Text allowFontScaling={false} style={{ fontSize: 20, fontWeight: 'bold' }}>Favorit</Text>
            <Text allowFontScaling={false} style={{ fontSize: 20, color: 'blue',fontWeight:'bold' }}>KU</Text></View>
        }
        data={datLapangan}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => {
          return (

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