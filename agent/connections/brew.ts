import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://brew.new/api/mcp",
  description: "Design, send, and automate on-brand emails and read their results.",
  auth: connect("brew.new/" + process.env.VERCEL_PROJECT_ID),
});
