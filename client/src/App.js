import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './Components/Header';
import Homescreen from './Screens/Homescreen';
import ProductScreen from './Screens/ProductScreen';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CartScreen from './Screens/CartScreen';
import ShippingScreen from './Screens/ShippingScreen';
import UserListScreen from './Screens/UserListScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import UserEditScreen from './Screens/UserEditScreen';
import OrderScreen from './Screens/OrderScreen';
import ProductListScreen from './Screens/ProductListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';
import Footer from './Components/Footer';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <main className="py-3">
                    <Container>
                        <Route path="/order/:id" component={OrderScreen} />
                        <Route path="/shipping" component={ShippingScreen} />
                        <Route path="/payment" component={PaymentScreen} />
                        <Route path="/placeorder" component={PlaceOrderScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/profile" component={ProfileScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/admin/userlist" component={UserListScreen} />
                        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
                        <Route path='/admin/productlist' component={ProductListScreen} exact />
                        <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/>
                        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
                        <Route path='/admin/orderlist' component={OrderListScreen} />
                        <Route path='/search/:keyword' component={Homescreen} />
                        <Route path="/" component={Homescreen} exact />
                    </Container>
                </main>
                <Footer />
            </Router>
        </>
    );
};

export default App;
