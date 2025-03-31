import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { useDepositModal } from '@/store/useDepositModal'
import { useWithdrawModal } from '@/store/useWithdrawModal'

interface Props {
	children: React.ReactNode
}

export const Page: FC<Props> = ({ children }) => {
	const depositModalOpen = useDepositModal(state => state.modalOpen)
	const withdrawModalOpen = useWithdrawModal(state => state.modalOpen)

	return (
		<div
			className={twMerge(
				'mb-24',
				(depositModalOpen || withdrawModalOpen) && 'blurred'
			)}
		>
			{children}
		</div>
	)
}
