import { createRoot } from "react-dom/client";

import App from "App";

const rootEl = document.getElementById("root") as HTMLDivElement;
const container = createRoot(rootEl);

container.render(<App />);
