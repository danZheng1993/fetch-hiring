import React from 'react';

import HiringItem from './HiringItem';

export default ({ data, listId, keyword }) => {
	const renderingData = !listId && keyword === '' ? data :
		data.filter((hiring) => {
			let result = true;
			if (listId && listId !== 'null') {
				result = result && (listId == hiring.listId);
			}
			if (keyword !== '') {
				result = result && hiring.name.includes(keyword);
			}
			return result;
		})
	return (
		<div className="list_content">
			<div className="list_stat">
				{listId || keyword !== '' ? `Showing ${renderingData.length} of ${data.length} records` : `Showing ${data.length} records`}
			</div>
			{renderingData.map(hiring => <HiringItem hiring={hiring} key={`hiring_item_${hiring.id}`} />)}
		</div>
	)
}