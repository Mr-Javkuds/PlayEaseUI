// withHooks
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { UtilsLapanganpicker } from 'esoftplay/cache/utils/lapanganpicker/import';
import useSafeState from 'esoftplay/state';
import { memo } from 'react';

import React from 'react';
import { View } from 'react-native';

export interface UtilsLapPickerArgs {}

export interface UtilsLapPickerProps {
  Arrays: any;
  items: any; // Fix typo here
  selected:number;
}

function m(props: UtilsLapPickerProps): any {
  const [disabled, setDisabled] = useSafeState(false);
  const [arraylap, setArraylap] = useSafeState([7]);
  const [Selectedlap, setSelectedlap] = useSafeState(props.selected);

  console.log(Selectedlap, "Selectedlap");

  return (
    <View >
        <UtilsLapanganpicker

          item={props.items}
          isSelected={Selectedlap === props.items.id}
          Idlap={Selectedlap}
        />
    
    
    </View>
  );
}

export default memo(m);