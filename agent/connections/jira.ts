import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.atlassian.com/v2/mcp",
  description: "Manage issues and projects in your Jira sites.",
  auth: connect("mcp.atlassian.com/" + process.env.VERCEL_PROJECT_ID),
});
