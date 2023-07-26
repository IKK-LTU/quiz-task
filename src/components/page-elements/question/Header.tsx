import {Typography} from '@mui/material'
import React from 'react'
import Title from '../../elements/Title'

type HeaderProps = {
	title: string
	description?: string
}

const Header = ({title,description}:HeaderProps) => {
	return (
		<>
			<Title text={title}/>
			{description &&
				<Typography variant="body1" py={2}>
					{description}
				</Typography>
			}
		</>
	)
}

export default Header