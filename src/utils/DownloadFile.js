import RNFetchBlob from 'rn-fetch-blob';
import { Config } from 'react-native-config';
import { StoreData } from './StoreData';
export const DownloadFile = async (fileToDl) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await RNFetchBlob
                .config({
                    appendExt: 'wav',
                    fileCache: true,
                })
                .fetch('GET', Config.FILE_URL + fileToDl, {
                    //some headers ..
                });
            if (res.respInfo.status === 200) {
                console.log('The file saved to ', JSON.stringify(res))
                await StoreData('SCAN_VOICE_PATH', res.path());
                resolve({ ...res, path: res.path() });
            }
            else reject({error:'error'});
        } catch (e) {
            reject(e)
        }

    });
}