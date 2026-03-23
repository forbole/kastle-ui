import type { Preview } from "@storybook/react-native-web-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

// Global font setup
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  setTimeout(() => {
    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <style>
        * { font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif !important; }
      </style>
    `,
    );
  }, 500);
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      options: {
        kastle: { name: "Kastle", value: "#051D27" },
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    layout: "fullscreen", // Remove default padding
  },
  initialGlobals: {
    backgrounds: { value: "kastle" },
    viewport: { value: "iphone14", isRotated: false },
  },
};

export default preview;
