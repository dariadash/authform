import React from 'react';
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';
import './styles/index.scss';
import { $appLoaded, $userAuthorized, appload } from './features/Form/model/app';
import { Auth } from './pages/Auth';
import { Register } from './pages/Register';
import { Main } from './pages/Main';

export const App = () => {
  const appLoaded = useStore($appLoaded)
  React.useEffect(() => {
    appload()
  }, [])
  if (!appLoaded) {
    return <>Загрузка...</>
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GuestRouterWrapper>
            <Auth />
          </GuestRouterWrapper>
        </Route>
        <Route exact path="/registration">
          <GuestRouterWrapper>
            <Register />
          </GuestRouterWrapper>
        </Route>
        <Route exact path="/mainpage">
          <PrivateRouterWrapper>
            <Main />
          </PrivateRouterWrapper>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const PrivateRouterWrapper: React.FC = ({ children }) => {
  const history = useHistory()
  const appLoaded = useStore($appLoaded)
  const isAuth = useStore($userAuthorized)
  React.useEffect(() => {
    if (!isAuth) {
      history.replace('/')
    }
  }, [appLoaded, isAuth])
  return (<>{children}</>)
}

const GuestRouterWrapper: React.FC = ({ children }) => {
  const history = useHistory()
  const appLoaded = useStore($appLoaded)
  const isAuth = useStore($userAuthorized)
  React.useEffect(() => {
    if (isAuth) {
      history.replace('/mainpage')
    }
  }, [appLoaded, isAuth])
  return (<>{children}</>)
}