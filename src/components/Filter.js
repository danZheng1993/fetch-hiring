import React from 'react';

export default ({ listIds, listId, keyword, onChangeFilter }) => {
	const handleChangeListId = (e) => {
		onChangeFilter({ listId: e.target.value, keyword });
	};
	const handleChangeKeyword = (e) => {
		onChangeFilter({ listId, keyword: e.target.value });
	};
	const handleResetFilter = () => {
		onChangeFilter({ listId: null, keyword: '' });
	}
	return (
		<div className="filter_wrapper">
			<select className="filter_item list_selector" onChange={handleChangeListId}>
				<option value="null">
					Show All
				</option>
				{listIds.map(listId => <option value={listId} key={`list_id_${listId}`}>{listId}</option>)}
			</select>
			<input
				type="text"
				className="filter_item keyword_input"
				value={keyword}
				onChange={handleChangeKeyword}
			/>
			<button className="filter_item reset" onClick={handleResetFilter}>Reset</button>
		</div>
	);
}