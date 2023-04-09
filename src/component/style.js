import styled from "styled-components";

export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
h1{
font-weight: bold;
font-size: 1.3rem;
}
span{
    display: flex;
    align-items: center;
    gap: 5px;
    color: #333;
    opacity: 0.3;
    cursor: pointer;
}
@media (max-width: 768px) {
    margin-bottom:10px;
    padding: 9px 15px;
}
`

export const DestinationContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 150px;
padding:0px 15px 0px 0px;
cursor: pointer;
@media (max-width: 768px) {
    width: 70px; 
    padding:0px 5px;
}

.img_container{
    img{
        border-radius: 50%;
        object-fit: cover;
        width: 150px;
        height: 150px;
        @media (max-width: 768px) {
            width: 70px;
            height: 70px;
        }
    }
}
`

export const ProvidersWrapper = styled.div`
margin: 0px 7px;
img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
}
`