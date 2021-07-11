import axios from "axios";
export const loginRequest = async (data) => {
    console.log(data);
    try {
        const { data: res } = await axios.post("https://reqres.in/api/login", data);
        return res;
    }
    catch (e) {
        return {
            status: false, message: e.message
        };
    }
}