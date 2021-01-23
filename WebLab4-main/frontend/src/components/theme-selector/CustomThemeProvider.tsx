import React, {ChangeEvent, createContext, useContext, useState} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "../../styles/Theme";
export enum CustomTheme {
    dark = 'dark',
    light = 'light',
    createch = 'createch',
    anime = 'anime',
}

export type CustomThemeContextType = {
    themeMode: CustomTheme;
    setThemeMode: (CustomTheme: CustomTheme) => void;
}
export const CustomThemeContext = createContext<CustomThemeContextType>({ themeMode: CustomTheme.dark, setThemeMode: theme => console.warn('no theme provider')});
export const useCustomTheme = () => useContext(CustomThemeContext);


const CustomThemeProvider = (props: { children: React.ReactNode; }) => {
    const [themeMode, setThemeMode] = useState(CustomTheme.light);
    const customTheme = theme[themeMode];
    return (
        <CustomThemeContext.Provider value={{themeMode, setThemeMode}}>
            <ThemeProvider theme={customTheme}>
                {props.children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
};

export default CustomThemeProvider;