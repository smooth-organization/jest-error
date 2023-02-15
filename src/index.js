import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const rootContainer = createRoot(container);

rootContainer.render(<App />);
