import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';


function Main() {

const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="Main">

      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Infos I shouldn't see</h3> : ''}

    </div>
  );
}

export default Main;