// withHooks
import { memo } from 'react';

import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';


export interface UtilsCustom_cardArgs {
  
}
export interface UtilsCustom_cardProps {
  name?: string,
}
function m(props: UtilsCustom_cardProps): any {
  let Name = props.name
  let { width, height } = Dimensions.get("window");
  return (
    
<Pressable style={{margin:15,}} onPress={() => { LibNavigation.navigate('main/index') }}>
        <View style={{ flexDirection: 'row', width: width-30, height: 80, backgroundColor: "orange", padding: 10, borderRadius: 12 ,}}>

          <View style={{ width: 50, height: 60, borderRadius:10,backgroundColor: 'white', justifyContent: 'center',alignItems:'center'  }}>
            <LibIcon name={'human'} size={30} color="#000" />
          </View>

          <Text allowFontScaling={false} style={{ fontSize: 18, alignSelf:'center',fontWeight: 'bold',marginLeft:10}}>{Name}</Text>

        </View>
      </Pressable>);
}
export default memo(m);