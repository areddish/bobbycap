// GoogleLoginComponent.jsx
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = ({onLogin}) => {
  const handleSuccess = (credentialResponse) => {
    //const decoded = jwt_decode(credentialResponse.credential);
    console.log('User Info:', credentialResponse); // Contains name, email, etc.
    onLogin();
  };

  const handleError = () => {
    console.error('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId="347432533256-rdilgf738s49lp2aqlnmv9gd6l60a5ml.apps.googleusercontent.com">
      <div>
          <p>Welcome, please login!</p>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
