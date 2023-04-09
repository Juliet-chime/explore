import styled from "styled-components";

export const DetailWrapper = styled.div`
    border-radius:10px 10px 0px 0px;
.detail_carousel_wrapper{
    height: 350px;
    img{
        height: 350px; 
        object-fit: cover;
    }  
}
.details_text_wrapper{
        padding: 50px;
        background:#F1F1F1;
    @media (max-width: 768px) {
        padding: 15px;
    }  
        .rating_wrapper{
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding: 5px 0px;
        border-bottom:1px solid rgba(178, 190, 181, 0.3);
        .location{
            display: flex;
        align-items: center;
        gap: 7px;  
        span{
            color: #333;
            opacity: 0.3;
            font-size: 12px;
            font-weight: bold;
        }      
        }
        .rating{
            display: flex;
        align-items: center;
        gap: 10px;
        span{
            color: 000;
            font-weight: bold;
            font-size:18px;
        }
        }
    }
    .details_info_wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info_name{
        display: flex;
        gap: 10px;
        align-items: center;
        .info_img{
            width: 40px;
            height:40px;
            img{
            width: 40px;
            height:40px;
            border-radius: 100%;
            object-fit:cover;
            }
        }
        
    }
    .title{
          font-size: 18px;
          font-weight:bold;
          color: #000;
        }
        .subtitle{
            font-size: 12px;
            color: #333; 
            opacity: 0.5;
        }
    }
    .destination_duration{
        width: 90%;
        padding:5px 15px;
        margin: auto;
        margin-top:20px;
        border-radius: 30px 30px 0px 0px;
        background: #fff;
    }
    }
    
`

export const DetailTextWrapper = styled.div`
display: flex;
align-items: center;
.tourist_place{
flex: 1;
h1{
    font-size:18px;
}
}
.tourist_price{
    text-align: right;
    .price{
        font-size: 20px;
        font-weight: bold;
        color: red;
    }
    .person{
        color: #333;
        font-weight:bold;
        opacity: 0.7;
        .person_rule{
            text-decoration: line-through;
            opacity: 0.3;
        }
    }
}
`

export const DetailsStyle = {
    padding: '12px 0px',
    borderBottom: '1px solid rgba(178, 190, 181, 0.3)'
}