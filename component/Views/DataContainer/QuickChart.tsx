import * as React from 'react';
import styles from './QuickChart.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/counterSlice';
import { initialize, updateData } from '../../redux/myDataSlice';

const QuickChart = () => {
  const mydata = useSelector((state: RootState) => state.mydata.myData);
  const dispatch = useDispatch();

  return <div id="quickChart" className={styles.QuickChart}></div>;
};

export default QuickChart;
