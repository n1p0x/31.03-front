import { ComponentType } from 'react'

import { DepositPage } from '@/pages/DepositPage'
import { InfoPage } from '@/pages/InfoPage'
import { MyGiftsPage } from '@/pages/MyGiftsPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { RoulettePage } from '@/pages/RoulettePage'

interface Route {
	path: string
	Component: ComponentType
	title?: string
	icon?: Element
}

export const ROUTE_DEPOSIT = '/deposit'
export const ROUTE_ROULETTE = '/roulette'
export const ROUTE_MY_GIFTS = '/my'
export const ROUTE_PROFILE = '/profile'
export const ROUTE_INFO = '/info'

export const routes: Route[] = [
	{ path: ROUTE_DEPOSIT, Component: DepositPage },
	{ path: ROUTE_ROULETTE, Component: RoulettePage },
	{ path: ROUTE_MY_GIFTS, Component: MyGiftsPage },
	{ path: ROUTE_PROFILE, Component: ProfilePage },
	{ path: ROUTE_INFO, Component: InfoPage },
]
