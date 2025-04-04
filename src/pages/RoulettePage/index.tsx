import { fromNano } from '@ton/core'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { WinnerModal } from '@/components/modals/WinnerModal'
import { Page } from '@/components/Page'
import { Header } from '@/components/roulette/Header'
import { Players } from '@/components/roulette/Players'
import { Spin } from '@/components/roulette/Spin'
import { Wheel } from '@/components/roulette/Wheel'
import { Loading } from '@/components/ui/Loading'
import { useTgData } from '@/hooks/useTgData'
import { ISpinPlayer } from '@/types/game.type'
import { getSpinContent } from '@/utils/game'
import { getLeftTime } from '@/utils/time'
import { useRound } from './hooks/useRound'
import { useWinner } from './hooks/useWinner'

export const RoulettePage: FC = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [leftTime, setLeftTime] = useState<number>(-1)
	const [showSpin, setShowSpin] = useState<boolean>(false)
	const [spinContent, setSpinContent] = useState<ISpinPlayer[]>([])

	const { userId, initData } = useTgData()
	const { data: round, isLoading, refetch: refetchRound } = useRound(initData)
	const {
		data: winner,
		isError,
		refetch: refetchWinner,
	} = useWinner(round?.id, initData)

	useEffect(() => {
		if (round?.startedAt) {
			const leftTime = getLeftTime(round.startedAt, 3 * 60 * 1000)
			setLeftTime(leftTime)
		}
	}, [round])

	useEffect(() => {
		if (leftTime > 0) {
			const interval = setInterval(
				() => setLeftTime(prev => (prev - 1 > 0 ? prev - 1 : 0)),
				1000
			)
			return () => clearInterval(interval)
		}
	}, [leftTime])

	useEffect(() => {
		if (leftTime === 0) refetchWinner()
	}, [leftTime])

	useEffect(() => {
		if (leftTime % 5 === 1) refetchRound()
	}, [leftTime])

	// start spinning
	useEffect(() => {
		if (winner && !isError && round?.players && round.startedAt) {
			if (getLeftTime(round.startedAt, 3 * 60 * 1000) !== 0) return

			const content = getSpinContent(
				round.players,
				winner,
				round.totalTickets
			)
			setSpinContent(content)

			setShowSpin(true)
		}
	}, [winner])

	useEffect(() => {
		if (showSpin) {
			const timeout = setTimeout(() => {
				refetchRound()
				setModalOpen(true)
				setShowSpin(false)
			}, 11000)
			return () => clearTimeout(timeout)
		}
	}, [showSpin])

	return (
		<Page>
			{isLoading ? (
				<Loading className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white' />
			) : round ? (
				<>
					<div
						className={twMerge(
							'flex flex-col items-center gap-1 mt-2 mb-24 overflow-hidden',
							modalOpen && 'blurred'
						)}
					>
						<Header
							leftTime={leftTime}
							totalGifts={round.totalGifts}
							totalBet={round.totalBet}
						/>

						<div className='flex justify-center items-center h-[300px] max-h-[300px] mb-2 w-full'>
							<AnimatePresence mode='wait'>
								{showSpin && round.players ? (
									<motion.div
										key='spin'
										variants={{
											initial: {
												opacity: 0,
												scale: 0.99,
											},
											animate: { opacity: 1, scale: 1 },
											exit: { opacity: 0, scale: 0.95 },
										}}
										initial='initial'
										animate='animate'
										exit='exit'
										transition={{ duration: 0.5 }}
										className='absolute w-full'
									>
										<Spin spinContent={spinContent} />
									</motion.div>
								) : (
									<motion.div
										key='wheel'
										variants={{
											initial: {
												opacity: 0,
												scale: 0.99,
											},
											animate: { opacity: 1, scale: 1 },
											exit: { opacity: 0, scale: 0.95 },
										}}
										initial='initial'
										animate='animate'
										exit='exit'
										transition={{ duration: 0.5 }}
										className='absolute'
									>
										<Wheel
											totalBet={fromNano(round.totalBet)}
											totalTickets={round.totalTickets}
											players={round.players}
										/>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{!!round.totalTickets && (
							<Players
								totalTickets={round.totalTickets}
								players={round.players}
							/>
						)}
					</div>

					{modalOpen && winner?.userId == userId && (
						<WinnerModal
							totalBet={round.totalBet}
							modalOpen={modalOpen}
							closeModal={() => setModalOpen(false)}
						/>
					)}
				</>
			) : (
				<></>
			)}
		</Page>
	)
}
