import { create } from 'zustand'

import { IModalStore } from '@/types/modal.type'

export const useWithdrawModal = create<IModalStore>(set => ({
	modalOpen: false,
	openModal: () => set(state => ({ ...state, modalOpen: true })),
	closeModal: () => set(state => ({ ...state, modalOpen: false })),
}))
