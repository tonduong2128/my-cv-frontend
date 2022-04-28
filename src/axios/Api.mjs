import axios from "axios"
const Api = {
    async getInfo(id) {
        var data = await axios.get(`http://localhost:3000/infomation?id=${ id }`);
        return data;
    },
    async getDescription(id) {
        var data = await axios.get(`http://localhost:3000/description?id=${ id }`);
        return data;
    },
    async getContact(id) {
        var data = await axios.get(`http://localhost:3000/contact?id=${ id }`);
        return data;
    }
}
export default Api;