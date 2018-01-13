// Imports
const client = require("./client.js");

// Resolvers
const resolvers = {
  Query: {
    // Account
    account: (root, args) => {
      const res = client.database.getAccounts([args.username]);
      return res[0];
    },
    getAccounts: (root, args) => {
      return client.database.getAccounts(args.usernames);
    },
    getDiscussions: async (root, args) => {
      const {
        by = "created",
        query: { tag = "", limit = 25, truncate = 0 } = {}
      } = args;
      const query = {
        tag: tag,
        limit: limit,
        truncate_body: truncate
      };
      const discussions = await client.database.getDiscussions(by, query);
      return discussions;
    }
  }
};

module.exports = resolvers;