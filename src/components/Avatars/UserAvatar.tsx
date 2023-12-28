import { Box, Typography } from "@mui/material"
import { CustomAvatar } from "./CustomAvatar"

interface UserAvatarProps {
	name: string
	avatarUrl?: string
}

export const UserAvatar = ({ name, avatarUrl }:UserAvatarProps) => {
	return (
		<Box flexDirection='column' display='flex' alignItems='center' textAlign='center'>
			<CustomAvatar alt='userAvatar' name={name} src={avatarUrl} size={"56px"} />
			<Typography
				sx={{ color: "iconVButton.main", wordBreak: "break-word" }}
				mt={1}
				fontSize='1rem'
			>
				{name}
			</Typography>
		</Box>
	)
}