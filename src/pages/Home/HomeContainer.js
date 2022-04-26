import React from "react";
import HomeView from "./HomeView";
import { NavLinks } from "./components/NavLinks";
import { HomeHeader } from "./components/HomeHeader";

export function HomeContainer() {
    return (
        <div>
            <HomeHeader />
            <NavLinks />
            <HomeView />
        </div>
    );
}
