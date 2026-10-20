import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://underway.life/mcp/account",
  description: "Interview founders about their working day and set up video or podcast recordings.",
  auth: connect("underway.life/" + process.env.VERCEL_PROJECT_ID),
});
