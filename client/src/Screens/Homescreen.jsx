import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Product from '../Components/Product';
import ProductCarousel from '../Components/ProductCarousel';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import {Row, Col} from 'react-bootstrap';
import Paginate from '../Components/Paginate';
import {listProducts} from '../Actions/productActions';


const Homescreen = ({match}) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch();

    const pageNumber = match.params.pageNumber || 1

    const productList = useSelector(state => state.productList);
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    },[dispatch, keyword, pageNumber]);

    return (
        <>
        {!keyword && <ProductCarousel />  }
          <h1>Latest Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
              />
            </>
          )}
        </>
    );
};


export default Homescreen;
