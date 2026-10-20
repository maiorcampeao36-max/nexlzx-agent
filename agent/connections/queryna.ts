import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app.queryna.com/api/mcp",
  description: "Review SEO, analytics, tracking, and ad performance, and create reports.",
  auth: connect("app.queryna.com/" + process.env.VERCEL_PROJECT_ID),
});
