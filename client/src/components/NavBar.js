import React, { useContext, useState } from 'react';
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Link, useNavigate } from 'react-router-dom';
import Basket from '../components/Basket';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [basketVisible, setBasketVisible] = useState(false)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={SHOP_ROUTE}>Спортинвентарь</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {user.isAuth ?
                            <Nav>
                                <Nav.Link 
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                >
                                        Админ. панель
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => logOut()}
                                >
                                    Выйти
                                </Nav.Link>
                                <Button 
                                    className='ms-3'
                                    variant='outline-success'
                                    onClick={() => setBasketVisible(true)}
                                    >
                                        Корзина
                                </Button>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link 
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                >
                                    Авторизация
                                </Nav.Link>
                                <Nav.Link 
                                    onClick={() => navigate(REGISTRATION_ROUTE)}
                                >
                                    Регистрация
                                </Nav.Link>
                            </Nav>
                        }                          
                    </Nav>
                    <Nav className="ms-4">
                        
                    </Nav>
                </Navbar.Collapse>
                <Basket show={basketVisible} onHide={() => setBasketVisible(false)}/>
            </Container>
        </Navbar>
    );
});

export default NavBar;