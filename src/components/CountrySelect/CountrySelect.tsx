import * as React from "react"
import { ICountryData } from "../../helpers/CountriesData"
import { List, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { CloseIcon } from "../../assets/icons/CloseIcon"
import { CountryItem } from "./CountryItem"
import { CountrySearchInput } from "./CountrySearchInput"

interface CountrySelectProps {
	onChangeCountry: (countryCode: string) => void
	selected?: string
	countries: ICountryData[]
}

export const CountrySelect = ({
	onChangeCountry,
	selected,
	countries
}: CountrySelectProps) => {
	const initValue = selected ? countries.find((c) => c.alpha2 === selected) : null
	const [value, setValue] = React.useState<ICountryData | null>(null)
	const [phone, setPhone] = React.useState<number | null>(null)
	const [filteredCountries, setFilteredCountries] =
		React.useState<ICountryData[]>(countries)

	console.log({ value, phone })

	let timer: ReturnType<typeof setTimeout>

	React.useEffect(() => {
		if (initValue) {
			setValue(initValue)
			setPhone(initValue.code)
		}
	}, [initValue])

	const handleSearch = (searchQuery: string) => {
		clearTimeout(timer)

		timer = setTimeout(() => {
			const filtered = countries.filter(
				(country) =>
					country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					country.code.toString().includes(searchQuery.toLowerCase())
			)
			setFilteredCountries(filtered)
		}, 300)
	}

	return (
		<Box
			sx={{
				height: "100%",
				backgroundColor: "countryListBg.main",
				position: "relative",
				overflow: "hidden"
			}}
		>
			<Box sx={{ position: "sticky", top: 0, zIndex: 4, overflow: "hidden" }}>
				<Box display='flex' alignItems='center' sx={{ pt: 2, pb: 2, color: "white" }}>
					<Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
						<Typography
							display='flex'
							justifyContent='center'
							sx={{ fontSize: "18px", fontWeight: "600", textAlign: "center" }}
						>
							Select country
						</Typography>
					</Box>
					<Box sx={{ position: "absolute", right: "20px", top: "16px", width: "28px" }}>
						<CloseIcon />
					</Box>
				</Box>

				<CountrySearchInput placeholder='Search' onChange={handleSearch} />
			</Box>
			<Box
				sx={{
					height: "calc(100vh - 120px)",
					overflowY: "auto",
					position: "relative",
					zIndex: 0,
					pb: 12
				}}
			>
				<List>
					{filteredCountries.map((country) => (
						<CountryItem
							key={country.id}
							countryData={country}
							setValue={setValue}
							setPhone={setPhone}
							onChangeCountry={onChangeCountry}
						/>
					))}
				</List>
			</Box>
		</Box>
	)
}
