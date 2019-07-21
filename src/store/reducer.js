import {combineReducers} from "redux"
import {reducer as EveryReducer} from "../pages/home/homepage/EveryDay/"
import {reducer as ListReducer} from "../pages/home/homepage/List/"
const reducer=combineReducers({
    EveryReducer,
    ListReducer
})
export default reducer