import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductBySlug } from '../../../actions';
import Card from '../../../components/UI/Card';
import { generatePublicURL } from '../../../urlConfig';
import './style.css';

/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {

    const product = useSelector(state => state.product);
    const priceRange = {
        'under5k': 5000,
        'under10k': 10000,
        'under15k': 15000,
        'under20k': 20000,
        'under30k': 30000
    };
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductBySlug(props.match.params.slug));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card
                            key={index}
                            style={{
                                width: 'calc(100% - 20px)'
                            }}
                            headerleft={`${props.match.params.slug} mobiles under ${priceRange[key]}`}
                            headerright={<button>View All</button>}
                        >
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(prod =>
                                        <Link
                                            to={`/${prod.slug}/${prod._id}/p`}
                                            style={{ display: 'block', textDecoration: 'none' }}
                                            className="productContainer"
                                            key={prod._id}
                                        >
                                            <div className="productImgContainer">
                                                <img src={generatePublicURL(prod.productPictures[1].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }} >{prod.name}</div>
                                                <div>
                                                    <span>4.3</span> &nbsp;
                                                    <span>4323</span>
                                                </div>
                                                <div className="productPrice">{prod.price}</div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </Card>
                    );
                })
            }
        </>
    )
}

export default ProductStore