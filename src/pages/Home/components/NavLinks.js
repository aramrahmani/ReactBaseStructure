import * as React from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import { DASHBOARD, LOGIN, PAGE1, USERPROFILE, ROOT } from "navigation/CONSTANTS";
import { Home, People, Input, Web, AccountCircle } from "@material-ui/icons";
import { LinkRoute } from "components/LinkRoute";

export const NavLinks = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "rgb(0 0 0 / 25%)",
                }}
            >
                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
                    <LinkRoute to={ROOT}>
                        <Tab icon={<Home />} label="Home" />
                    </LinkRoute>
                    <LinkRoute to={LOGIN}>
                        <Tab icon={<Input />} label="LOGIN" />
                    </LinkRoute>
                    <LinkRoute to={DASHBOARD}>
                        <Tab icon={<People />} label="Users" />
                    </LinkRoute>
                    <LinkRoute to={PAGE1}>
                        <Tab icon={<Web />} label="Page1" />
                    </LinkRoute>
                    <LinkRoute to={USERPROFILE}>
                        <Tab icon={<AccountCircle />} label="Profile" />
                    </LinkRoute>
                </Tabs>
            </Box>
        </>
    );
};
