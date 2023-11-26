// withHooks
import { memo, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { FlatList, Image, ImageBackground, Platform, Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { isIPhoneX } from 'react-native-isiphonex-device';


export interface KategoriDetailArgs {
  
}
export interface KategoriDetailProps {
  
}
function m(props: KategoriDetailProps): any {
  function elevation(value: any) {
    if (Platform.OS === "ios") {
      if (value === 0) return {};
      return { shadowColor: "black", shadowOffset: { width: 0, height: value / 2 }, shadowRadius: value, shadowOpacity: 0.24 };
    }
    return { elevation: value };
  }

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

  const STATUSBAR_HEIGHT = (Platform.OS === "ios" ? isIPhoneX ? 44 : 20 : StatusBar.currentHeight) || 0;

    // Initialize with the original data
  const [searchQuery, setsearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(datLapangan);
  
const handlequery = (query: string) => {
    // Mengonversi query menjadi huruf kecil agar pencarian menjadi case-insensitive
    const formattedQuery = query.toLocaleLowerCase();
    
    // Melakukan filter data berdasarkan query pada properti title
    let filtered = datLapangan.filter((datLapangan) => datLapangan.title.toLowerCase().includes(formattedQuery));
    
    // Mengatur state searchQuery sesuai dengan query yang dimasukkan pengguna
    setsearchQuery(query);
    
    // Mengatur state filteredData dengan data hasil filter
    setFilteredData(filtered);
    
    // Menampilkan hasil filter di console (optional, hanya untuk debugging)
    console.log(filteredData);
};

  
    
  
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: STATUSBAR_HEIGHT }}>

      <FlatList
        ListHeaderComponent={
          <View style={{ marginBottom: 20 }}>
            <ImageBackground
              style={{ width: LibStyle.width, paddingTop: 20, paddingHorizontal: 20, height: LibStyle.width / 2 }}
              source={{ uri: 'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg' }}>

              <View style={{
                flexDirection: 'row', marginTop: -15,
                justifyContent: 'flex-start', width: LibStyle.width - 40, height: 60, alignItems: 'center',
              }}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { LibNavigation.navigate('main/index') }}>
                  <Feather name="chevron-left" size={40} color="#ffffff" />
                  <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Back</Text>
                </Pressable>


              </View>
              <View style={{ padding: 5, backgroundColor: '#ffffff', width: LibStyle.width - 40, alignSelf: 'center', borderRadius: 10, marginTop: 90, marginBottom: 20, ...elevation(3) }}>
                <TextInput
                  placeholder='Search'
                  autoCorrect={false}
                  clearButtonMode='always'
                  onChangeText={(query)=>{
                    console.log(query)
                    setsearchQuery(query)
                    handlequery(query)}
                  }
                  style={{ marginLeft: 10, width: LibStyle.width - 10, height: 45 }}
                />
              </View>
            </ImageBackground>
          </View>
        }
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
        
              <Pressable onPress={() => { LibNavigation.navigate('detail/detail') }}>
                  <View key={item.id} style={{ margin: 15, overflow: 'hidden', borderRadius: 10, ...elevation(2) }}>
                    <Image source={{ uri: item.image }} style={{ width: LibStyle.width - 30, height: LibStyle.height / 5 }} />
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
          </View>
        )
      }
    />


   

  </View>
  )
}
export default memo(m);