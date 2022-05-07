import {api} from "./api";

const t4Api = {
    login: (params) => {
        const url = "login";
        return api.post(url, params)
    },
    serverAuth: (params) => {
        const url = "server-auth";
        return api.post(url, params)
    }
};

export default t4Api;