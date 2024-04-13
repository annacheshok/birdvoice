import { Route, Routes } from "react-router-dom"
import { ERoute } from "../../shared/lib/constants"
import { Main } from "../Main"
import { HistoryRecognition } from "../HistoryRecognition"
import { Settings } from "../Settings"
import { SignIn } from "../SingIn"
import { SignUp } from "../SignUp"

const Router = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Main />}
            />
            <Route
                path={ERoute.RECOGNITION_SERVICE}
                element={<Main />}
            />
            <Route
                path={ERoute.HISTORY_RECOGNITION}
                element={<HistoryRecognition />}
            />
            <Route
                path={ERoute.SETTINGS}
                element={<Settings />}
            />
            <Route
                path={ERoute.SIGN_IN}
                element={<SignIn />}
            />
            <Route
                path={ERoute.SIGN_UP}
                element={<SignUp />}
            />
        </Routes>
    );
};

export default Router;