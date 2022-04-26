import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "./ProvideAuth";
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "navigation/CONSTANTS";
import { IconButton, Typography, TextField } from "@material-ui/core";
import LoadingButton from "components/LoadingButton";
import { makeStyles } from "@material-ui/core";
import { Home, MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        // input label when focused
        "& label.Mui-focused": {
            color: "orange",
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: "black",
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: "black",
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "black",
            },
        },
    },
});

var LoginContainer = () => {
    let style = {
        padding: 40,
        width: 400,
        height: 510,
        backgroundColor: "aliceblue",
        margin: "50px auto",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "5px",
        textAlign: "center",
    };
    return (
        <>
            <div style={style} color="default">
                <LoginAvator />
                <LoginTitle />
                <LoginController />
                <AccessorTools />
            </div>
        </>
    );
};

var LoginAvator = () => {
    let style = { width: 200, height: 200 };
    return <img alt="Remy Sharp" src={require("../../assets/images/logo.png")} style={style} />;
};

var LoginTitle = () => {
    return (
        <Typography style={{ margin: 10 }} variant="h4">
            Login Form
        </Typography>
    );
};

var LoginController = () => {
    const classes = useStyles();
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    let { from } = location.state || { from: { pathname: "/" } };
    console.log("SS:: req came from:", from);
    let login = () => {
        setIsLoading(true);
        console.log("SS:: login btn clicked...");
        auth.signin().then((res) => {
            // history.replace(from);
            // setIsLoading(false);
            setTimeout(() => {
                history.replace(from);
                setIsLoading(false);
            }, 2000);
            console.log("SS:: logged in successfully by:", res);
        });
    };
    return (
        <div style={{ paddingTop: 25, display: "grid", rowGap: "22" }}>
            {from.pathname != "/" && <span style={{ color: "red" }}>You must log in to view the page: {from.pathname}</span>}

            <TextField fullWidth className={classes.root} id="UserName" label="UserName" variant="standard" />
            <TextField
                fullWidth
                className={classes.root}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <LoadingButton style={{ marginTop: 30 }} isLoading={isLoading} onClick={login}>
                Log in
            </LoadingButton>
        </div>
    );
};

var AccessorTools = () => {
    return (
        <div style={{ margin: 10 }}>
            <IconButton aria-label="MoreHoriz" color="secondary">
                <MoreHoriz />
            </IconButton>
            <LinkRoute to={ROOT}>
                <IconButton aria-label="Home" color="secondary">
                    <Home />
                </IconButton>
            </LinkRoute>
            <IconButton aria-label="MoreHoriz" color="secondary">
                <MoreHoriz />
            </IconButton>
        </div>
    );
};

export default function Login() {
    return <LoginContainer />;
}
