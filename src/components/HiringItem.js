import React from 'react';

export default ({ hiring }) => (
	<div className="list_item">
		<div className="list_field">ID: {hiring.id}</div>
		<div className="list_field">List ID: {hiring.listId}</div>
		<div className="list_field">Name: {hiring.name}</div>
	</div>
)