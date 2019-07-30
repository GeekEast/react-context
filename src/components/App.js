import React from 'react';
import UserCreate from './UserCreate';
import { LanguageContext, ColorContext } from '../contexts';
class App extends React.Component {
	state = {
		language: 'english'
	};

	onLanguageChange = (language) => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i className="flag us" onClick={() => this.onLanguageChange('english')} />
					<i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
				</div>

				<ColorContext.Provider value="primary">
					{/* nesting order doesn't matter */}
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
