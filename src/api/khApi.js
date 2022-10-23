import axios from "axios";
const HEADER = 'application/json';
const KH_DOMAIN = "http://localhost:8111/jdbc_test/";

const KhApi = {
    
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(KH_DOMAIN + "LoginServlet", loginObj, HEADER);
    },
    memberInfo: async function() {
        const regCmd = {
            cmd : "MemberInfo"
        }
        return await axios.post(KH_DOMAIN + "member", regCmd, HEADER);
    },
    memberReg: async function(id, pwd, name, mail) {
        const memberObj = {
            id: id,
            pwd: pwd,
            name: name,
            phone: mail
        };
        return await axios.post(KH_DOMAIN+"memberReg", memberObj, HEADER);
    }

}

export default KhApi;