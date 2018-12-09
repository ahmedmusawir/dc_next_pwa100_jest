import React from 'react';
import { HomeSectionHeading, HomeSectionText } from 'components/general';

export const ContentTxt = props => {
	const { title, description, color } = props;
	return (
		<React.Fragment>
			<HomeSectionHeading color={color} className="px-5">
				{title}
			</HomeSectionHeading>
			<HomeSectionText color={color} className="px-5">
				{description}
			</HomeSectionText>
		</React.Fragment>
	);
};

export default ContentTxt;
