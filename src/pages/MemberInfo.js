import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MemberInfo = () => {
    const [memberInfo, setMemberInfo] = useState('');
    const [loading, setLoading] = useState(false);

    const MemberListBlock = styled.div`
        box-sizing: border-box;
        padding-bottom: 3em;
        width: 768px;
        margin: 0 auto;
        margin-top: 2rem;
        @media screen and (max-width: 768px) {
            witdh: 100%;
            padding-left: 1em;
            padding-right:1em;
        }
    `;

    const MemberList = styled.table`
        border-collapse: collapse;
        width: 768px;
        margin: 0 auto;
        font-size: 1.125em;
        @media screen and (max-width: 768px) {
            witdh: 100%;
        }
        th, td {
            border:1px solid #ccc;
            padding: 2px;
        }
        th {
            background-color: bisque;
        }
    `;

    const MemberTitle = styled.table`
        font-size: 2em;
        text-align: center;
    `;

    const regCmd = {
        cmd : "MemberInfo"
    }


    useEffect(() => {
        
        const memberData = async () => {
            setLoading(true);
            try {
                regCmd.cmd = "MemberInfo";
                const response = await axios.post("http://localhost:8111/jdbc_test/member",  regCmd, 'application/json');
                setMemberInfo(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        memberData();
    }, []);

    if(loading) {
        return <MemberListBlock>대기 중...</MemberListBlock>
    }

    return(
        <MemberListBlock>
            <MemberList>
                <MemberTitle>회원 정보</MemberTitle>
                <tr>
                    <th>아이디</th><th>이름</th><th>이메일</th><th>가입일</th>
                </tr>
                {memberInfo && memberInfo.map(member => (
                    <tr key={member.id}>
                        <td>{member.id}</td><td>{member.name}</td><td>{member.email}</td><td>{member.join}</td>
                    </tr>
                ))}
            </MemberList>
        </MemberListBlock>
    );
}
export default MemberInfo;