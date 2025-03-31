export function GiftIcon({ color }: { color: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			width='20'
			height='20'
			viewBox='0 0 25 24'
		>
			<path
				d='M11.933 7.206H10.49c-.74 0-1.31-.186-1.718-.56-.407-.373-.612-.814-.612-1.318 0-.492.164-.877.493-1.157.328-.28.754-.418 1.277-.418.552 0 1.026.194 1.418.582.392.389.586.911.586 1.565v1.306h1.803V5.9c0-.654.071-1.176.463-1.565a1.95 1.95 0 0 1 1.427-.582c.515 0 .937.138 1.265.418.329.28.493.665.493 1.157 0 .504-.206.945-.612 1.318-.407.374-.975.56-1.714.56h-1.322 4.477c.272-.254.485-.552.642-.892.157-.34.235-.71.235-1.116 0-.594-.15-1.12-.448-1.583a3.135 3.135 0 0 0-1.202-1.09 3.603 3.603 0 0 0-1.688-.392c-.687 0-1.291.175-1.825.526-.53.347-.915.844-1.15 1.482-.239-.638-.623-1.135-1.157-1.482-.534-.35-1.143-.526-1.83-.526-.616 0-1.176.13-1.68.392a3.094 3.094 0 0 0-1.205 1.09c-.299.463-.448.99-.448 1.583 0 .407.078.776.235 1.116.157.34.37.638.642.892h4.6Z'
				fill={color}
			/>
			<path
				d='M13.736 21.325v-7.82H19.9a.687.687 0 0 0 .153-.016v5.428a2.409 2.409 0 0 1-2.408 2.408h-3.909Zm-1.806-7.82H5.613v5.412a2.409 2.409 0 0 0 2.408 2.408h3.909v-7.82ZM5.012 7.186c-.665 0-1.202.538-1.202 1.203v2.407c0 .665.537 1.203 1.202 1.203h6.918V8.046a.6.6 0 0 1 .283-.508l.46-.29a.31.31 0 0 1 .32 0l.46.29a.6.6 0 0 1 .283.508V12H19.9c.052 0 .105.003.153.015V12h.601c.665 0 1.202-.538 1.202-1.203V8.39c0-.665-.537-1.203-1.202-1.203H5.012Z'
				fill={color}
			/>
		</svg>
	)
}
