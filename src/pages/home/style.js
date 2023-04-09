import styled from "styled-components";

export const HomeBg = styled.div`
 background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height:400px;
  object-fit: contain;
  padding: 0px 100px;
  margin-top: 63px;
  @media (max-width: 768px) {
    height: 200px ;
    padding: 0px 15px;
    margin-top:0;
  }
`

export const BannerText = styled.div`
display: flex;
align-self: center;
justify-content: space-between;
padding: 15px 0px;
 @media (max-width: 768px) {
display: flex;
justify-content: space-between;
align-items: center;
color: white;
 }

h1{
    color: #fff;
    font-size:2.5rem ;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        width: 80%;
    }
  
}
.select_location{
    position: relative;
    padding: 0px 0px 0px 20px;
    @media (max-width: 768px) {
        width: 20%;
    }
  
    .location_icon{
        position: absolute;
        left: 0;
        top: 5px;
        color: red;
        font-size: 1.3rem;
        @media (max-width: 768px) {
        left: 0;
        top: 4px;
        
        }
       
    }
}
`

export const SearchWrapper = styled.div`
border-radius: 50px;
padding: 6px 20px 6px 45px;
background-color: white;
position: relative;
margin-top: 50px;
@media (max-width: 768px) {
    margin-top: 20px;   
}

.search_input{
}

.icon_location{
        position: absolute;
        left: 10px;
        top: 13px;
    }
.search_wrapper{
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    position: absolute;
    right: 10px;
    top: 8px;
    .search{
        color: white;
    }
}
`

export const ContentWrapper = styled.div`
width: 90%;
margin: auto;
position: relative;
top: -50px;
background: #fff;
border-radius: 30px 30px 0px 0px;
padding: 10px 30px;
@media (max-width: 768px) {
    width: 100%;
    padding: 0px 0px;
}
h1{
    font-weight: bold;
}
.destination_section {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    position: relative;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (max-width: 768px) {
        padding:0px 3px;
    }
}
.carousel_wrapper{
    height: 400px;
    margin: 60px 0px;
    border-radius:10px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.33);
    img{
        height: 400px; 
        object-fit: cover;
        border-radius:10px;
        @media (max-width: 768px) {
            height: 130px;
        }
    }
    @media (max-width: 768px) {
        width: 95%;
        margin: auto;
        margin-top:15px;
        margin-bottom:15px;
        height: 130px;
    }
}

`

export const Destination = styled.div`
  height: 100px;
  width: 300px;
  margin:0px 5px;
 
  img{
  width: 300px;
  border-radius: 15px 15px 0px 0px;
  object-fit: cover;
  }
`
