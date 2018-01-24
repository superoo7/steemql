const schema = `
extend type Query {
  # Get a list of posts/comments.
  getDiscussions(by: String, query: DiscussionQuery): [Discussion] 
  # Get a single post or comment by author.
  getContent(author: String!,permlink: String): Discussion
}

extend type Mutation {
  # Create post or comment::dsteem
  comment(comment: CommentInput!, key: String!): TransactionConfirmation
  # Comment with options::dsteem
  commentWithOptions(comment: CommentInput!, options: CommentOptions!, key: String!): TransactionConfirmation 
}

type Discussion {
  id: ID 
  author: String
  permlink: String
  category: String
  parent_author: String
  parent_permlink: String
  title: String
  body: String
  json_metadata: String 
  last_update: String
  created: String
  active: String
  last_payout: String
  depth: Int
  children: Int
  net_rshares: Int
  abs_rshares: Int
  vote_rshares: Int
  children_abs_rshares: Int
  cashout_time: String
  max_cashout_time: String
  total_vote_weight: Int
  reward_weight: Int
  total_payout_value: String
  curator_payout_value: String
  author_rewards: Int
  net_votes: Int
  root_comment: Int
  max_accepted_payout: String
  percent_steem_dollars: Int
  allow_replies: Boolean
  allow_votes: Boolean
  allow_curation_rewards: Boolean
  url: String
  root_title: String
  pending_payout_value: String
  total_pending_payout_value: String
  author_reputation: String
  promoted: String
  body_length: Int
}
 
input CommentInput {
  author: String!
  body: String!
  json_metadata: String!
  parent_author: String!
  parent_permlink: String!
  permlink: String!
  title: String!
  }
  
input CommentOptions {
  allow_curation_rewards: Boolean
  allow_votes: Boolean
  author: String
  extensions: [ExtensionInput] 
  max_accepted_payout: String
  percent_steem_dollars: Int
  permlink: String
}
  
input ExtensionInput {
  account: String!
  weight: Int!
}
 
input DiscussionQuery {
  tag: String,
  limit: Int,
  truncate: Int
 }
 `;

module.exports = schema;
