import './App.css'
import {increment,decrement} from './redux/counter'
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const {count}=useSelector((state)=>state.counter)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>the count is :{count}</h1>
      <button onClick={()=>dispatch(increment())}>incriment</button>
      <button onClick={()=>dispatch(decrement())}>decriment</button>
    </div>
  );
}

export default App;
