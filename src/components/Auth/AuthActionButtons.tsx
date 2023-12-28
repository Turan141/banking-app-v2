import { Box, Button } from "@mui/material"
import { useState } from "preact/hooks"
import { S_AUTH_DATA_PROCESS_NEXT_ACTION } from "../../managers/AuthManager"

interface IAuthActionButtonsProps {
	isDisabled?: boolean
}

export const AuthBackButton = () => {
	return (
		<Box sx={{ height: "100px" }}>
			<Button>Back</Button>
		</Box>
	)
}

export const AuthNextButton: React.FC<IAuthActionButtonsProps> = ({ isDisabled }) => {
  //@ts-ignore
  const [isLoading, setIsLoading] = useState(false)

  const handleAuthNextBtn = async () => {
    setIsLoading(true)
    await S_AUTH_DATA_PROCESS_NEXT_ACTION.request()
    setIsLoading(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
      mt={2}
    >
      <Button
        variant='contained'
        sx={{
          display: "flex",
          justifyContent: "center",
          textTransform: "none",
          backgroundColor: "activeDot.main",
          borderRadius: "25px",
          width: "200px",
          height: "46px",
          fontSize: "16px",
          mt: 8,
          opacity: isDisabled ? 1 : 1, // Adjust opacity when disabled
          pointerEvents: isDisabled ? 'none' : 'auto' // Disable pointer events when disabled
        }}
        onClick={handleAuthNextBtn}
        disabled={isDisabled}
      >
        Next
      </Button>
    </Box>
  )
}
