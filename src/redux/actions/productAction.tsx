import { Alert } from "react-native"
import { APIService } from "../../services/api"
import { Constants } from "../../common"
import { getProductsFailed, getProductsSuccess, setLoading } from "../reducers/productsSlice"

export const getProducts = () => {
    try {
        return async (dispatch: any) => {
            dispatch(setLoading(true))
            const response = await APIService(`products`, 'get', false, "")
            if (response.status === 200) {
                dispatch(getProductsSuccess(response.data))
            }
            else {
                dispatch(getProductsFailed(Constants.ERROR_MESSAGE))
            }
        }
    } catch (err) {
        console.log("error in get Products", err)
        Alert.alert(Constants.APPNAME, Constants.ERROR_MESSAGE)
    }
}
