import React from 'react'

// COMPONENTS
import Button from './Button'

// STYLES
import { StyledButton } from './styles/StyledButton'
import { Wrapper } from './styles/Wrapper'

const ShowCase = () => {
	return (
		<Wrapper>
			<Button color='default'>Default</Button>
			<Button color='primary'>Primary</Button>
			<Button color='secondary'>Secondary</Button>
			<Button color='danger'>Danger</Button>
			<Button disabled>Disabled</Button>
			<Button color='primary' variant='outline'>
				Primary Outlined
			</Button>
			<Button color='primary' variant='text'>
				Primary Text
			</Button>
			<Button color='default' variant='outline'>
				Default Outlined
			</Button>
			<Button color='default' variant='text'>
				Default Text
			</Button>
			<Button color='secondary' variant='outline'>
				Secondary Outlined
			</Button>
			<Button color='secondary' variant='text'>
				Secondary Text
			</Button>
			<Button color='danger' variant='outline'>
				Danger Outlined
			</Button>
			<Button color='danger' variant='text'>
				Danger Text
			</Button>
			<Button color='primary' variant='outline' startIcon='local_grocery_store'>
				Start Icon Button
			</Button>
			<Button color='secondary' variant='text' endIcon='local_grocery_store'>
				End Icon Button
			</Button>
		</Wrapper>
	)
}

export default ShowCase
