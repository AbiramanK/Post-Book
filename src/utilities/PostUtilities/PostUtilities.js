import {
    RTSuccess,
    RTError
} from './../NotificationUtilities/NotificationUtilities';

export const handlePost = async (response) => {
    try {
        return response.json()
            .then((res) => {
                // if (res.STATUS == "Success") {
                if (res.status === "success") {

                    return res;
                } else {
                    RTError(res.message)
                }
            })
            .catch((e) => {
                console.log("login response catch", e);
            })
            .finally(() => {
            })
    } catch (error) {
        RTError(error.message);
    }
}
 

export const handleCatch = (e) => {
    try {
        console.log("catch error", e)
        RTError(e.message);
    } catch (error) {
    }
}