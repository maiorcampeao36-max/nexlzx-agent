import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app.tryfiremark.com/mcp",
  description: "Track how often AI assistants name your brand and cite your site, versus competitors.",
  auth: connect("app.tryfiremark.com/" + process.env.VERCEL_PROJECT_ID),
});
