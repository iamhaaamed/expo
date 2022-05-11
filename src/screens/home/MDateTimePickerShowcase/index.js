import React, { useState } from 'react';
import { View } from 'react-native';

import { createScreen } from 'components/elements';
import MDateTimePicker, {
  DateTimePickerMod,
} from 'components/common/MDateTimePicker';
import { MButton, MInput } from 'components/common';

const MDateTimePickerShowcase = createScreen(
  () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [dateTime, setDateTime] = useState('');
    return (
      <>
        <View>
          <MDateTimePicker
            returnDate={setDate}
            returnDateTime={setDateTime}
            mode={DateTimePickerMod.date}
            buttonJsx={<MButton text="Select Date" />}
          />
        </View>
        <View style={{ position: 'absolute', bottom: 0 }}>
          <MDateTimePicker
            returnTime={setTime}
            mode={DateTimePickerMod.time}
            buttonJsx={<MButton text="Select Time" />}
          />
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <MDateTimePicker
            returnDateTime={setDateTime}
            mode={DateTimePickerMod.datetime}
            buttonJsx={<MButton text="Select DateTime" />}
          />
        </View>
        <View>
          <MDateTimePicker
            returnDate={setDate}
            mode={DateTimePickerMod.date}
            inputJsx={<MInput placeholder="Date" value={date} disabled />}
          />
        </View>
        <View>
          <MDateTimePicker
            returnTime={setTime}
            mode={DateTimePickerMod.time}
            inputJsx={<MInput placeholder="Time" value={time} disabled />}
          />
        </View>
        <View>
          <MDateTimePicker
            returnDateTime={setDateTime}
            mode={DateTimePickerMod.datetime}
            inputJsx={
              <MInput placeholder="DateTime" value={dateTime} disabled />
            }
          />
        </View>
      </>
    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  },
);

export default MDateTimePickerShowcase;
