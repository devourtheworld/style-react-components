import React from 'react';
import {createUseStyles} from 'react-jss';

import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess'

const useStyles = createUseStyles({
  wrapper: {
    padding: 20
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Alert title="Items not added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess/>
    </div>
  )
}

export default App;
