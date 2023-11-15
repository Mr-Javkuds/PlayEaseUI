// withHooks
import { memo } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { Dimensions, ImageBackground, Platform, Pressable, ScrollView,Text, View } from 'react-native';



export interface DetailDetailArgs {

}
export interface DetailDetailProps {

}
function m(props: DetailDetailProps): any {
  let { width,} = Dimensions.get("window");


  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' }; ImageBackground
  function elevation(value: any) {
    if (Platform.OS === "ios") {
      if (value === 0) return {};
      //shadowRadius: 4, shadowOpacity: 0.26, elevation: 8, backgroundColor: 'white',
      return { shadowColor: "black", shadowOffset: { width: 0, height: value }, shadowRadius: value, shadowOpacity: 0.24 };
    }
    return { elevation: value };
  }
  //button

  // // Menghitung tinggi status bar berdasarkan platform
  // const STATUSBAR_HEIGHT = (Platform.OS === "ios" ? isIPhoneX ? 44 : 20 : StatusBar.currentHeight) || 0;
  return (
    <View style={{ flex: 1,  backgroundColor: "#fff", }} >
      <ScrollView >
        <View >
          <ImageBackground
            style={{ width: LibStyle.width, paddingTop: 20, paddingHorizontal: 20, height: LibStyle.width / 2 }}
            source={image}>

            <View style={{
              flexDirection: 'row', marginTop: -20,
              justifyContent: 'space-between', width: width - 40, height: 60, alignItems: 'center',
            }}>
              <Pressable onPress={() => { LibNavigation.navigate('main/index') }}>
                <LibIcon name='backspace-outline' size={30} color='white' />
              </Pressable>
              <Pressable onPress={() => { LibNavigation.navigate('main/index') }}>
                <LibIcon name='heart-outline' size={30} color='red' />
              </Pressable>

            </View>
          </ImageBackground>



          <View style={{ 
            
            shadowColor: 'black', shadowOffset: { width: 0, height: 2 },
          // bagian ini penting untuk shadow
            shadowRadius: 3, shadowOpacity: 0.26, elevation: 8, backgroundColor: 'white',
            padding: 20, width: LibStyle.width - 60, alignSelf: 'center', borderRadius: 15, marginTop: -50, marginBottom: 20 }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  alignItems:'center'}}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>PDI Futsal</Text>
              <View style={{ padding: 10, justifyContent: 'center', flexDirection: 'row' }}>
                <LibIcon name='star' size={20} color='orange' />
                <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 'normal' }}>5.0</Text>
              </View>
            </View>

            <Text style={{ fontSize: 16 }}>Jl. Raya Ciputat No. 1, Ciputat, Tangerang Selatan, Banten</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
              <View style={{ marginTop:10, justifyContent: 'center', flexDirection: 'row' }}>
                <LibIcon name='puzzle' size={20} color='red' />
                <Text allowFontScaling={false} style={{ fontSize: 16, color: 'red', fontWeight: 'normal' }}>Banteng Merah</Text>
              </View>
              <Text style={{ fontSize: 16 }}>Rp. 100.000</Text>
            </View>


          </View>
        </View>
        <View style={{ marginHorizontal: 30, width: width - 60, marginVertical: 10, padding: 5, alignContent: 'center', backgroundColor: 'white', borderRadius: 10, ...elevation(5) }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Deskripsi</Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Minima, quisquam optio hic quidem repudiandae autem neque eum delectus cumque fugiat,
            voluptas placeat. Placeat perferendis voluptatum amet modi odio. Nemo, sunt.
          </Text>
        </View>
        <View style={{ marginHorizontal: 30, width: width - 60, marginVertical: 10, padding: 5, alignContent: 'center', backgroundColor: 'white', borderRadius: 10, ...elevation(5) }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Jam Oprasional</Text>

          <Text>
            Senin - Jumat : 08.00 - 22.00
          </Text>

        </View>
        <View style={{
          shadowColor: 'black', shadowOffset: { width: 0, height: 2 },
          // bagian ini penting untuk shadow
          shadowRadius: 3, shadowOpacity: 0.26, elevation: 8, backgroundColor: 'white',

          borderRadius: 10, marginHorizontal: 30, width: width - 60, marginVertical: 10, padding: 10, alignContent: 'center',
        }}>

          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Fasilitas</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <LibIcon name='shower-head' size={20} />
              <Text>  Ruang Ganti</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <LibIcon name='file-restore-outline' size={20} />
              <Text>  Kantin</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', }}>
              <LibIcon name='parking' size={20} />
              <Text>  Parkir</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <LibIcon name='mosque' size={20} />
              <Text>  Mushola</Text>
            </View>
          </View>
        </View>

        <View style={{ shadowRadius: 3, shadowOpacity: 0.26, elevation: 8, backgroundColor: '#aa5a5a', borderRadius: 10, marginHorizontal: 30, width: width - 60, marginVertical: 10, padding: 10, alignContent: 'center', }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Lokasi</Text>
          <Text>Jl. Raya Ciputat No. 1, Ciputat, Tangerang Selatan, Banten</Text>
        </View>

      </ScrollView>

      <View style={{ 
        shadowColor: 'black', shadowOffset: { width: 0, height: 10},
        // bagian ini penting untuk shadow
        shadowRadius: 3, shadowOpacity: 0.26, elevation: 8, backgroundColor: '#4EC5F1',
        width: width, flexDirection: 'row', justifyContent: 'center',alignItems:'center', height: 80,}}>
        <Pressable onPress={() => {
          LibNavigation.navigate('detail/pilihjam')
          }} style={{height:40 ,backgroundColor:'skyblue',alignItems:'center',width:width-50,justifyContent:'center'}}> 
          <Text allowFontScaling={false}>Pesan Sekarang</Text>
        </Pressable>
      </View>

    </View>
  )
}
export default memo(m);