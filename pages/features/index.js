import React from 'react';
import { Layout, PageContent, HeroBlock } from 'components/layout';
import { HeroHeading, HeroSubHeading } from 'components/general';
import data from 'static/constants';

class Features extends React.Component {
	static getInitialProps = async () => {
		const featuresData = data.page.features;

		return {
			featuresPageData: featuresData
		};
	};

	getArticles = () => {
		const articles = [];
		this.props.featuresPageData.articles.map(d => {
			articles.push(<PageContent key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		const { title, description } = this.props.featuresPageData;

		return (
			<Layout
				title="Deep Cast - Features"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<HeroBlock className="d-flex flex-column row">
					<HeroHeading color="snow" size="3rem">
						{title}
					</HeroHeading>
					<HeroSubHeading color="snow" size="2.5rem">
						{description}
					</HeroSubHeading>
				</HeroBlock>
				{this.getArticles()}
			</Layout>
		);
	}
}
export default Features;
