import { Spinner } from 'components/common';
import { DirectLine } from 'botframework-directlinejs';
import React, {useEffect} from 'react';
import { View } from 'react-native';
const LoadingPage= ({navigation})=>{
    const directLine = new DirectLine({
        secret: 'yv4oJpBHBMk.Px5NDYymTr02dCEiBT6exb2PztOjZQVGO9i_NXuHn_I',
    });
    useEffect(() => {
        if(directLine)
            navigation.navigate('ChatBotPage',{directLine: directLine});
    },[directLine])
    return(
        <View>
            <Spinner/>
        </View>
    )
}
export default LoadingPage;