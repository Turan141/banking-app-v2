import { Box } from "@mui/material"
import SideMenu from "./SideMenu/SideMenu"
import LanguageSelect from "./LanguangeSelect"
import { ChatWithBank } from "./ChatWithBank"
import { Spacer } from "./Spacer"
import { UserAvatar } from "./Avatars/UserAvatar"

interface ISidePanelProps{
	width:string
}
export const SidePanel = ({width}:ISidePanelProps) => {
	return (
		<Box
			sx={{
				position: "absolute",
				display: "flex",
				flexDirection: "column",
				top: 0,
				left: 0,
				zIndex: 1,
				backgroundColor: "contentPrimary.main",
				//boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.70) inset",
				height: "100vh",
				width: width,
				paddingTop:"env(safe-area-inset-top)",
				paddingLeft:"env(safe-area-inset-left)",
				paddingRight:"env(safe-area-inset-right)",
			}}
		>
			<LanguageSelect />
			<Box sx={{
				flexGrow:1,
				position:"relative",
				overflowX:"hidden",
				overflowY:"scroll",
				display:"flex",
				flexDirection: "column",
				"&>div":{
					position: "absolute",
					width:"100%"
				}
			}}><div>
				<Spacer size="42px" />
				<UserAvatar
					name='Pavel Shveicarskij'
					avatarUrl='https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk'
				/>
				<Spacer size="42px" />
				<SideMenu />
			</div></Box>
			<ChatWithBank />
		</Box>
	)
}
