// withHooks
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibScroll } from 'esoftplay/cache/lib/scroll/import';
import { UtilsDatepicker_item } from 'esoftplay/cache/utils/datepicker_item/import';
import moment from 'esoftplay/moment';
import useSafeState from 'esoftplay/state';
import { useTimeout } from 'esoftplay/timeout';
import React, { memo, useEffect, useRef } from 'react';
import { Pressable, Text, View } from 'react-native';

export interface UtilsDatepickerArgs {

}
export interface UtilsDatepickerProps {
  minDate?: string,
  maxDate?: string,
  onDateChange: (date: string) => void,
}
function m(props: UtilsDatepickerProps): any {

  const scrollHorizontal = useRef<LibScroll>(null)
  const [date, setDate, getDate] = useSafeState(moment().toDate())
  const [selectedDate, setSelectedDate] = useSafeState(moment().toDate())
  const [selectedMonth, setSelectedMonth] = useSafeState(moment(date).localeFormat('MMMM YYYY'))
  const [arrayTanggal, setArrayTanggal] = useSafeState<any[]>(generateArrayDate(date))

  const timeout = useTimeout()

  useEffect(() => {
    setSelectedMonth(moment(date).localeFormat('MMMM YYYY'))
    setArrayTanggal(generateArrayDate(date))
    
    timeout(() => {
      scrollHorizontal.current?.scrollToIndex(arrayTanggal.findIndex((x) => x == moment(selectedDate).format('DD')))
    }, 200)
  }, [date])
  
  useEffect(() => {
    timeout(() => {
      scrollHorizontal.current?.scrollToIndex(arrayTanggal.findIndex((x) => x == moment(selectedDate).format('DD')))
    }, 200)
    props.onDateChange(moment(selectedDate).localeFormat('YYYY-MM-DD'))
  }, [selectedDate])

  function generateArrayDate(date: Date) {
    const maxDate = new Date(Number(moment(date).localeFormat('YYYY')), Number(moment(date).localeFormat('MM')), 0).getDate()
    return new Array(maxDate).fill('1').map((item, index) => index + 1)
  }

  function geserBulan(isMaju: boolean) {
    if (isMaju) {
      const bulanSekarang = moment(getDate()).add(1, 'months').toDate()
      setDate(bulanSekarang)
    } else {
      const bulanSekarang = moment(getDate()).subtract(1, 'months').toDate()
      setDate(bulanSekarang)
    }
  }

  return (
    <View style={{ backgroundColor: 'white' }} >
      <View style={{ padding:10, alignItems: 'center', flexDirection: 'row' }} >
        <Pressable onPress={() => { geserBulan(false) }} >
          <LibIcon.FontAwesome name='arrow-left' size={14} />
        </Pressable>
        <Text style={{ flex: 1, marginLeft: 12 }} >{selectedMonth}</Text>
        <Pressable onPress={() => { geserBulan(true) }} >
          <LibIcon.FontAwesome name='arrow-right' size={14} />
        </Pressable>
      </View>
      <LibScroll ref={scrollHorizontal} key={selectedMonth} horizontal>
        {
          arrayTanggal.map((item) => {
            const currentDate = moment(date).localeFormat("YYYY-MM-") + (item > 9 ? item : item.toString().padStart(2, '0'))
            const dayname = moment(currentDate).localeFormat('ddd')
            let disabled = false
            if (props.minDate) {
              disabled = props.minDate > currentDate
            }
            if (props.maxDate && disabled == false) {
              disabled = props.maxDate < currentDate
            }
            // console.log(moment(date).format('YYYY-MM-DD'), currentDate)

            return (
              <UtilsDatepicker_item
                disabled={disabled}
                onPress={() => {
                  setSelectedDate(moment(currentDate).toDate())
                }}
                isSelected={moment(selectedDate).format('YYYY-MM-DD') == currentDate}
                datenumber={item}
                dayname={dayname} />
            )
          })
        }
      </LibScroll>
    </View>
  )
}
export default memo(m);