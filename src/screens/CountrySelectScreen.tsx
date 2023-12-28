import { CountriesData } from "../helpers/CountriesData";
import { BaseScreen } from "./bases/BaseScreen";
import { AccountHead } from "../components/AccountHead";
import { BottomMenu } from "../components/BottomMenu";
import { CountrySelect } from "../components/CountrySelect/CountrySelect";

export const CountrySelectScreen = () => {
  return (
    <BaseScreen
      sx={{ overflow: "hidden" }}
      head={<AccountHead />}
      bottom={<BottomMenu />}
    >
      <CountrySelect
        countries={CountriesData.countries}
        onChangeCountry={() => {}}
      />
    </BaseScreen>
  );
};
