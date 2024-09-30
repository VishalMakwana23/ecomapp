import { Alert } from 'react-native';
import { Config, Constants } from '../common';
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';

export const APIService = async (url: string, method: any, search: any, payload: any) => {
    let client = axios.create({
        baseURL: Config.defaultUrl
    });
    let contentType = payload && payload.constructor === FormData ? 'multipart/form-data' : 'application/json'
    let cancel;
    try {
        const { isConnected, details } = await NetInfo.fetch();
        if (!isConnected && details?.strength < 15) {
            Alert.alert(Constants.APPNAME, "Please check your internet connection or Your internet connection is too slow")
        } else {
            let response;
            let headers = (global?.authToken != null && global?.authToken !== undefined) ? {
                Accept: 'application/json',
                'Cache-Control': 'no-cache',
                'Content-type': contentType,
                'Authorization': global?.authToken
            } : {
                Accept: 'application/json',
                'Cache-Control': 'no-cache',
                'Content-type': contentType
            }
            if (method == 'post') {
                response = await client.post(url, payload, { headers: headers });
            } else if (method == 'get') {
                if (search) {
                    if (cancel) {
                        cancel.cancel("request is cancel!");
                    }
                    cancel = axios.CancelToken.source();
                    response = await axios.get(url, { cancelToken: cancel.token, headers: headers });
                } else {
                    response = await client.get(url, { headers: headers });
                }
            }
            return response;
        }
    }
    catch (error) {
        return error.response;
    }
};