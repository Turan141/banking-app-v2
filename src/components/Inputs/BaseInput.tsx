import React, { useRef, useEffect } from "react"
import InputBase from "@mui/material/InputBase"

interface BaseInputProps {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	align?: "left" | "right" // Alignment of text: 'left' or 'right'
	width?: string // Width of the input
	restProps?: any
	shouldAutoFocus?: boolean
}

export const BaseInput: React.FC<BaseInputProps> = ({
	value,
	onChange,
	placeholder = "",
	align = "left",
	width = "100%",
	shouldAutoFocus = false,
	...restProps
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldAutoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldAutoFocus]);
	
	return (
		<InputBase
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			autoFocus={shouldAutoFocus}
			inputRef={inputRef}
			inputProps={{
				sx: {
					textAlign: align,
					width,
					color: "#FFFFFF",
					fontSize: "18px",
					letterSpacing: "1px",
					fontWeight: 400,
					maxWidth: "100%",
					flex: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderBottom: "1px solid gray",
					transition: "border-bottom 0.3s ease-in-out",
					"&:focus": {
						borderBottom: "1px solid #FF0000"
					}
				}
			}}
			{...restProps}
		/>
	)
}
