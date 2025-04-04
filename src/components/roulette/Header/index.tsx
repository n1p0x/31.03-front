import { fromNano } from '@ton/core'
import { FC } from 'react'

import { GiftIcon } from '@/components/ui/icons/GiftIcon'
import { TimerIcon } from '@/components/ui/icons/TimerIcon'
import { TonIcon } from '@/components/ui/icons/TonIcon'

interface Props {
	leftTime: number
	totalGifts: number
	totalBet: number
}

export const Header: FC<Props> = ({ leftTime, totalGifts, totalBet }) => {
	return (
		<div className='grid grid-cols-3 justify-center gap-3 font-semibold px-5'>
			<p className='flex items-center justify-center gap-1 p-2 bg-dark-gray rounded-3xl'>
				<span>
					{leftTime !== -1
						? `${Math.floor(leftTime / 60)
								.toString()
								.padStart(2, '0')}:${Math.floor(leftTime % 60)
								.toString()
								.padStart(2, '0')}`
						: '-'}
				</span>

				<TimerIcon />
			</p>

			<p className='flex items-center justify-center gap-1 p-2 bg-dark-gray rounded-3xl'>
				<span>{totalGifts} / 100</span>
				<GiftIcon color='#fff' />
			</p>

			<p className='flex items-center justify-center gap-1 p-2 bg-dark-gray rounded-3xl'>
				<span>{fromNano(totalBet)}</span>
				<TonIcon width={16} height={16} />
			</p>
		</div>
	)
}
