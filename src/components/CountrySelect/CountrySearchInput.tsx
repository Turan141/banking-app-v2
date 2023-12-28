import * as React from "react"
import TextField from "@mui/material/TextField"
import { Box } from "@mui/material"
import { Magnifier } from "../../assets/icons/Magnifier"

interface SearchInputProps {
	placeholder: string
	onChange: (value: string) => void
}

export const CountrySearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
	const handleInputChange = (e: any) => {
		const value = e.target.value
		onChange(value)
	}

	return (
		<Box
			display='flex'
			alignItems='center'
			fullWidth
			sx={{
				backgroundColor: "countryListBg.main",
				height: "40px"
			}}
		>
			<Box display='flex' alignItems='center' sx={{ width: "20px", ml: 1 }}>
				<Magnifier />
			</Box>
			<Box sx={{ pl: 2, pr: 2, width: "100%" }}>
				<TextField
					placeholder={placeholder}
					onChange={handleInputChange}
					variant='standard'
					sx={{
						width: "100%"
					}}
					InputProps={{
						style: { color: "white" },
						disableUnderline: true
					}}
				/>
			</Box>
		</Box>
	)
}