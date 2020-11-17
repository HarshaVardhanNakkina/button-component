import React from 'react'

// STYLES
import { StyledButton } from './styles/StyledButton'
import './index.css'

// COMPONENTS
import ShowCase from './ShowCase'

const App = () => {
	return (
		<>
			<ShowCase />
			<footer className='attribution'>
				<span>HarshaVardhan @ DevChallenges.io</span>
			</footer>
		</>
	)
}

export default App
