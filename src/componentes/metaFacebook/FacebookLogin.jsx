import React, { useState } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import Cookies from 'universal-cookie';

const FacebookLogin = () => {
    const cookie = new Cookies();
    const [profile, setProfile] = useState(null);
    
    const handleLogin = (response) => {
        console.log(response);
        setProfile(response.data);
        
        cookie.set('name', response.data.name, {
            secure: true, sameSite: 'None', path: '/'
        });
        cookie.set('lastname', "", {
            secure: true, sameSite: 'None', path: '/'
        });
        cookie.set('email', response.data.email, {
            secure: true, sameSite: 'None', path: '/'
        });
        window.location.hash = '/Sesion'; 
    }

    return (
        <div>
            {!profile ? (
                <LoginSocialFacebook
                    appId=""
                    onResolve={handleLogin}
                    onReject={(error) => {
                        console.log(error)
                    }}
                    className="boxFacebook">
                    <FacebookLoginButton className="custom-facebook-button" />
                </LoginSocialFacebook>
            ) : null}
        </div>
    );
}

export default FacebookLogin;
