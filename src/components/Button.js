import React from 'react';
import { LanguageContext, ColorContext } from '../contexts';
class Button extends React.Component {
	renderSubmit = (value) => {
		return value === 'english' ? 'Submit' : 'Voorlegen';
	};

	renderButton = (color) => {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{/* will automatically call this function by consumer */}
					{this.renderSubmit}
				</LanguageContext.Consumer>
			</button>
		);
	};
	render() {
		return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
	}
}

export default Button;
