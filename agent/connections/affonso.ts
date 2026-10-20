import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.affonso.io/mcp",
  description: "Manage affiliate programs, referrals, commissions, and payouts.",
  auth: connect("api.affonso.io/" + process.env.VERCEL_PROJECT_ID),
});
