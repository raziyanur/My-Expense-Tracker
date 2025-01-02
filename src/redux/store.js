import { createStore } from "redux";
import rootReducer from "./reducers";  // 引入你的 reducers

const store = createStore(rootReducer);  // 创建 Redux store

export default store;
