import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const DateTimePickerMod = {
  date: 'date',
  time: 'time',
  datetime: 'datetime',
};

const MDateTimePicker = ({
  buttonJsx,
  inputJsx,
  mode,
  returnDate,
  returnTime,
  returnDateTime,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const FormatDate = (data) => {
    let dateString =
      data.getDate() +
      '/' +
      (data.getMonth() + 1) +
      '/' +
      data.getFullYear() +
      ' ';

    let hours = data.getHours();
    let minutes = data.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let dateTimeString = dateString + hours + ':' + minutes + ' ' + ampm;

    switch (mode) {
      case 'date':
        returnDate(dateString);
        break;
      case 'time':
        returnTime(hours + ':' + minutes + ' ' + ampm);
        break;
      case 'datetime':
        returnDateTime(dateTimeString);
        break;
      default:
        break;
    }
    return dateTimeString;
  };

  const handleConfirm = (date) => {
    FormatDate(date);
    hideDatePicker();
  };

  return (
    <View>
      {!!buttonJsx
        ? React.cloneElement(buttonJsx, {
            onPress: showDatePicker,
          })
        : null}
      {!!inputJsx ? (
        <Pressable onPress={showDatePicker}>
          <View pointerEvents="none">{inputJsx}</View>
        </Pressable>
      ) : null}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default MDateTimePicker;
