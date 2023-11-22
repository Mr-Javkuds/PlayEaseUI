// withHooks
import { memo } from 'react';

import React from 'react';
import { View } from 'react-native';


export interface dotArgs {
  
}
export interface dotProps {
  jumlah: number,
}
function m(props: dotProps): any {
  return (
    <View style={{ flexDirection: 'row',marginHorizontal:3, justifyContent: 'center', alignItems: 'center' }}>
      {new Array(props.jumlah).fill('1').map((item, index) => {
        return (
          <View key={index} style={{ backgroundColor: '#009EB4', width: 6, height: 6, borderRadius: 5, marginHorizontal: 2 }} />
        )
      })}
    </View>
  );
  
}
export default memo(m);