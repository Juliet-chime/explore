import styled from "styled-components";

export const NavbarWrapper = styled.div`
position: fixed;
background: #fff;
padding: 10px 0px;
right: 0;
left: 0;
top: 0;
z-index: 9999;
@media (max-width: 768px) {
    top: auto;
    bottom: 0;
    padding: 10px;
}
ul{
    display: flex;
    list-style: none;
    padding: 0;
    width: 50%;
    margin: auto;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
    }
    li{
        a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        text-decoration: none;
        font-size: 1rem;
        transition: all ease-in-out;
        &:hover{
            font-size: 1.1rem;
        }
        }
        .active{
color: red;
        }
    }
}
`