import axios from "axios";
const HEADER = 'application/json';
const KH_DOMAIN = "http://localhost:8090/jdbc_test/MemberReg";

const KhApi = {
    userLogin: async function(id, pw) {
        let bodyContent = "test";
        return await axios.post(KH_DOMAIN, bodyContent, 'application/json');
    },
    memberInfo: async function() {
        let bodyContent = {

        }
        let reqOption = {url: KH_DOMAIN, method: "POST", Headers:HEADER, data: bodyContent}
        return await axios.request(reqOption);
    }


}

export default KhApi;