//@ts-nocheck
import GD from "../GD";
import { Services } from "../utils/Services";
import { WSMessage } from "../net/constans";
import { getLocalStorage, setLocalStorage } from "../utils/Helpers";
import { LocalStorage } from "../enums/localStorage";
import { codeHTML, codeLineInnerHTML, codeLinesHTML, quoteHTML } from "../utils/Regex";
import { getAccordionSummaryUtilityClass, recomposeColor } from "@mui/material";
import { ClassNames } from "@emotion/react";