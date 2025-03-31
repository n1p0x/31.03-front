export interface IModal {
	modalOpen: boolean
	closeModal: () => void
}

export interface IModalStore extends IModal {
	openModal: () => void
}
