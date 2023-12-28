import { ICountryData } from "../../helpers/CountriesData"
import {
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText
} from "@mui/material"

interface CountryItemProps {
	countryData: ICountryData
	setValue: (value: ICountryData) => void
	setPhone: (code: number) => void
	onChangeCountry: (alpha2: string) => void
}

export const CountryItem: React.FC<CountryItemProps> = ({
	countryData,
	setValue,
	setPhone,
	onChangeCountry
}) => {
	const { alpha2, code, name } = countryData

	const handleItemClick = () => {
		setValue?.(countryData)
		setPhone?.(code)
		onChangeCountry?.(alpha2)
	}

	return (
		<>
			<ListItem button onClick={handleItemClick}>
				<ListItemIcon>
					<img
						loading='lazy'
						width='40'
						srcSet={`https://flagcdn.com/w40/${alpha2?.toLowerCase()}.png 2x`}
						src={`https://flagcdn.com/w20/${alpha2?.toLowerCase()}.png`}
						alt='countryflag'
					/>
				</ListItemIcon>
				<ListItemText sx={{ color: "backgroundMain.main" }} primary={name} />
				<ListItemSecondaryAction sx={{ color: "textGray.lightShade" }}>
					+{code}
				</ListItemSecondaryAction>
			</ListItem>
		</>
	)
}
