import { Box } from "@mui/material"
import {
	REQ_CURRENCIES_WITH_COUNTRY_CODE,
	REQ_CURRENCY_SYMBOLS,
	REQ_PAYMENT_SETTINGS_MOCK,
	REQ_TRANSLATIONS
} from "../../../managers/AccounHomeManager"
import { PopupScreenHeader } from "../../../components/PopupScreenHeader"
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../../../Presenter"
import { CurrencyItem } from "./CurrencyItem"
import { Loading } from "../../../components/Loading"

interface ICurrencySelectData {
	currencyFlag: string
	currencyName: string
	currencySign: string
}

export const CurrencySelectPopup = () => {
	const [paymentSettings] = REQ_PAYMENT_SETTINGS_MOCK.useRequest()
	const [translations] = REQ_TRANSLATIONS.useRequest()
	const [countriesWithCurrency] = REQ_CURRENCIES_WITH_COUNTRY_CODE.useRequest()
	const [currencySymbols] = REQ_CURRENCY_SYMBOLS.useRequest()

	const isLoading =
		!paymentSettings || !translations || !countriesWithCurrency || !currencySymbols

	const currencyList =
		["RUB", "CAD", "AUD", "AZN"] ?? paymentSettings?.["currency-list-investment-deposit"]

	const currencySelectList: ICurrencySelectData[] = currencyList?.map(
		(currency: string) => {
			return {
				currencyFlag: countriesWithCurrency?.[currency],
				currencyName: translations?.payments?.[`currency_${currency}`],
				currencySign: `(${currencySymbols?.[currency]})`
			}
		}
	)

	if (isLoading)
		return (
			<Box sx={{ backgroundColor: "depositScreenBG.main", height: "100%" }}>
				<Loading />
			</Box>
		)

	return (
		<Box sx={{ backgroundColor: "depositScreenBG.main", height: "100%" }}>
			<PopupScreenHeader
				title='Select currency'
				onClose={() =>
					S_PRESENT_SCREEN_ON_MAIN.invoke({
						screen: Screens.REQUEST_MONEY_SCREEN,
						animationDirection: "right"
					})
				}
			/>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					gap: "10px",
					mt: 2,
				}}
			>
				{currencySelectList?.map((currencyData, index) => (
					<CurrencyItem key={index} currencyData={currencyData} />
				))}
			</Box>
		</Box>
	)
}
