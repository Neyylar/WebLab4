import React, {ContextType, useContext} from "react";
import {CustomTheme, CustomThemeContext, useCustomTheme} from "./CustomThemeProvider";
import {Select_Styled} from "./Select.styled";

const ThemedSelect = () => {

    const { themeMode, setThemeMode } = useCustomTheme()
    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setThemeMode(e.target.value as CustomTheme);
    };

    console.log("THEME MODE: ", themeMode);
    return (
        <Select_Styled onChange={handleThemeChange} className="select">
            <option selected value="light">Light theme</option>
            <option value="dark">Dark theme</option>
            <option value="createch">Createch theme</option>
            <option value="anime">Anime theme</option>
        </Select_Styled>
    );
}
export default ThemedSelect;
