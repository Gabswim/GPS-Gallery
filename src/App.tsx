import React, { useEffect, useState } from 'react';

enum FetchStatus {
  IDLE,
  LOADING,
  ERROR,
  SUCCESS,
}

const App: React.FC = () => {
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.IDLE);
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchStatus(FetchStatus.LOADING);

        const res = await fetch('/.netlify/functions/exampleHandler');
        const text = await res.text();

        setData(text);
        setFetchStatus(FetchStatus.SUCCESS);
      } catch (e) {
        setFetchStatus(FetchStatus.ERROR);
      }
    };

    fetchData();
  }, []);

  if (fetchStatus === FetchStatus.LOADING) {
    return <h1>Loading...</h1>;
  } else if (fetchStatus === FetchStatus.SUCCESS) {
    return <h1>{data}</h1>;
  } else if (fetchStatus === FetchStatus.ERROR) {
    return <h1>Error</h1>;
  } else {
    return null;
  }
};

export default App;
