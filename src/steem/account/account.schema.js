const schema = `
  extend type Query {
    # Get multiple accounts.
    _getAccounts(usernames: [String]!): [_Account]
    # Get Follow Count (Follower and Following).
    _getFollowCount(username: String!): _FollowCount 
    # Get number of all accounts :: steemjs
    _getAccountCount: Int 
    
    getFollowCount(username: String!): _FollowCount 
    @deprecated(reason: "Moved to prefixed version")
    getAccounts(usernames: [String]!): [_Account]
    @deprecated(reason: "Moved to prefixed version")
  }
  
  type _Account {
    id: ID!
    name: String!
    witness_votes: [String]
    memo_key: String
    json_metadata: String
    proxy: String
    last_owner_update: String
    last_account_update: String
    created: String
    mined: Boolean
    owner_challenged: Boolean
    active_challenged: Boolean
    last_owner_proved: String
    last_active_proved: String
    recovery_account: String
    last_account_recovery: String
    reset_account: String
    comment_count: Int
    lifetime_vote_count: Int
    post_count: Int
    can_vote: Boolean
    voting_power: Int
    last_vote_time: String
    balance: String
    savings_balance: String
    sbd_balance: String
    sbd_seconds: String
    sbd_seconds_last_update: String
    sbd_last_interest_payment: String
    savings_sbd_balance: String
    savings_sbd_seconds: String
    savings_sbd_seconds_last_update: String
    savings_sbd_last_interest_payment: String
    savings_withdraw_requests: Int
    reward_sbd_balance: String
    reward_steem_balance: String
    reward_vesting_balance: String
    reward_vesting_steem: String
    vesting_shares: String
    delegated_vesting_shares: String
    received_vesting_shares: String
    vesting_withdraw_rate: String
    next_vesting_withdrawal: String
    withdrawn: Int
    to_withdraw: Int
    withdraw_routes: Int
    curation_rewards: Int
    posting_rewards: Int
    proxied_vsf_votes: [Int]
    witnesses_voted_for: Int
    average_bandwidth: String
    lifetime_bandwidth: String
    last_bandwidth_update: String
    average_market_bandwidth: String
    lifetime_market_bandwidth: String
    last_market_bandwidth_update: String
    last_post: String
    last_root_post: String
    vesting_balance: String
    reputation: String
  }
  
  type _FollowCount {
    account: String!
    follower_count: Int!
    following_count: Int!
  }
`;

module.exports = schema;
