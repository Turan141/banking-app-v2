import { Box } from "@mui/material"
import { AuthInput } from "./AuthInput"
import { AuthHelp } from "./AuthHelp"
import { AuthNextButton } from "./AuthActionButtons"
import { AuthErrors } from "./AuthErrors"

interface IAuthStepProps {
	currentStep: IAuthStepData
}

export const AuthStep: React.FC<IAuthStepProps> = ({ currentStep }) => {

	return (
		<Box fullWidth mt={4}>
			<AuthInput currentStep={currentStep} />
			<AuthErrors />
			<AuthHelp step={currentStep.id} />
			<AuthNextButton />
		</Box>
	)
}
