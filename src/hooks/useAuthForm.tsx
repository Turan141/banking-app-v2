import { useEffect, useState } from "react"
import { S_AUTH_DATA_ACTIVE_STEP, S_AUTH_DATA_SET_FIELD } from "../managers/AuthManager"


interface IAuthInputHook {
	value: string
	onChange: (value: string) => void
	reset: () => void
}

export const useAuthInput = (
	field: keyof IAuthData,
	initialValue: string
): IAuthInputHook => {
	const [value, setValue] = useState<string>(initialValue)

	useEffect(() => {
		S_AUTH_DATA_ACTIVE_STEP.subscribe(() => {
			setValue("")
		}, "useAuthInput")
		return () => S_AUTH_DATA_ACTIVE_STEP.unsubscribe("useAuthInput")
	}, [])

	const onChange = (fieldValue: string) => {
		setValue(fieldValue)
		S_AUTH_DATA_SET_FIELD.invoke({ field, value: fieldValue })
	}

	const reset = () => setValue("")

	return { value, onChange, reset }
}
