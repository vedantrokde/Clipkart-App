import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from '../../../components/UI/Card';
/**
* @author
* @function ProductPage
**/

const ProductPage = (props) => {

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductPage(props.payload));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const page = product.page;
    return (
        <>
            <h3 style={{ padding: '0 5px' }}>{page.title}</h3>
            <Carousel showThumbs={false}>
                {
                    page.banners && page.banners.map((banner, ind) =>
                        <a key={ind} style={{ display: 'block' }} href={banner.navigateTo}>
                            <img src={banner.img} alt=" " />
                        </a>
                    )
                }
            </Carousel>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {
                    page.products && page.products.map((product, index) =>
                        <Card
                            key={index}
                            style={{
                                width: '400px',
                                heigh: '200px',
                                textAlign: 'center',
                                background: '#f5f5f5'
                            }}
                        >
                            <a href={product.navigateTo}>
                                <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={product.img} alt="" />
                            </a>
                        </Card>
                    )
                }
            </div>

        </>
    )
}

export default ProductPage