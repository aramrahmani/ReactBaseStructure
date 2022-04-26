import React from "react";
import { useAuth } from "navigation/Auth/ProvideAuth";
import { Profile } from "./components/Profile";

export const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div>
            <Profile user={user} />
        </div>
    );
};
