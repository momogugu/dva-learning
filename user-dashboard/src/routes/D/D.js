import React from 'react';
import { connect } from 'dva';
import styles from './D.css';

import MainContainer from '../MainContainer'

function D({location}) {
  return (
    <MainContainer location={location}>
      <div className={styles.normal}>
        404 not found
      </div>
    </MainContainer>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(D);
