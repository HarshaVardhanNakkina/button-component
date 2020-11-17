import React from 'react'

// STYLES
import { StyledButton } from './styles/StyledButton'
import { StyledStartIcon, StyledEndIcon } from './styles/StyledIcon'

const mapSizes = size => {
	if (!size) return 'default'

	switch (size) {
		case 'sm':
			return 'small'
			break
		case 'md':
			return 'default'
			break
		case 'lg':
			return 'large'
			break
		default:
			return 'default'
			break
	}
}

const Button = props => {
	// const startIcon = props.startIcon ? snakeToCamel(props.startIcon) : ''
	// const endIcon = props.endIcon ? snakeToCamel(props.endIcon) : ''
	return (
		<StyledButton {...props}>
			{props.startIcon ? (
				<StyledStartIcon fontSize={mapSizes(props.size)}>{props.startIcon} </StyledStartIcon>
			) : null}
			<span>{props.children}</span>
			{props.endIcon ? (
				<StyledEndIcon fontSize={mapSizes(props.size)}>{props.endIcon} </StyledEndIcon>
			) : null}
		</StyledButton>
	)
}

export default Button
