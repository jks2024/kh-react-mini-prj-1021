import { useState, useEffect } from 'react';
import KhApi from '../api/khApi'

const MemberDetail = () => {
    const getDetail = window.localStorage.getItem("Detail");
    const [memberDetail, setMemberDetail] = useState("");

    useEffect(() => {
        const memberData = async () => {

            try {
                const response = await KhApi.memberInfo(getDetail); // 전체 회원 조회
                setMemberDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        memberData();
    }, []);

    return (
        <div>
           {memberDetail && memberDetail.map(member => (
            <div key={member.id}>
                <p>{member.id}</p>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.join}</p>
            </div>
            
        ))}
        </div>
    )

}
export default MemberDetail;