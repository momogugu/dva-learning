import React from 'react';
import { connect } from 'dva';
import styles from './C.css';

import MainContainer from '../MainContainer'

function C({location}) {
  return (
    <MainContainer location={location}>
      <div className={styles.normal}>
        Route Component: C
      </div>
    </MainContainer>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(C);
