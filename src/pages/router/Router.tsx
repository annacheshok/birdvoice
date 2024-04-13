import { Route, Routes } from "react-router-dom"
import { ERoute } from "../../shared/lib/constants"
import { Main } from "../Main"
import { HistoryRecognition } from "../HistoryRecognition"
import { Settings } from "../Settings"
import { SignIn } from "../SingIn"
import { SignUp } from "../SignUp"
import { RecognitionService } from "../RecognitionService"

const Router = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Main />}
            />
            <Route
                path={ERoute.RECOGNITION_SERVICE}
                element={<RecognitionService />}
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