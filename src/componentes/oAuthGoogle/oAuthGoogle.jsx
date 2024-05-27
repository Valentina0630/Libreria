import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Cookies from 'universal-cookie';

const OAuthGoogle = () => {
    const cookie = new Cookies();
    return (
        <div>
            <GoogleOAuthProvider clientId='37295591100-ft8aq1c3c4ltf6iivq3gisc3rac40db3.apps.googleusercontent.com'
            className="boxGoogle">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                        cookie.set('name', credentialResponseDecode.name, {
                            secure: true, sameSite: 'None', path: '/'
                        })
                        cookie.set('lastname', "", {
                            secure: true, sameSite: 'None', path: '/'
                        })
                        cookie.set('email', credentialResponseDecode.email, {
                            secure: true, sameSite: 'None', path: '/'
                        })
                        window.location.hash = '/Sesion'
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
}

export default OAuthGoogle;
