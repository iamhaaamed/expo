import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const MFlatList = ({
    data,
    horizontal = false,
    columnsCount,
    renderComponent,
    keyExtractorName,
    style,
}) => {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <SafeAreaView style={[styles.container, style]}>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    renderComponent({
                        item,
                        onPress: () => setSelectedId(item.id),
                        selectedId,
                    })
                }
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item?.id ?? item[keyExtractorName]}
                extraData={selectedId}
                horizontal={horizontal}
                numColumns={horizontal ? 1 : columnsCount}
                // ItemSeparatorComponent={() => (
                //   <View style={{ width: 16, backgroundColor: 'pink' }} />
                // )}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
});
export default MFlatList;
