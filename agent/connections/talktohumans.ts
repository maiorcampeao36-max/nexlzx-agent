import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.talktohumans.app/mcp",
  description: "Read and send messages from your LinkedIn inbox and manage contacts.",
  auth: connect("api.talktohumans.app/" + process.env.VERCEL_PROJECT_ID),
});
