import axios from 'axios';
const Api = {
    async getInfo(id) {
        console.log(`${process.env.REACT_APP_DOMAIN_BACKEND}/infomation?id=${id}`);
        var data = await axios.get(`${process.env.REACT_APP_DOMAIN_BACKEND}/infomation?id=${id}`);
        return data;
    },
    async getDescription(id) {
        console.log(`${process.env.REACT_APP_DOMAIN_BACKEND}/description?id=${id}`);
        var data = await axios.get(`${process.env.REACT_APP_DOMAIN_BACKEND}/description?id=${id}`);
        return data;
    },
    async getContact(id) {
        console.log(`${process.env.REACT_APP_DOMAIN_BACKEND}/contact?id=${id}`);
        var data = await axios.get(`${process.env.REACT_APP_DOMAIN_BACKEND}/contact?id=${id}`);
        return data;
    },
};

export default Api;
