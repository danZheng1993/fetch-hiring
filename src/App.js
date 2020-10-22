import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import { DataList } from './components';

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState('loading');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);
		try {
			const result = await fetch('http://localhost:4000/hirings').then(res => res.json());
			setData(result.filter(hiring => !(hiring.name === '' || !hiring.name)));
			setLoading('loaded');
		} catch {
			setData([]);
			setLoading('error');
		}
	}

	const renderContent = useCallback(() => {
		switch(loading) {
			case 'loading':
				return <div>Loading...</div>
			case 'error':
				return <div>Error occurred</div>
			case 'loaded':
			default:
				return <DataList data={data} />
		}
	}, [loading, data]);

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
