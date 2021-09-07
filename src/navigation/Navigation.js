import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector } from "react-redux"
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

// pages 
import TodoPage from '../pages/TodoPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
function Navigation() {
    const isLogin = useSelector(store => store.AuthReducer.isUserLoggedIn)
    return (
        <Router>
            <Switch>
                <PublicRoute isLogin={isLogin}  path="/" exact>
                    <LoginPage />
                </PublicRoute>
        
                <PublicRoute isLogin={isLogin}  path="/signup"  >
                    <SignupPage />
                </PublicRoute>


                <PrivateRoute isLogin={isLogin}  path="/todos" >
                    <TodoPage />
                </PrivateRoute>


            </Switch>
        </Router>
    );
}

export default Navigation
