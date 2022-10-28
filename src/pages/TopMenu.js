import styled from 'styled-components';


const TopMenu = () => {

    const TopMenuContainer = styled.div`
        display: flex;
        width: auto;
        position: fixed;
        bottom: 0;
        width: 100%;
        justify-content: space-around;
    `;

    const TopMenuBtn = styled.button`
        width: 100px;
        height: 100px;
        margin: 2px;
        background-color: orange;
        color: white;
    `;

    const onClickHome = () => {
        window.location.replace("/home");
    }
    const onClickInfo = () => {
        window.location.replace("/MemberInfo");
    }

    return (
        <TopMenuContainer>
            <TopMenuBtn onClick={onClickHome}>Home</TopMenuBtn>
            <TopMenuBtn onClick={onClickInfo}>Info</TopMenuBtn>
            <TopMenuBtn>Button3</TopMenuBtn>
            <TopMenuBtn>Button4</TopMenuBtn>
        </TopMenuContainer>
    );
}
export default TopMenu;