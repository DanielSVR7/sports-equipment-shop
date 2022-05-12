import React, { useContext, useState } from 'react';
import { Card, Container, Form, Button} from 'react-bootstrap';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { login, registration, check } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
import { Context } from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            if (isLogin) {
                await login(email, password)
            } else {
                await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
            check().then(data =>{
                user.setUser(data)
                user.setIsAuth(true)
            })
            
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{ isLogin ? 'Авторизация' : 'Регистрация' }</h2>
                <Form className="d-flex flex-colomn">
                    <Form.Control
                        className="mt-4"
                        placeholder="Введите ваш email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form>
                <Form className="d-flex flex-colomn">
                    <Form.Control
                        className="mt-4"
                        placeholder="Введите ваш пароль"
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                </Form>
                <div className="d-flex justify-content-between mt-3">
                    {
                    isLogin ? 
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся!</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите!</NavLink>
                        </div>
                    }   
                    <Button 
                        variant="outline-dark"
                        onClick={click}
                    >
                        { isLogin ? 'Войти' : 'Регистрация' }
                    </Button>
                </div>

            </Card>
        </Container>
    );
});

export default Auth;