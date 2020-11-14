import styled, { css } from 'styled-components'

// variables
import { COLORS } from './variables'
export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	font-family: 'Noto Sans JP', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	border: none;
	border-radius: 6px;
	box-shadow: ${props =>
		props.disableShadow
			? 'none'
			: props.color
			? COLORS[props.color].boxShadow
			: COLORS.default.boxShadow};
	transition: background-color 0.2s ease-in-out;

	/* width: 81px;
  height: 36px; */
	padding: 0.5rem 1rem;
	margin: 1rem;

	background-color: ${props =>
		props.color ? COLORS[props.color].background : COLORS.default.background};

	color: ${props => (props.color ? COLORS[props.color].color : COLORS.default.color)};

	&:hover,
	&:focus {
		background-color: ${props => {
			let bg = props.color ? COLORS[props.color].focusBg : COLORS.default.focusBg
			return bg + (props.variant ? '1a' : '')
		}};
		cursor: pointer;
	}

	${props => {
		switch (props.variant) {
			case 'outline':
				return css`
          color: ${
						props.color && props.color !== 'default'
							? COLORS[props.color].background
							: COLORS.default.color
					};
            
          border: 1px solid ${
						props.color && props.color !== 'default'
							? COLORS[props.color].background
							: COLORS.default.color
					}};
          
          background-color: transparent;
        `
			case 'text':
				return css`
					color: ${props.color && props.color !== 'default'
						? COLORS[props.color].background
						: COLORS.default.color};

					background-color: transparent;
					box-shadow: none;
				`
			default:
				break
		}
	}};
	${props =>
		props.disabled &&
		css`
			color: ${COLORS.disabledColor};
			background-color: ${COLORS.disabledBg};
			&:hover,
			&:focus {
				background-color: ${COLORS.disabledBg};
				cursor: not-allowed;
			}
		`}
`
