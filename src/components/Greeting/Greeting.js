import React from 'react';
import PropTypes from 'prop-types';
import styles from './Greeting.module.css';

const Greeting = () => (
  <div className={styles.Greeting}>
    Greeting Component
  </div>
);

Greeting.propTypes = {};

Greeting.defaultProps = {};

export default Greeting;
