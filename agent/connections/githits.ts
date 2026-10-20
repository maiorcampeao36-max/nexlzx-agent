import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.githits.com",
  description: "Search open-source code, documentation, and package data across versions.",
  auth: connect("mcp.githits.com/" + process.env.VERCEL_PROJECT_ID),
});
