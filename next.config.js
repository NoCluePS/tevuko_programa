/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "0",
          },
        ],
      },
    ];
  },
};

export default config;
