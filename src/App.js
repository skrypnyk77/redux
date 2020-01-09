import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers";
import MainComponent from "./components/MainComponent";

export const action_Change_FirstName = "action_Change_FirstName";
export const action_Change_SecondName = "action_Change_SecondName";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </div>
  );
}

export default App;
