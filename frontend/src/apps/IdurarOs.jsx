import { lazy, Suspense, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectAuth } from '@/redux/auth/selectors';
import { AppContextProvider } from '@/context/appContext';
import PageLoader from '@/components/PageLoader';
import AuthRouter from '@/router/AuthRouter';
//Provides localization/internationalization support, like setting language and regional settings.
import Localization from '@/locale/Localization';
import { notification } from 'antd';

const ErpApp = lazy(() => import('./ErpApp'));

const DefaultApp = () => (
  <Localization>
    <AppContextProvider>
      <Suspense fallback={<PageLoader />}>
        <ErpApp />
      </Suspense>
    </AppContextProvider>
  </Localization>
);

export default function IdurarOs() {
  const { isLoggedIn } = useSelector(selectAuth);

  console.log(
    '🚀 Welcome to Greylytica ERP ! Did you know that we also offer commercial customization services? Contact us at aggreylelei.com for more information.'
  );

  if (!isLoggedIn)
    return (
      <Localization>
        <AuthRouter />
      </Localization>
    );
  else {
    return <DefaultApp />;
  }
}
