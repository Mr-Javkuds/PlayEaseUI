// withHooks
import React, { memo } from 'react';
import { Dimensions, ImageBackground, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { LibPicture } from 'esoftplay/cache/lib/picture/import';
import { FlatList } from 'react-native-gesture-handler';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';

export interface DetailPilihjamProps {}

function DetailPilihjamComponent(props: DetailPilihjamProps): any {
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

  const data = [
    { id: 1, title: '08:00', harga: 50, lapangan: 'A' },
    { id: 2, title: '09:00', harga: 60, lapangan: 'B' },
    { id: 3, title: '10:00', harga: 55, lapangan: 'C' },
    { id: 4, title: '11:00', harga: 65, lapangan: 'D' },
    // Add more data objects with harga and lapangan properties
    { id: 5, title: '12:00', harga: 70, lapangan: 'E' },
    { id: 6, title: '13:00', harga: 75, lapangan: 'F' },
    { id: 7, title: '14:00', harga: 80, lapangan: 'G' },    // Add more data objects with harga and lapangan properties
  ];

  const hari = [
    { id: 1, name: 'Senin' },
    { id: 2, name: 'Selasa' },
    { id: 3, name: 'Rabu' },
    { id: 4, name: 'Kamis' },
    { id: 5, name: 'Jumat' },
    { id: 6, name: 'Sabtu' },
    { id: 7, name: 'Minggu' },
  ];

const ListHeaderComponent=()=>{
  return(
    <View>
    <ImageBackground
    source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
    style={{ width: LibStyle.width, padding: 30, height: LibStyle.width / 2 }}>
  
  </ImageBackground>

  <View
    style={{
      padding: 20,
      flexDirection: 'row',
      backgroundColor: 'pink',
      width: LibStyle.width - 60,
      alignSelf: 'center',
      borderRadius: 15,
      marginTop: -50,
      marginBottom: 20,
    }}>
   
    <LibPicture source={{ uri:'https://lapanganfutsal.id/wp-content/uploads/2023/01/venus-futsal1.jpg' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
    <View style={{ padding: 10, justifyContent: 'center' }}>
      <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 'bold' }}>
        PDI Club
      </Text>
      <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 'normal' }}>
        PDI@gmail.com
      </Text>
    </View>
  </View>

  <View style={{ padding: 10, width: LibStyle.width, height: 100, marginVertical:0 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 15 }}>
      {hari?.map((item) => (
        <View key={item.id} style={{ height: 75,justifyContent:'center',alignItems:'center', width: 75, marginRight: 5, borderRadius: 5, backgroundColor: 'pink', ...elevation(3) }}>
          <Text allowFontScaling={false} style={{ fontSize:13}} >{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
    </View>
  )
}

  return (
    <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
    

      <FlatList
        data={data}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => LibNavigation.navigate('detail/detail')}>
            <View
              key={item.id}
              style={{ margin: 15, height: 50, backgroundColor: 'green', borderRadius: 10, ...elevation(2) }}>
              <Text allowFontScaling={false} style={{ color: 'white' }}>
                {item.title + ' ' + item.harga + ' ' + item.lapangan}
              </Text>
            </View>
          </Pressable>
        )}//Yasin 
      />
    </View>
  );
}

export default memo(DetailPilihjamComponent);