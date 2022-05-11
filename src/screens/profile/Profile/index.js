import { MText } from 'components/common';
import { createScreen } from 'components/elements';
import ConfigItem from 'components/elements/ConfigItem';
import { SectionTop01 } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const profile = createScreen(
    (props) => {
        const {
            COMMON
        } = useTheme();

        return (
            <View style={styles.profile}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <SectionTop01 style={COMMON.Eleprofile326} navigation={props.navigation}/>
                        <ConfigItem text="Complete setup" 
                        onPress={()=> props.navigation.navigate('Signupstep2')}/>
                        <ConfigItem
                            text={'History'}
                            onPress={() => {
                                props.navigation.navigate('ProfileFavorite',{title: 'History'});
                            }}
                        />
                        <ConfigItem
                            text={'Favorite'}
                            onPress={() => {
                                props.navigation.navigate('ProfileFavorite',{title: 'Favorite'})
                            }}
                        />
                        <ConfigItem
                            text={'Program Benefits'}
                            onPress={() => {
                                props.navigation.navigate('ProfileProgramBenefits');
                            }}
                        />
                        <ConfigItem
                            text={'Member Support'}
                            onPress={() => {
                                props.navigation.navigate('ProfileMemberSupport');
                            }}
                        />
                        <View style={{ height: '2%' }} />
                        <MText textStyle={COMMON.Txtprofile342}>
                            Personalize your travel{' '}
                        </MText>
                        <ConfigItem
                            text={'Room Preference'}
                            onPress={() => {
                                props.navigation.navigate('ProfileRoomPreference');
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    profile: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default profile;
