import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuth, AuthContext } from 'Context/auth'

import Loading from 'Components/Loading'

const withAuth = Component => {
  const Auth = (props) => {
    const router = useRouter();
    const { session } = useAuth();

    const checkToken = () => {
      if (!session.access_token) {
        router.push({ pathname: '/', query: { access_restricted: true } });
      }
    }

    useEffect(() => setTimeout(() => checkToken(), 1000), [session.access_token]);

    // If user is logged in, return original component
    return (
      <AuthContext.Consumer>
        {({ session }) => session.access_token ? <Component {...props} /> : <Loading />}
      </AuthContext.Consumer>
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;