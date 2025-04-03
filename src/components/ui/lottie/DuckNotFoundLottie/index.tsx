export function DuckNotFoundLottie() {
	return (
		// @ts-ignore
		<tgs-player
			src={`${import.meta.env.VITE_STATIC_URL}/sticker/duck.json`}
			className='flex items-center justify-center w-[156px] h-[156px]'
			mode='normal'
			loop
			autoplay
		/>
	)
}
