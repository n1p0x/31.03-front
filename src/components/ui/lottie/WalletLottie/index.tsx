export function WalletLottie() {
	return (
		// @ts-ignore
		<tgs-player
			src={`${import.meta.env.VITE_STATIC_URL}/sticker/wallet.json`}
			loop
			autoplay
			className='w-[156px] h-[156px]'
		/>
	)
}
