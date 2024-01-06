import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { muxInput } from "sanity-plugin-mux-input";

const config = defineConfig({
  projectId: "bbme92eq",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-12-10",
  basePath: "/admin",
  plugins: [deskTool(), muxInput({ mp4_support: "standard" })],
  schema: { types: schemas },
});

export default config;
