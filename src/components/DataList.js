import React, { useState } from 'react';

import Filter from './Filter';
import ListContent from './ListContent';

export default ({ data }) => {
	const [listId, setListId]  = useState();
	const [keyword, setKeyword] = useState('');

	const listIds = data.reduce((prev, hiring) => {
		if (prev.findIndex(listId => listId === hiring.listId) >= 0) {
			return prev;
		}
		return [...prev, hiring.listId];
	}, []).sort();

	const handleChangeFilter = (filter) => {
		setListId(filter.listId);
		setKeyword(filter.keyword);
	}
	return (
		<div className="data_list_wrapper">
			<Filter
				listIds={listIds}
				listId={listId}
				keyword={keyword}
				onChangeFilter={handleChangeFilter}
			/>
			<ListContent
				data={data}
				listId={listId}
				keyword={keyword}
			/>
		</div>
	)
};