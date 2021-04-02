import React from "react";
import "../styles.css";

import { fetchCount } from "./fetchCount";

const CountContext = React.createContext();

const FETCH_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

function CounterContainer() {
  const [count, setCount] = React.useState(0);
  const [fetchStatus, setFetchStatus] = React.useState(FETCH_STATUS.LOADING);

  React.useEffect(() => {
    (async function () {
      try {
        const countFromAPI = await fetchCount();
        setCount(countFromAPI);
        setFetchStatus(FETCH_STATUS.SUCCESS);
      } catch (e) {
        setFetchStatus(FETCH_STATUS.FAIL);
      }
    })();
  }, []);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {fetchStatus === FETCH_STATUS.LOADING && <p>Counter is loading...</p>}
      {fetchStatus === FETCH_STATUS.SUCCESS && (
        <ul>
          <li>
            <Counter />
          </li>
          <li>
            <Counter />
          </li>
        </ul>
      )}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = React.useContext(CountContext);

  return (
    <button className="button" onClick={() => setCount((count) => count + 1)}>
      {count}
    </button>
  );
}

export { CounterContainer };
