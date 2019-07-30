

### Props vs Context
<img style="width: 80%; margin: auto" src="https://geekeaskblogpics.s3-ap-southeast-2.amazonaws.com/posts/WX20190730-135354%402x.png"></img>

### Basic Usage
```javascript
// LanguageContext.js
import React from 'react';
// pass default state to be broadcasting
export default React.createContext('english');
```

```javascript
// Button
import { LanguageContext } from '../contexts';
class Button extends React.Component {
	// static load to blueprint
    static contextType = LanguageContext;
	render() {
        console.log(this.context) // you will get the default value of the Language Context
		return <button className="ui primary button">Submit</button>;
	}
}
export default Button;
```

### Provider and Consumer
```javascript
// app.js - Provider
import React from 'react';
import UserCreate from './UserCreate';
import { LanguageContext } from '../contexts';
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

				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
			</div>
		);
	}
}
```
```javascript
// Button.js - Consumer
import React from 'react';
import { LanguageContext } from '../contexts';
class Button extends React.Component {
	render() {
		return (
			<button className="ui primary button">
				<LanguageContext.Consumer>
					{/* will automatically call this function by consumer */}
					{(value) => (value === 'english' ? 'Submit' : 'Voorlegen')}
				</LanguageContext.Consumer>
			</button>
		);
	}
}

export default Button;
```
- Why we need to use Provider/Consumer rather than static loading context?
  - Because with Provider and Consumer we could provide multiple contexts.

```javascript
// APP.js
	<ColorContext.Provider value="red">
		{/* nesting order doesn't matter */}
		<LanguageContext.Provider value={this.state.language}>
			<UserCreate />
		</LanguageContext.Provider>
	</ColorContext.Provider>
```
```javascript
// Button.js
	<ColorContext.Consumer>
		{(color) => (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{/* will automatically call this function by consumer */}
					{(value) => this.renderSubmit(value)}
				</LanguageContext.Consumer>
			</button>
		)}
	</ColorContext.Consumer>
```
### The difference between Context and Redux
- Context is single channel. **Each provider with the same name create a brand new channel**.
- Redux is central broadcast. **You only got one provider**

|                 Redux                 |             Context             |
| :-----------------------------------: | :-----------------------------: |
|          Excellent Document           |      No need for extra lib      |
|      Well-known design patterns       | Hard to build a store component |
| Tremendous amount of open source libs |               B3                |

### Code Reusing
- Variable
- **Function**
- Class
- Generic
- Interface
