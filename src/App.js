import './App.css';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const number = useSelector( state=>state.number );
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   console.log(number)
  // })

  const incrementHandler = useCallback(()=>{
    dispatch({
      type: 'increment'
    });
  },[dispatch]);
  const decrementHandler = useCallback(()=>{
    dispatch({
      type: 'decrement'
    });
  },[dispatch]);
  const incrementTenNumberHandler = useCallback((number)=>{
    dispatch({
      type: 'incrementTenNumber',
      payload: {number}
    });
    console.log(number)
  },[dispatch]);

  return (
    <div className="App">
      <p>number: {number}</p>
      <button onClick={incrementHandler}>增加 1</button>
      <button onClick={decrementHandler}>減少 1</button>
      <button onClick={()=>incrementTenNumberHandler(number)}>增加 10</button>
    </div>
  );
}

export default App;
