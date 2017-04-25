import React from 'react';
import { connect } from 'dva';
import styles from './A.css';

import MainContainer from '../components/MainContainer/MainContainer'

function A({location}) {
  return (
    <MainContainer location={location}>
      <div className={styles.normal}>
        Route Component: A
      </div>
    </MainContainer>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(A);
