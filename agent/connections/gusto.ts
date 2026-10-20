import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.api.gusto.com/anthropic",
  description: "Access payroll and workforce information.",
  auth: connect("mcp.api.gusto.com/" + process.env.VERCEL_PROJECT_ID),
});
