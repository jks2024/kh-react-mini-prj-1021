import axios from "axios";
const HEADER = 'application/json';
const KH_DOMAIN = "http://localhost:8100/kh_mini_ex/";

const KhApi = {
    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(KH_DOMAIN + "LoginServlet", loginObj, HEADER);
    },
    // 회원 정보 조회
    memberInfo: async function(id) {
        const regCmd = {
            cmd : "MemberInfo",
            id : id 
        }
        return await axios.post(KH_DOMAIN + "MemberServlet", regCmd, HEADER);
    },
    // 회원 가입
    memberReg: async function(id, pwd, name, mail) {
        const memberObj = {
            id: id,
            pwd: pwd,
            name: name,
            mail: mail
        };
        return await axios.post(KH_DOMAIN + "MemberRegServlet", memberObj, HEADER);
    },
    // 회원 가입 여부 확인
    memberRegCheck: async function(id) {
        const regCheck = {
            id: id,
        }
        return await axios.post(KH_DOMAIN + "MemberCheck", regCheck, HEADER);
    },
    memberDelete: async function(id) {
        const regCheck = {
            id: id,
        }
        return await axios.post(KH_DOMAIN + "MemberDeleteServlet", regCheck, HEADER);
    }
}

export default KhApi;