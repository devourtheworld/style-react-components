import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const colors = {
  success: '#6da06f',
  error: '#f56260',
};

const useStyles = createUseStyles({
    wrapper: {
      border: ({ type }) => `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: 'relative',
      '& > h2': {
        color: ({ type }) => colors[type],
        margin: [0, 0, 10, 0],
      }
    }
});

export default function Alert({ children, type, title }) {
  const classes = useStyles({ type })
  return(
    <div className={classes.wrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}