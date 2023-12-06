import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        gossamer: {
          "50": "#eefbf6",
          "100": "#d5f6e8",
          "200": "#aeecd4",
          "300": "#79dcbe",
          "400": "#43c4a0",
          "500": "#1d9c7d",
          "600": "#12896e",
          "700": "#0f6d5a",
          "800": "#0e5748",
          "900": "#0d473d",
          "950": "#062823",
        },
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
};
