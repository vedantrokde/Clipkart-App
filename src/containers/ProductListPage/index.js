import React from 'react'
import Layout from '../../components/Layout';
import ProductStore from './ProductStore';
import getParams from '../../utils/getParams';
import ProductPage from './ProductPage';
import ClothingAndAccessories from "./ClothingAndAccessories";

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

  const renderProduct = () => {
    const params = getParams(props.location.search);
    
    let content = null;
    switch (params.type) {
      case 'store':
        content = <ProductStore {...props} />
        break;
      case 'page':
        content = <ProductPage {...props} payload={params} />
        break;
      default:
        content = <ClothingAndAccessories {...props} />;
        break;
    }
    return content;
  } 

  return (
    <Layout>
      {renderProduct()}
    </Layout>
  )
}

export default ProductListPage