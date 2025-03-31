import { FC } from 'react'

interface Props {
	size?: number
	className?: string
}

export const Loading: FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			Loading...
		</div>
	)
}
