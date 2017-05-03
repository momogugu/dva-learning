import React from 'react';
import { connect } from 'dva';
import styles from './B.css';

import MainContainer from '../MainContainer'

function B({location}) {
  return (
    <MainContainer location={location}>
      <div className={styles.normal}>
        Route Component: B
      </div>
    </MainContainer>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(B);
