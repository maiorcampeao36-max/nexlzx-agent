import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://sekreton.com/mcp",
  description: "Run parallel sandboxed coding tasks that plan, implement, and verify changes on branches.",
  auth: connect("sekreton.com/" + process.env.VERCEL_PROJECT_ID),
});
