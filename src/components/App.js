import React from 'react';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';
import UpdateProfile from './UpdateProfile';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import {Container} from 'react-bootstrap';
import {AuthProvider} from '../context/AuthContext';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
function App() {
    return (
        <>
        <Container className='d-flex align-items-center justify-content-center'
          style={{minHeight:'100vh'}}
          >
            <div className="w-100" style={{maxWidth:'400px'}}>
            <Router>
            <AuthProvider>
              <Switch>
              <PrivateRoute exact path='/' component={Dashboard}></PrivateRoute>
              <PrivateRoute path='/update-profile' component={UpdateProfile}></PrivateRoute>
              <Route  path='/signup' component={Signup}></Route>
              <Route  path='/login' component={Login}></Route>
              <Route  path='/forgot-password' component={ForgotPassword}></Route>
              </Switch>
              </AuthProvider>
            </Router>
            </div>
        </Container>
        </>
    )
}

export default App;

