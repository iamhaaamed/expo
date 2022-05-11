import { MImage, MText } from 'components/common';
import { COLORS, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const HotelGallery = ({ items, navigation }) => {
    const { IMAGES, COMMON } = useTheme();
    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };
    const [listItems, setListItems] = useState([
        { title: 'All', view: 'ALL', items: items ?? [] },
        { title: 'Hotel View', view: 'HOTEL_VIEW', items: [] },
        { title: 'Room View', view: 'ROOM_VIEW', items: [] },
        { title: 'Spa', view: 'SPA_VIEW', items: [] },
        { title: 'Pool', view: 'POOL_VIEW', items: [] },
    ]);
    useEffect(() => {
        makeCategory();
    }, []);
    const makeCategory = () => {
        console.log('Photo gallery are' + JSON.stringify(items));
        if (items && items.length > 0) {
            let hotelView = Array();
            let spaView = Array();
            let poolView = Array();
            let roomView = Array();
            for (let i = 0; i < items?.length; i++) {
                switch (items[i].view) {
                    case 'HOTEL_VIEW': {
                        if (items[i].title === "cover" && hotelView.length>0)
                            hotelView.splice(0, 0, items[i]);
                        else
                            hotelView.push(items[i]);
                        break;
                    }
                    case 'ROOM_VIEW':{
                        if (items[i].title === "cover" && roomView.length>0)
                            roomView.splice(0, 0, items[i]);
                        else
                            roomView.push(items[i]);
                        break;
                    }
                    case 'SPA_VIEW':{
                        if (items[i].title === "cover" && spaView.length>0)
                            spaView.splice(0, 0, items[i]);
                        else
                            spaView.push(items[i]);
                        break;
                    }
                    case 'POOL_VIEW':{
                        if (items[i].title === "cover" && poolView.length>0)
                            poolView.splice(0, 0, items[i]);
                        else
                            poolView.push(items[i]);
                        break;
                    }
                    default:
                        break;
                }
            }
            let finalList = Array();
            finalList.push({ title: 'All', view: 'ALL', items: items ?? [] });
            finalList.push({
                title: 'Hotel View',
                view: 'HOTEL_VIEW',
                items: hotelView,
            });
            finalList.push({
                title: 'Room View',
                view: 'ROOM_VIEW',
                items: roomView,
            });
            finalList.push({ title: 'Spa', view: 'SPA_VIEW', items: spaView });
            finalList.push({
                title: 'Pool',
                view: 'POOL_VIEW',
                items: poolView,
            });
            setListItems(finalList);
        }
    };
    return (
        <View>
            {items?.length > 0 ?? (
                <MText textStyle={COMMON.Title}>Gallery</MText>
            )}
            <FlatList
                showsVerticalScrollIndicator={false}
                horizontal={true}
                data={listItems}
                renderItem={({ item }) => (
                    <View>
                        {(item?.items && item.items.length > 0 && item.title!='All') ? (
                            <View style={{ width: DEVICE_WIDTH * 0.3 }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate(
                                            'HotelPhotoGallery',
                                            { tabWithItems: listItems },
                                        )
                                    }>
                                    <MImage
                                        imageSource={
                                            item.items[0]?.photoUrl
                                                ? {
                                                    uri:
                                                        item.items[0]
                                                            ?.photoUrl,
                                                }
                                                : null
                                        }
                                        style={{
                                            width: DEVICE_WIDTH * 0.25,
                                            height: DEVICE_WIDTH * 0.3,
                                            resizeMode: 'cover',
                                            borderRadius: METRIC_SIZES.small,
                                        }}
                                    />
                                    <MText textStyle={COMMON.NormalText}>
                                        {item?.title ?? ''}
                                    </MText>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionCenter: {
        paddingBottom: verticalScale(16),
        paddingTop: verticalScale(16),
        paddingRight: scale(16),
        paddingLeft: scale(16),
        borderWidth: 1,
        borderColor: COLORS.Color707,
        backgroundColor: COLORS.Color304,
        alignSelf: 'center',
        width: '100%',
        borderRadius: METRIC_SIZES.small,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: METRIC_SIZES.tiny,
        borderTopWidth: 2,
        borderTopColor: COLORS.disabled,
        marginTop: METRIC_SIZES.tiny,
    },
    separator: {
        height: 2,
        width: '100%',
    },
});
export default HotelGallery;
