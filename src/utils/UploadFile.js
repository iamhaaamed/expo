import React from "react";
import { showMessage } from "react-native-flash-message";
import { Platform } from "react-native";
import RNFetchBlob from 'rn-fetch-blob';
import uuid from 'react-native-uuid';
const sasContainerUri = 'https://apsgenueshotelstorage.blob.core.windows.net';
const container = 'images';
const sasToken =
    'sp=racwdli&st=2022-04-13T07:43:46Z&se=2032-04-13T15:43:46Z&spr=https&sv=2020-08-04&sr=c&sig=yN46xs2BYGrTfZlbborynBMtZ2nvqg%2B0%2FDyYtieFn8o%3D'; // you may need to play with other html verbs in this string e.g., `sp`, `ss` e.t.c.

export const UploadFile = async (response) => {
    try {
    var customBlobName = uuid.v4();
    console.log("generated blob"+customBlobName)
    const assetPath = `${sasContainerUri}/${container}/${customBlobName}`;
    return new Promise(async (resolve, reject) => {
        try {
            const sourceUrl = response?.sourceURL || response?.path || response?.uri;
            console.log("uri is" + sourceUrl)
            const localUri =
                Platform.OS === 'ios' ? sourceUrl.replace('file://', '/') : sourceUrl;
            console.log('response.mime', response.type);
            const res = await RNFetchBlob.fetch(
                'PUT',
                `${assetPath}?${sasToken}`,
                {
                    'x-ms-blob-type': 'BlockBlob',
                    'content-type': 'application/octet-stream',
                    'x-ms-blob-content-type': response.type,
                },
                RNFetchBlob.wrap(localUri),
            );
            console.log("response is" + JSON.stringify(res?.respInfo?.redirects?.[0]))
            if (res.respInfo.status === 201) {
                resolve({ ...res, 
                    uploadedUrl: res?.respInfo?.redirects?.[0].replace(sasContainerUri+"/"+container+"/","") });
            }
        } catch (error) {
            console.log(error, 'error');
            showMessage({
                message: JSON.stringify(error),
                type: 'danger',
            });
            reject(error);
        }
    });
        
    } catch (error) {
        console.log("errr"+error)
    }
};
