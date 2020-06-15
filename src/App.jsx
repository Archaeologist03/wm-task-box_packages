import React, { Suspense, lazy } from 'react';

import styles from './app.module.scss';
import Spinner from './components/Spinner/Spinner';

const BoxPackagesPage = lazy(() => import('./pages/BoxPackages/BoxPackages'));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        }>
        <BoxPackagesPage />
      </Suspense>
    </div>
  );
}

export default App;
