import {api} from "./api";

const t4Api = {
    login: (params) => {
        const url = "login";
        return api.post(url, {params: params})
    }
};

export default t4Api;