import { useEffect, useState } from "preact/hooks"
import MenuItem from "../Buttons/ButtonVariations/MenuItemButton"
import { Box } from "@mui/material"
import { MenuButtons } from "../Buttons/ButtonLayouts/SideMenuButtons"

const SideMenu = () => {
	const [menuButtons, setMenuButtons] = useState<IMenuButton[]>([])

	useEffect(() => {
		setMenuButtons(MenuButtons)
	}, [])

	return (
		<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
			{menuButtons.map((button, index) => (
				<MenuItem key={index} buttonProps={button} />
			))}
		</Box>
	)
}

export default SideMenu
