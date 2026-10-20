import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.ticktick.com",
  description: "Search, create, and manage tasks and habits.",
  auth: connect("mcp.ticktick.com/" + process.env.VERCEL_PROJECT_ID),
});
