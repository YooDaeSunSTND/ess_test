import React, { useEffect, useState } from 'react';
import 'helpers/initFA';
import CustomLayout from '../components/layout';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading)
    return (
      <div>
        <title>Loading</title>
      </div>
    );
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default wrapper.withRedux(MyApp);
