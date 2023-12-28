import { Box } from "@mui/material"

interface ISpacerProps{
    size?:string,
    grow?:string
}
export const Spacer = ({size,grow}:ISpacerProps) =>{
    return <Box sx={{
        minHeight:size ?? "auto",
        minWidth:size ?? "auto",
        flexGrow:grow ?? undefined,
        //outline:"1px solid cyan"
    }}></Box>
}

