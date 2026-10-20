import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.timesheet.io",
  description: "Track time, tasks, breaks, and expenses, and pull timesheet reports.",
  auth: connect("mcp.timesheet.io/" + process.env.VERCEL_PROJECT_ID),
});
