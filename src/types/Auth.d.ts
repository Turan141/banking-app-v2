declare interface IAuthData {
	phone: string
	password: string
	smsCode: string
	callCode: string
}

declare interface IAuthDataPacket {
	field: keyof IAuthData
	value: string | number
}

declare interface IAuthStepData {
	label: string
	icon: JSX.Element
	type: string
	id: keyof IAuthData
}
