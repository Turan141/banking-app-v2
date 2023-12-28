import { Box } from "@mui/material"
import { IconVButton } from "./Buttons/ButtonVariations/IconVButton"
import { useEffect, useState } from "preact/hooks"
import { IBottomMenu, mocked_bottom_menu } from "./Buttons/ButtonLayouts/BottomBarButtons"

export const BottomMenu = () => {
	const [bottomMenuBtns, setBottomMenuBtns] = useState<IBottomMenu[]>([])

	useEffect(() => {
		setBottomMenuBtns(mocked_bottom_menu)
	}, [])

	return (
		<Box
			sx={{
				backgroundColor: "backgroundMain.main",
				display: "flex",
				width: "100%",
				bottom: "0",
				color: "iconVButton.main",
				pr: 0,
				pl: 0
			}}
		>
			{bottomMenuBtns?.map((item, index) => (
				<IconVButton key={index} icon={item.icon} title={item.title} selected={item.selected} />
			))}
		</Box>
	)
}