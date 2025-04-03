import { FC } from 'react'

interface Props {
	lottieUrl: string
}

export const NftLottie: FC<Props> = ({ lottieUrl }) => {
	return (
		<div className='rounded-xl overflow-hidden'>
			{
				// @ts-ignore
				<tgs-player
					src={lottieUrl}
					className='w-[169px] h-[169px]'
					mode='normal'
					hover
				/>
			}
		</div>
	)
}
