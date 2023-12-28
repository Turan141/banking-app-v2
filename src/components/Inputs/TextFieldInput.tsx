import React, { useRef, useEffect } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

interface TextFieldInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  align?: "left" | "right";
  width?: string;
  labelColor?: string;
  shouldAutoFocus?: boolean;
  restProps?: any;
}

export const TextFieldInput: React.FC<TextFieldInputProps> = ({
  value,
  onChange,
  placeholder = "",
  align = "left",
  width = "100%",
  labelColor = "gray",
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
    <FormControl fullWidth sx={{ width }}>
      <InputLabel htmlFor="custom-textfield" style={{ color: labelColor }}>
        {placeholder}
      </InputLabel>
      <Input
        id="custom-textfield"
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        fullWidth
        disableUnderline
        autoFocus={shouldAutoFocus}
        sx={{
          textAlign: align,
          width: "100%",
          color: "#FFFFFF",
          fontSize: "18px",
          letterSpacing: "1px",
          fontWeight: 400,
          maxWidth: "100%",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiInputBase-input": {
            borderBottom: "1px solid gray",
            transition: "border-bottom 0.3s ease-in-out",
            "&:focus": {
              borderBottom: "1px solid #FF0000",
            },
          },
        }}
        {...restProps}
      />
    </FormControl>
  );
};
