import * as React from "react"
import { createRoot } from "react-dom/client"

import { Chat } from "./chat"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
)
