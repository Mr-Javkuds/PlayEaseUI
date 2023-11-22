  // withHooks
  
  import { LibPicture } from 'esoftplay/cache/lib/picture/import';
import React from 'react';
  import { Platform, Pressable, Text, View } from 'react-native';
  
  
  export interface UtilsLapanganpickerArgs {
    
  }
  export interface UtilsLapanganpickerProps {
    item: any,
    isSelected: boolean,
    Idlap:Number,
    // lapangan: string,
    // harga: string,
    // url: string,
    // id: number,



  }
  export default function m(props: UtilsLapanganpickerProps): any {
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

    
      <Pressable onPress={()=>{ 
       
        console.log("id items: ",typeof(props.item.id)," id lap",typeof(props.Idlap),)
        console.log("id items: ",props.item.id," id lap",props.Idlap,"isSelected: ",props.isSelected)
      }}>
        <View>
        <View
              key={props.item.id}
              style={{
                margin: 15, paddingRight: 10, height: 80,
                justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                backgroundColor:props.isSelected? '#0396a6':'#ffffff', borderRadius: 5, ...elevation(5)
              }}>

              <LibPicture source={{ uri: props.item.url }}
                style={{ flex: 1.8, height: 80, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, resizeMode: 'contain', marginRight: 20, ...elevation(5) }} />

              <View style={{ flex: 3, }}>
                <Text allowFontScaling={false} style={{ color: props.isSelected?'white':'#009EB4', fontSize: 18 }}>
                  {props.item.lapangan} {String(props.isSelected)}
                </Text>
                <Text allowFontScaling={false} style={{ color: '#000000' }}>
                  {props.item.harga}
                </Text>
              </View>
            </View>
      </View>
      </Pressable>
    )
  }