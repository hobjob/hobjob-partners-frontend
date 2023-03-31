export interface Partner {
	_id: string

	email: string
	name: string

	buy: {
		sum: number,
		count: number
	},
	subscribe: {
		sum: number,
		count: number
	},
}