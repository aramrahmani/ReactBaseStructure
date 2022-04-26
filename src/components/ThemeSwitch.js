import React from "react";
//import { dark, light } from "@material-ui/core/styles/createPalette";
import { Fab } from "@material-ui/core";
import { Brightness4Rounded as DarkMode } from "@material-ui/icons";
import { Brightness5Rounded as LightMode } from "@material-ui/icons";

export const ThemeSwitch = ({ darkState, handleThemeChange }) => {
    let style = {
        float: "right",
        margin: "20px 20px 0 0",
    };
    let stateTitle = darkState ? "dark Theme" : "light Theme";
    return (
        <div style={style}>
            <Fab size="medium" variant="extended" color="primary" aria-label="add" onClick={handleThemeChange}>
                {darkState ? <DarkMode sx={{ mr: 1 }} /> : <LightMode />}
                {stateTitle}
            </Fab>
        </div>
    );
};
