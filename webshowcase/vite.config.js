import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), react()],
  base: command === "build" ? "/computer_vision_projects/" : "/",
}))