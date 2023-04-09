import React, { useState } from 'react'
import island1 from '../../assest/images/island1.jpg'
import { BannerText, ContentWrapper, Destination, HomeBg, SearchWrapper } from './style'
import { MdLocationOn } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import CustomField from '../../component/input/CustomField';
import Navbar from '../../component/navbar/Navbar';
import Heading from '../../component/Heading';
import { bannerImg, departing, destination, providers } from '../../component/navbar/data';
import DestinationHolder from '../../component/DestinationHolder';
import Providers from '../../component/Providers';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [value, setValue] = useState('')

    const navigate = useNavigate()

    const onDestinationClick = (id) => {
        navigate(`/detail/${id}`)
    }
    return (
        <div>
            <Navbar />
            <HomeBg image={island1}>
                <BannerText>
                    <h1>Capture Trips</h1>
                    <div className='select_location'>
                        <CustomField type='select' readOnly>
                            <option>Delhi</option>
                        </CustomField>
                        <MdLocationOn className='location_icon' />
                    </div>
                </BannerText>
                <SearchWrapper>
                    <MdLocationOn className='icon_location' />
                    <CustomField type='text' placeholder='Where are you going' color='black' className='search_input' value={value} onChange={(e) => setValue(e.target.value)} />
                    <div className='search_wrapper'>
                        <BiSearch className='search' />
                    </div>
                </SearchWrapper>
            </HomeBg>
            <ContentWrapper>
                <div>
                    <Heading text={'Top Destination'} />
                    <div className='destination_section'>
                        {destination.map((item, index) => <DestinationHolder key={index} img={item.image} title={item.title} onClick={() => onDestinationClick(index)} />)}
                    </div>
                </div>

                <div className='carousel_wrapper'>
                    <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
                        {bannerImg?.map((image, index) => (
                            <img src={image.img} alt="" />
                        ))}

                    </Carousel>
                </div>

                <div>
                    <Heading text={'Popular providers'} />
                    <div className='destination_section'>
                        {
                            providers.map((item, index) => (<Providers img={item.image} />))
                        }
                    </div>
                </div>

                <div>
                    <Heading text={'Departing Soon'} progress={true} />
                    <div className='destination_section'>
                        {departing.map((item, index) => <Destination image={item.img} key={index}>
                            <img src={item.img} alt="" />
                        </Destination>)}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HomePage