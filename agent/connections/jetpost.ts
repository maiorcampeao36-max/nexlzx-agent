import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://www.jetpost.com/mcp",
  description: "Write, share, comment on, and edit team notes.",
  auth: connect("www.jetpost.com/" + process.env.VERCEL_PROJECT_ID),
});
