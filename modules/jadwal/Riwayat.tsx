// withHooks
import { memo } from 'react';

import React from 'react';
import { View,Text} from 'react-native';


export interface JadwalRiwayatArgs {
  
}
export interface JadwalRiwayatProps {
  
}
function m(props: JadwalRiwayatProps): any {
  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
    <Text allowFontScaling={false}>Riwayat</Text>
  </View>
  )
}
export default memo(m);