import './App.css'
import { useEffect } from "react";
import { getUsers, stopPolling } from "./actions/index.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [dispatch])

  return (
    <div className="App">
      <h1>Redux-Saga Api Calls</h1>
      <button onClick={()=> dispatch(stopPolling())}>StopPolling</button>
      <button onClick={()=> dispatch(getUsers())}>StartPolling</button>
      {loading && <h3>Loading...</h3>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h2 key={i}>{user.name}</h2>)}
    </div>
  );
}

export default App;
