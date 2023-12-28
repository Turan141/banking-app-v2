export const formatNumberWithSpace = (total: string) => {
	if (!total) return ""

	return parseFloat(total)
		.toLocaleString("en-US", { minimumFractionDigits: 2 })
		.replace(/,/g, " ")
}