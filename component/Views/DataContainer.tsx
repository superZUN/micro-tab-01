import * as React from 'react';
import styles from '/DataContainer.module.css';
import QuickChart from '../DataContainer/QuickChart';

import 'handsontable/dist/handsontable.full.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/counterSlice';
import { initialize, updateData } from '../../redux/myDataSlice';

// import { useSelector } from 'react-redux';

// register Handsontable's modules
// registerAllModules();

const DataContainer = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const mydata = useSelector((state: RootState) => state.mydata.myData);
  const dispatch = useDispatch();

  const onBeforeHotChange = (changes) => {
    dispatch(updateData(changes));

    return false;
  };

  return (
    <div id="hot-app">
      <button>graph</button>
      <QuickChart />
      <HotTable
        data={mydata}
        colHeaders={true}
        rowHeaders={true}
        // ref={hotTableComponent};;;;;[=]
        beforeChange={onBeforeHotChange}
        // width="100"
        // height="500"
        rowHeights={23}
        colWidths={100}
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
};

export default DataContainer;
