import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    MIcon,
    MText,
    MInput,
    MModal,
    MButton,
    MOnboarding,
} from 'components/common';

export const MShowCaseOne = () => (
    <MModal
        opener={<MButton text="Open Modal 1" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseOneStyles.body}>
                    <MText color="#fff" textStyle={MShowCaseOneStyles.title}>
                        Notification Title
                    </MText>
                    <MText color="#ccc" textStyle={MShowCaseOneStyles.content}>
                        Before we start, remember that you can never cross the
                        ocean until you have the courage to lose sight of the
                        shore.
                    </MText>
                </View>
            );
        }}
    </MModal>
);

const MShowCaseOneStyles = StyleSheet.create({
    body: {
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
});

export const MShowCaseTwo = () => (
    <MModal
        opener={<MButton text="Open Modal 2" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseTwoStyles.body}>
                    <MText color="#fff" textStyle={MShowCaseTwoStyles.title}>
                        Hold on!
                    </MText>
                    <MText color="#ccc" textStyle={MShowCaseTwoStyles.content}>
                        Before we start, remember that you can never cross the
                        ocean until you have the courage to lose sight of the
                        shore.
                    </MText>
                    <View style={MShowCaseTwoStyles.actions}>
                        <MButton
                            text="Skip"
                            color="#6560fa"
                            onPress={handleClose}
                            textStyle={{ fontSize: 16 }}
                            style={MShowCaseTwoStyles.button}
                        />
                        <MButton
                            text="Next"
                            color="#69c7de"
                            onPress={handleClose}
                            textStyle={{ fontSize: 16 }}
                            style={MShowCaseTwoStyles.button}
                        />
                    </View>
                </View>
            );
        }}
    </MModal>
);

const MShowCaseTwoStyles = StyleSheet.create({
    body: {
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
    actions: {
        marginTop: 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        borderRadius: 12,
        paddingHorizontal: 16,
    },
});

export const MShowCaseThree = () => (
    <MModal
        opener={<MButton text="Open Modal 3" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseThreeStyles.body}>
                    <MOnboarding
                        height={300}
                        getStartButton={
                            <View style={MShowCaseThreeStyles.nextButton}>
                                <MIcon color="#fff" name="checkmark" />
                            </View>
                        }
                        onFinish={handleClose.bind(null, false)}
                        prevButton={
                            <View style={MShowCaseThreeStyles.prevButton}>
                                <MIcon color="#fff" name="arrow-back" />
                            </View>
                        }
                        nextButton={
                            <View style={MShowCaseThreeStyles.nextButton}>
                                <MIcon color="#fff" name="arrow-forward" />
                            </View>
                        }
                        nextButtonStyle={{ bottom: 0, right: 0 }}
                        prevButtonStyle={{ bottom: 0, right: 55 }}
                        paginationStyle={{
                            left: 0,
                            right: null,
                            position: 'absolute',
                        }}>
                        <View>
                            <MText
                                color="#fff"
                                textStyle={MShowCaseThreeStyles.title}>
                                Tutorial
                            </MText>
                            <MText
                                color="#ccc"
                                textStyle={MShowCaseThreeStyles.content}>
                                Before we start, remember that you can never
                                cross the ocean until you have the courage to
                                lose sight of the shore.
                            </MText>
                        </View>
                        <View>
                            <MText
                                color="#fff"
                                textStyle={MShowCaseThreeStyles.title}>
                                Tutorial
                            </MText>
                            <MText
                                color="#ccc"
                                textStyle={MShowCaseThreeStyles.content}>
                                Before we start, remember that you can never
                                cross the ocean until you have the courage to
                                lose sight of the shore.
                            </MText>
                        </View>
                        <View>
                            <MText
                                color="#fff"
                                textStyle={MShowCaseThreeStyles.title}>
                                Tutorial
                            </MText>
                            <MText
                                color="#ccc"
                                textStyle={MShowCaseThreeStyles.content}>
                                Before we start, remember that you can never
                                cross the ocean until you have the courage to
                                lose sight of the shore.
                            </MText>
                        </View>
                        <View>
                            <MText
                                color="#fff"
                                textStyle={MShowCaseThreeStyles.title}>
                                Tutorial
                            </MText>
                            <MText
                                color="#ccc"
                                textStyle={MShowCaseThreeStyles.content}>
                                Before we start, remember that you can never
                                cross the ocean until you have the courage to
                                lose sight of the shore.
                            </MText>
                        </View>
                    </MOnboarding>
                </View>
            );
        }}
    </MModal>
);

const MShowCaseThreeStyles = StyleSheet.create({
    body: {
        height: 200,
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
    actions: {
        marginTop: 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    nextButton: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#69c7de',
    },
    prevButton: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#495062',
    },
    icon: {
        width: 25,
        fontSize: 26,
    },
});

export const MShowCaseFour = () => (
    <MModal
        opener={<MButton text="Open Modal 4" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseFourStyles.body}>
                    <MText color="#fff" textStyle={MShowCaseFourStyles.title}>
                        Confirm?
                    </MText>
                    <MText color="#ccc" textStyle={MShowCaseFourStyles.content}>
                        Before we start, remember that you can never cross the
                        ocean until you have the courage to lose sight of the
                        shore.
                    </MText>
                    <View style={MShowCaseFourStyles.actions}>
                        <MButton
                            color="#b84fe4"
                            onPress={handleClose}
                            style={MShowCaseFourStyles.button}
                            iconTop={{
                                name: 'close-outline',
                                style: MShowCaseFourStyles.icon,
                            }}
                        />
                        <MButton
                            color="#69c7de"
                            onPress={handleClose}
                            style={MShowCaseFourStyles.button}
                            iconTop={{
                                name: 'checkmark',
                                style: MShowCaseFourStyles.icon,
                            }}
                        />
                    </View>
                </View>
            );
        }}
    </MModal>
);

const MShowCaseFourStyles = StyleSheet.create({
    body: {
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
    actions: {
        marginTop: 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 40,
        paddingHorizontal: 16,
    },
    icon: {
        width: 25,
        fontSize: 26,
    },
});

export const MShowCaseFive = () => (
    <MModal
        opener={<MButton text="Open Modal 5" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseFiveStyles.body}>
                    <MText color="#fff" textStyle={MShowCaseFiveStyles.title}>
                        Are you sure?
                    </MText>
                    <MText color="#ccc" textStyle={MShowCaseFiveStyles.content}>
                        Before we start, remember that you can never cross the
                        ocean until you have the courage to lose sight of the
                        shore.
                    </MText>
                    <View style={MShowCaseFiveStyles.actions}>
                        <MButton
                            text="YES"
                            color="#69c7de"
                            onPress={handleClose}
                            textStyle={{ fontSize: 16 }}
                            style={MShowCaseFiveStyles.button}
                        />
                        <MButton
                            text="MAYBE"
                            color="#6560fa"
                            onPress={handleClose}
                            textStyle={{ fontSize: 16 }}
                            style={MShowCaseFiveStyles.button}
                        />
                        <MButton
                            text="CANCEL"
                            color="gray"
                            onPress={handleClose}
                            textStyle={{ fontSize: 16 }}
                            style={MShowCaseFiveStyles.button}
                        />
                    </View>
                </View>
            );
        }}
    </MModal>
);

const MShowCaseFiveStyles = StyleSheet.create({
    body: {
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
    actions: {
        marginTop: 18,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    button: {
        borderRadius: 12,
        paddingHorizontal: 16,
    },
});

export const MShowCaseSix = () => (
    <MModal
        opener={<MButton text="Open Modal 6" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseSixStyles.body}>
                    <MIcon
                        size={24}
                        name="close"
                        color="#fff"
                        style={MShowCaseSixStyles.close}
                    />
                    <MIcon
                        size={24}
                        name="trash"
                        color="#fff"
                        style={MShowCaseSixStyles.trash}
                    />
                    <MText color="#fff" textStyle={MShowCaseSixStyles.title}>
                        Notification Title
                    </MText>
                    <MText color="#ccc" textStyle={MShowCaseSixStyles.content}>
                        Before we start, remember that you can never cross the
                        ocean until you have the courage to lose sight of the
                        shore.
                    </MText>
                </View>
            );
        }}
    </MModal>
);

const MShowCaseSixStyles = StyleSheet.create({
    body: {
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
    trash: {
        alignSelf: 'flex-start',
    },
    close: {
        top: 8,
        right: 8,
        position: 'absolute',
    },
});

export const MShowCaseSeven = () => {
    const buttons = [
        { id: 1, title: 'Facebook', icon: 'logo-facebook' },
        { id: 2, title: 'Instagram', icon: 'logo-instagram' },
        { id: 3, title: 'Copy Link', icon: 'copy' },
    ];
    return (
        <MModal
            animationType="slide"
            backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            wrapperStyle={{ justifyContent: 'flex-end' }}
            opener={
                <MButton tex2t="Open Modal 7" style={{ marginVertical: 8 }} />
            }>
            {({ handleClose }) => {
                return (
                    <View style={MShowCaseSevenStyles.body}>
                        <View style={MShowCaseSevenStyles.indicator} />
                        <MText
                            color="#fff"
                            textStyle={MShowCaseSevenStyles.title}>
                            Sharing this post via:
                        </MText>
                        <View>
                            <View style={MShowCaseSevenStyles.actions}>
                                {buttons.map((item) => (
                                    <MButton
                                        transparent
                                        textStyle={
                                            MShowCaseSevenStyles.actionText
                                        }
                                        key={item.id}
                                        text={item.title}
                                        iconTop={{
                                            size: 32,
                                            color: 'white',
                                            name: item.icon,
                                        }}
                                        style={MShowCaseSevenStyles.button}
                                    />
                                ))}
                            </View>
                            <MButton
                                transparent
                                text="Cancel"
                                onPress={handleClose}
                                style={MShowCaseSevenStyles.cancel}
                                textStyle={MShowCaseSevenStyles.actionText}
                            />
                        </View>
                    </View>
                );
            }}
        </MModal>
    );
};

const MShowCaseSevenStyles = StyleSheet.create({
    body: {
        width: '100%',
        paddingTop: 8,
        borderRadius: 16,
        paddingBottom: 50,
        paddingHorizontal: 25,
        alignSelf: 'flex-end',
        backgroundColor: '#2f3244',
    },
    indicator: {
        width: 50,
        height: 5,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'gray',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 25,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
    },
    cancel: {
        height: 58,
        marginTop: 12,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
});

export const MShowCaseEight = () => (
    <MModal
        opener={<MButton text="Open Modal 8" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseEightStyles.body}>
                    <MText color="#fff" textStyle={MShowCaseEightStyles.title}>
                        Share Route
                    </MText>
                    <MButton
                        transparent
                        text="Facebook"
                        iconLeft={{
                            color: '#fff',
                            name: 'logo-facebook',
                            style: { position: 'absolute', left: 12 },
                        }}
                        onPress={handleClose}
                        style={[
                            MShowCaseEightStyles.button,
                            { backgroundColor: '#5d73fa' },
                        ]}
                        textStyle={MShowCaseEightStyles.actionText}
                    />
                    <MButton
                        transparent
                        text="Twitter"
                        iconLeft={{
                            color: '#fff',
                            name: 'logo-twitter',
                            style: { position: 'absolute', left: 12 },
                        }}
                        onPress={handleClose}
                        style={[
                            MShowCaseEightStyles.button,
                            { backgroundColor: '#5294f8' },
                        ]}
                        textStyle={MShowCaseEightStyles.actionText}
                    />
                    <MButton
                        transparent
                        text="Send"
                        onPress={handleClose}
                        style={MShowCaseEightStyles.button}
                        textStyle={MShowCaseEightStyles.actionText}
                    />
                    <MButton
                        transparent
                        text="Cancel"
                        onPress={handleClose}
                        style={[
                            MShowCaseEightStyles.button,
                            { backgroundColor: '#495062' },
                        ]}
                        textStyle={MShowCaseEightStyles.actionText}
                    />
                </View>
            );
        }}
    </MModal>
);

const MShowCaseEightStyles = StyleSheet.create({
    body: {
        padding: 24,
        width: '85%',
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 26,
    },
    content: {
        fontSize: 18,
        textAlign: 'center',
    },
    close: {
        top: 12,
        right: 12,
        height: 24,
        aspectRatio: 1,
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
    },
    button: {
        height: 50,
        marginTop: 12,
        borderRadius: 14,
        justifyContent: 'center',
        backgroundColor: '#69c7de',
    },
});

export const MShowCaseNine = () => (
    <MModal
        opener={<MButton text="Open Modal 9" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseNineStyles.body}>
                    <MIcon
                        size={16}
                        name="close"
                        color="#fff"
                        style={MShowCaseNineStyles.close}
                    />
                    <MText color="#fff" textStyle={MShowCaseNineStyles.title}>
                        Forgot Password?
                    </MText>
                    <MText color="#ccc" textStyle={MShowCaseNineStyles.content}>
                        Enter the email associated with your account and we'll
                        send a link to reset your password.
                    </MText>
                    <MInput
                        textColor="#fff"
                        placeholder="Email"
                        containerStyle={{ borderRadius: 14 }}
                        backgroundColor="rgba(255,255,255,0.1)"
                    />
                    <MButton
                        transparent
                        text="Send"
                        onPress={handleClose}
                        style={MShowCaseNineStyles.cancel}
                        textStyle={MShowCaseNineStyles.actionText}
                    />
                </View>
            );
        }}
    </MModal>
);

const MShowCaseNineStyles = StyleSheet.create({
    body: {
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
    },
    content: {
        fontSize: 18,
        textAlign: 'center',
    },
    close: {
        top: 12,
        right: 12,
        height: 24,
        aspectRatio: 1,
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
    },
    cancel: {
        marginTop: 12,
        borderRadius: 14,
        backgroundColor: '#69c7de',
    },
});

export const MShowCaseTen = () => (
    <MModal
        opener={<MButton text="Open Modal 10" style={{ marginVertical: 8 }} />}
        backdrop={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {({ handleClose }) => {
            return (
                <View style={MShowCaseOneStyles.body}>
                    <MIcon name="checkmark-circle" color="#69c7de" size={200} />
                    <MText color="#fff" textStyle={MShowCaseTenStyles.title}>
                        You've got mail !
                    </MText>
                    <MText color="#ccc" textStyle={MShowCaseTenStyles.content}>
                        We have sent a password recover link to your email.
                    </MText>
                </View>
            );
        }}
    </MModal>
);

const MShowCaseTenStyles = StyleSheet.create({
    body: {
        margin: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#2f3244',
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
    },
    content: {
        fontSize: 18,
        textAlign: 'center',
    },
});
