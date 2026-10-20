import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.statsig.com/v1/mcp",
  description: "Manage feature flags and experiments.",
  auth: connect("api.statsig.com/" + process.env.VERCEL_PROJECT_ID),
});
