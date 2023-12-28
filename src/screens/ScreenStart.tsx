import { BaseScreen } from "./bases/BaseScreen"
import { AccountHead } from "../components/AccountHead"
import { Box } from "@mui/material"
import { BottomMenu } from "../components/BottomMenu";

export const ScreenStart = () => {
	return (
		<BaseScreen head={<AccountHead />} bottom={<BottomMenu />}>
			<Box
				sx={{
					display: "flex",
					padding: 3,
					justifyContent: "space-between"
				}}
			>
				
			</Box>
		</BaseScreen>
	)
}
