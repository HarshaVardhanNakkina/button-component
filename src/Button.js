import React from 'react'

// STYLES
import { StyledButton } from './styles/StyledButton'
import { StyledStartIcon, StyledEndIcon } from './styles/StyledIcon'

const snakeToCamel = str =>
	str.replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''))

const Button = props => {
	// const startIcon = props.startIcon ? snakeToCamel(props.startIcon) : ''
	// const endIcon = props.endIcon ? snakeToCamel(props.endIcon) : ''
	return (
		<StyledButton {...props}>
			{props.startIcon ? <StyledStartIcon> {props.startIcon} </StyledStartIcon> : null}
			<span>{props.children}</span>
			{props.endIcon ? <StyledEndIcon> {props.endIcon} </StyledEndIcon> : null}
		</StyledButton>
	)
}

export default Button
