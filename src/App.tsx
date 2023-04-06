import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Header, Loading } from './components';
import routes from './routes';
import PrivateRoute from './routes/PrivateRoute';
import TitleWrapper from './routes/TitleWrapper';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(id);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          const Component: React.FC = route.component;
          if (!route.isProtected) {
            return (
              <Route
                path={route.path}
                element={
                  <Suspense fallback={<Loading />}>
                    <TitleWrapper title={route.title}>
                      <Component />
                    </TitleWrapper>
                  </Suspense>
                }
                key={index}
              />
            );
          }
          return (
            <Route
              path={route.path}
              element={
                <Suspense fallback={<Loading />}>
                  <TitleWrapper title={route.title}>
                    <PrivateRoute key={index}>
                      <Component />
                    </PrivateRoute>
                  </TitleWrapper>
                </Suspense>
              }
              key={index}
            />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
