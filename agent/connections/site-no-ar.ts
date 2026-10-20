import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sitenoar.dev",
  description: "Publish websites that an agent writes and get back a public link.",
  auth: connect("mcp.sitenoar.dev/" + process.env.VERCEL_PROJECT_ID),
});
