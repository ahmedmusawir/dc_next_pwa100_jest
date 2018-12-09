import React from 'react';

const Para = props => {
	const { children } = props;
	return <p id="testId">{children}</p>;
};

export default Para;
