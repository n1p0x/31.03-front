import { openLink } from '@telegram-apps/sdk-react'
import { FC } from 'react'

import { Nfts } from '@/components/deposit/Nfts'
import { Page } from '@/components/Page'
import { Button } from '@/components/ui/Button'

export const DepositPage: FC = () => {
	return (
		<Page>
			<div className='px-2 mt-2'>
				<Nfts />
			</div>

			<div className='flex items-center justify-center gap-1 w-full h-10 bg-dark-gray absolute bottom-20 text-gray text-sm'>
				<span>You don't see your Gifts? Transfer it to</span>

				<Button
					className='text-light-blue'
					onClick={() => openLink('https://t.me/gift_rouletton')}
				>
					@gift_rouletton
				</Button>
			</div>
		</Page>
	)
}
