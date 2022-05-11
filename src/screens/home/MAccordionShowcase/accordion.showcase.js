import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    MButton,
    MText,
    MAccordion,
    MImage,
    MCheckBox,
} from 'components/common';

export const AccordionShowCaseOne = () => {
    const { IMAGES } = useTheme();
    const [expanded, setExpanded] = useState(false);

    return (
        <MAccordion
            expanded={expanded}
            style={AOneStyles.container}
            headerStyle={{ height: 85 }}
            onPress={() => setExpanded((p) => !p)}>
            <MAccordion.Header>
                <View style={[AOneStyles.row, { paddingHorizontal: 18 }]}>
                    <View style={{ width: 40 }}>
                        <MImage
                            imageSource={IMAGES.klopp}
                            style={AOneStyles.avatar}
                        />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 12 }}>
                        <MText textStyle={{ fontWeight: 'bold' }}>
                            Mohammad Fardin
                        </MText>
                        <MText>28 December</MText>
                    </View>
                </View>
            </MAccordion.Header>
            <MAccordion.Content>
                <View style={{ paddingHorizontal: 18, paddingBottom: 18 }}>
                    <MText textStyle={{ fontSize: 18 }}>
                        When one door of happiness closes another opens but
                        often we look so long at the closed door that we do not
                        see the one that has been opened for us.
                    </MText>
                    <View style={AOneStyles.divider} />
                    <View style={AOneStyles.row}>
                        <MButton
                            transparent
                            color="gray"
                            iconRight={{ name: 'share-social-outline' }}
                        />
                        <View style={AOneStyles.row}>
                            <MButton
                                text="256"
                                transparent
                                color="gray"
                                iconRight={{ name: 'md-chatbox-outline' }}
                            />
                            <MButton
                                text="256"
                                transparent
                                color="gray"
                                iconRight={{ name: 'heart-outline' }}
                            />
                        </View>
                    </View>
                </View>
            </MAccordion.Content>
        </MAccordion>
    );
};
const AOneStyles = StyleSheet.create({
    container: {
        margin: 12,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    divider: {
        marginVertical: 16,
        borderColor: '#e5e5e5',
        borderWidth: StyleSheet.hairlineWidth,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export const AccordionShowCaseTwo = () => {
    const { IMAGES } = useTheme();
    const [expanded, setExpanded] = useState(false);

    return (
        <MAccordion
            expanded={expanded}
            style={ATwoStyles.container}
            headerStyle={{ height: 85 }}
            separatorStyle={{ height: 12 }}
            onPress={() => setExpanded((p) => !p)}>
            <MAccordion.Header>
                <View style={[ATwoStyles.row, { paddingHorizontal: 18 }]}>
                    <View style={{ width: 40 }}>
                        <MImage
                            imageSource={IMAGES.klopp}
                            style={ATwoStyles.avatar}
                        />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 12 }}>
                        <MText textStyle={{ fontWeight: 'bold' }}>
                            Mohammad Fardin
                        </MText>
                        <MText>28 December</MText>
                    </View>
                </View>
            </MAccordion.Header>
            <MAccordion.Content>
                <View
                    style={{
                        paddingHorizontal: 18,
                        paddingBottom: 18,
                    }}>
                    <MText textStyle={{ fontSize: 18 }}>
                        Believe you can and you're halfway there
                    </MText>
                    <View style={{ height: 100, width: '100%' }}>
                        <MImage
                            imageSource={IMAGES.klopp}
                            style={ATwoStyles.image}
                        />
                    </View>
                    <View style={ATwoStyles.divider} />
                    <View style={ATwoStyles.row}>
                        <MButton
                            transparent
                            color="gray"
                            iconRight={{ name: 'share-social-outline' }}
                        />
                        <View style={ATwoStyles.row}>
                            <MButton
                                text="256"
                                transparent
                                color="gray"
                                iconRight={{ name: 'md-chatbox-outline' }}
                            />
                            <MButton
                                text="256"
                                transparent
                                color="gray"
                                iconRight={{ name: 'heart-outline' }}
                            />
                        </View>
                    </View>
                </View>
            </MAccordion.Content>
        </MAccordion>
    );
};
const ATwoStyles = StyleSheet.create({
    container: {
        margin: 12,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        resizeMode: 'cover',
    },
    divider: {
        marginVertical: 16,
        borderColor: '#e5e5e5',
        borderWidth: StyleSheet.hairlineWidth,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export const AccordionShowCaseThree = () => {
    const { IMAGES } = useTheme();
    const [expanded, setExpanded] = useState(false);

    return (
        <MAccordion
            expanded={expanded}
            style={AThreeStyles.container}
            headerStyle={{ height: 85 }}
            onPress={() => setExpanded((p) => !p)}>
            <MAccordion.Header>
                <View style={[AThreeStyles.row, { paddingHorizontal: 18 }]}>
                    <View style={{ flex: 1, paddingHorizontal: 12 }}>
                        <MText textStyle={{ fontWeight: 'bold', fontSize: 18 }}>
                            Timeline
                        </MText>
                    </View>
                </View>
            </MAccordion.Header>
            <MAccordion.Content>
                <View style={{ paddingHorizontal: 18, paddingBottom: 18 }}>
                    <View style={AThreeStyles.divider} />
                    <MText textStyle={{ fontSize: 18 }}>
                        When one door of happiness closes another opens but
                        often we look so long at the closed door that we do not
                        see the one that has been opened for us.
                    </MText>
                </View>
            </MAccordion.Content>
        </MAccordion>
    );
};
const AThreeStyles = StyleSheet.create({
    container: {
        margin: 12,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    divider: {
        marginBottom: 16,
        borderColor: '#e5e5e5',
        borderWidth: StyleSheet.hairlineWidth,
    },
});

export const AccordionShowCaseFour = () => {
    const { IMAGES } = useTheme();
    const [expanded, setExpanded] = useState(false);

    return (
        <MAccordion
            icon={false}
            expanded={expanded}
            style={AFourStyles.container}
            headerStyle={{ height: 85 }}
            onPress={() => setExpanded((p) => !p)}>
            <MAccordion.Header>
                <View style={[AFourStyles.row, { paddingHorizontal: 18 }]}>
                    <View style={{ flex: 1, paddingHorizontal: 12 }}>
                        <MCheckBox
                            iconSize={16}
                            iconName="circle"
                            iconColor="black"
                            activeBorderColor="black"
                            deActiveBorderColor="gray"
                            isChecked={expanded}
                            activeBackgroundColor="white"
                            iconContainerStyle={{ borderRadius: 16 }}>
                            Select an item
                        </MCheckBox>
                    </View>
                </View>
            </MAccordion.Header>
            <MAccordion.Content>
                <View style={{ paddingHorizontal: 18, paddingBottom: 18 }}>
                    <View style={AFourStyles.divider} />
                    <MText textStyle={{ fontSize: 18 }}>
                        When one door of happiness closes another opens but
                        often we look so long at the closed door that we do not
                        see the one that has been opened for us.
                    </MText>
                </View>
            </MAccordion.Content>
        </MAccordion>
    );
};
const AFourStyles = StyleSheet.create({
    container: {
        margin: 12,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    divider: {
        marginBottom: 16,
        borderColor: '#e5e5e5',
        borderWidth: StyleSheet.hairlineWidth,
    },
});
