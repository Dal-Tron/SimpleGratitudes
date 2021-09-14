import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAuth, AuthContext } from 'Context/auth'

import Loading from 'Components/Loading'

const withAuth = Component => {
  const Auth = (props) => {
    const router = useRouter();
    const { session } = useAuth();
    const [sessionChecked, setSessionChecked] = useState(false);

    useEffect(() => {
      if (!session.access_token && sessionChecked) {
        return router.push({ pathname: '/', query: { access_restricted: true } });
      }
    }, [session.access_token, sessionChecked])

    useEffect(() => {
      var observerInterval = setInterval(() => {
        if (session.access_token) {
          clearInterval(observerInterval);
          return setSessionChecked(false);
        }

        setSessionChecked(true);
      }, 1000);
      return () => {
        clearInterval(observerInterval);
      }
    }, [session.access_token]);

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