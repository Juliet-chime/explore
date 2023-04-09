import React from 'react'
import { islandData } from '../../component/navbar/data'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DetailWrapper, DetailsStyle } from './style';
import DetailsText from './DetailsText';
import { MdLocationOn } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import man from '../../assest/images/man1.jpeg'
import DetailsInfo from './DetailsInfo';
import { RiCalendar2Line } from 'react-icons/ri';
import { GiPerson } from 'react-icons/gi'


const DetailsPage = () => {
    return (
        <DetailWrapper>
            <div className='detail_carousel_wrapper'>
                <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
                    {islandData?.map((image, index) => (
                        <img src={image.img} alt="" />
                    ))}
                </Carousel>
            </div>
            <div className='details_text_wrapper'>
                <DetailsText title='The Best of Pattaya & Bankok' price='$12,356' discount='$18,500' />
                <div className='rating_wrapper'>
                    <div className='location'>
                        <MdLocationOn fontSize={20} color='red' />
                        <span>Thailand Barie cock</span>
                    </div>
                    <div className='rating'>
                        <AiFillStar fontSize={18} color='#FFDF00' />
                        <span>4.2</span>
                    </div>
                </div><br />
                <DetailsInfo image={man} title='Jack Smith' subtitle='10th March 2022' />
                <div className='destination_duration'>
                    <DetailsInfo Icon={MdLocationOn} title='Start At' subtitle='Delhi' arrow endText='End At' endTextTitle='GOA' style={{ ...DetailsStyle, padding: "12px 30px 12px 0px" }} />
                    <DetailsInfo Icon={RiCalendar2Line} title='Duration' subtitle='5 Nights 6 days' style={DetailsStyle} />
                    <DetailsInfo Icon={GiPerson} title='Physical Rating' subtitle='6 days' style={{ ...DetailsStyle, borderBottom: 'none' }} />
                </div>
            </div>
        </DetailWrapper>
    )
}

export default DetailsPage