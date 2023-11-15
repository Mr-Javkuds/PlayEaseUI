// withHooks
import { memo } from 'react';

import React from 'react';
import { Text, View } from 'react-native';


export interface JadwalDalam_prosesArgs {
  
}
export interface JadwalDalam_prosesProps {
  
}
function m(props: JadwalDalam_prosesProps): any {
  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Text allowFontScaling={false}>Dalam Proses</Text>
    </View>
  )
}
export default memo(m);