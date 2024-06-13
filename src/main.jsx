import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.jsx";
import ContexteAll from "./Context.jsx";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ContexteAll>
        <App />
      </ContexteAll>
    </ReduxProvider>
  </React.StrictMode>
);
