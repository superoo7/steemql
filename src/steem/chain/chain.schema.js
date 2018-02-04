const schema = `
  extend type Query {
    # Return median chain properties decided by witnesses.
    _getChainProperties: _ChainProperties 
    # Return server config. 
    _getConfig: _Config 
    # Return median price in SBD for 1 STEEM as reported by the witnesses.
    _getCurrentMedianHistoryPrice: _Price
    # Return state of server.
    _getDynamicGlobalProperties: _DynamicGlobalProperties
    # Return all applied operations in blockNum.
    _getOperations(blockNum: Int!, onlyVirtual:Boolean): [_AppliedOperation]
    # Return all of the state required for a particular url path.
    _getState(path: String!): String
    # Get list of delegations made by account. Default limit: 50
    _getVestingDelegations(account: String!, from: String, limit: Int): [_VestingDelegation]
    # Get version of actual hardfork
    _getHardforkVersion: String!
  }
  
  type _AppliedOperation {
    block: Int
    op: [String] 
    op_in_trx: Int
    timestamp: String
    trx_id: String 
    trx_in_block: Int 
    virtual_op: Int 
  }
  
  type _ChainProperties {
    account_creation_fee: String
    maximum_block_size: Int
    sbd_interest_rate: Int
  }
  
  type _Price {
    base: _Asset
    quote: _Asset
  }
  
  type _Asset {
    amount: String
    symbol: String
  }
  
  type _DynamicGlobalProperties {
    id: Int
    head_block_number: Int
    head_block_id: String
    time: String
    current_witness: String
    total_pow: Int
    num_pow_witnesses: Int
    virtual_supply: String
    current_supply: String
    confidential_supply: String
    current_sbd_supply: String
    confidential_sbd_supply: String
    total_vesting_fund_steem: String
    total_vesting_shares: String
    total_reward_fund_steem: String
    total_reward_shares2: String
    pending_rewarded_vesting_shares: String
    pending_rewarded_vesting_steem: String
    sbd_interest_rate: Int
    sbd_print_rate: Int
    average_block_size: Int
    maximum_block_size: Int
    current_aslot: Int
    recent_slots_filled: String
    participation_count: Int
    last_irreversible_block_num: Int
    max_virtual_bandwidth: String
    current_reserve_ratio: Int
    vote_power_reserve_rate: Int
  }
  
  type _VestingDelegation {
    delegatee: String!
    delegator: String!
    id: Int
    min_delegation_time: String!
    vesting_shares: String!
  }
  
  type _Config {
    IS_TEST_NET:Boolean 
    SBD_SYMBOL: Int 
    STEEMIT_100_PERCENT: Int 
    STEEMIT_1_PERCENT: Int 
    STEEMIT_1_TENTH_PERCENT: Int
    STEEMIT_ACCOUNT_RECOVERY_REQUEST_EXPIRATION_PERIOD: String
    STEEMIT_ACTIVE_CHALLENGE_COOLDOWN: String
    STEEMIT_ACTIVE_CHALLENGE_FEE: String
    STEEMIT_ADDRESS_PREFIX: String
    STEEMIT_APR_PERCENT_MULTIPLY_PER_BLOCK: String
    STEEMIT_APR_PERCENT_MULTIPLY_PER_HOUR: String
    STEEMIT_APR_PERCENT_MULTIPLY_PER_ROUND: String
    STEEMIT_APR_PERCENT_SHIFT_PER_BLOCK: Int
    STEEMIT_APR_PERCENT_SHIFT_PER_HOUR: Int
    STEEMIT_APR_PERCENT_SHIFT_PER_ROUND: Int
    STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS: Int
    STEEMIT_BANDWIDTH_PRECISION: Int
    STEEMIT_BLOCKCHAIN_PRECISION: Int
    STEEMIT_BLOCKCHAIN_PRECISION_DIGITS: Int
    STEEMIT_BLOCKCHAIN_HARDFORK_VERSION: String
    STEEMIT_BLOCKCHAIN_VERSION: String
    STEEMIT_BLOCK_INTERVAL: Int
    STEEMIT_BLOCKS_PER_DAY: Int
    STEEMIT_BLOCKS_PER_HOUR: Int
    STEEMIT_BLOCKS_PER_YEAR: Int
    STEEMIT_CASHOUT_WINDOW_SECONDS: Int
    STEEMIT_CASHOUT_WINDOW_SECONDS_PRE_HF12: Int
    STEEMIT_CASHOUT_WINDOW_SECONDS_PRE_HF17: Int
    STEEMIT_CHAIN_ID: String
    STEEMIT_COMMENT_REWARD_FUND_NAME: String
    STEEMIT_TEMP_LINEAR_REWARD_FUND_NAME: String
    STEEMIT_TEMP_LINEAR_REWARD_FUND_ID: Int
    STEEMIT_CONTENT_APR_PERCENT: Int
    STEEMIT_CONTENT_CONSTANT_HF0: String
    STEEMIT_CONTENT_REWARD_PERCENT: Int
    STEEMIT_CONVERSION_DELAY: String
    STEEMIT_CONVERSION_DELAY_PRE_HF_16: String
    STEEMIT_CREATE_ACCOUNT_DELEGATION_RATIO: Int
    STEEMIT_CREATE_ACCOUNT_DELEGATION_TIME: String
    STEEMIT_CREATE_ACCOUNT_WITH_STEEM_MODIFIER: Int
    STEEMIT_CURATE_APR_PERCENT: Int
    STEEMIT_DEFAULT_SBD_INTEREST_RATE: Int
    STEEMIT_EQUIHASH_K: Int
    STEEMIT_EQUIHASH_N: Int
    STEEMIT_FEED_HISTORY_WINDOW: Int
    STEEMIT_FEED_HISTORY_WINDOW_PRE_HF_16: Int
    STEEMIT_FEED_INTERVAL_BLOCKS: Int
    STEEMIT_FREE_TRANSACTIONS_WITH_NEW_ACCOUNT: Int
    STEEMIT_GENESIS_TIME: String
    STEEMIT_HARDFORK_REQUIRED_WITNESSES: Int
    STEEMIT_INFLATION_NARROWING_PERIOD: Int
    STEEMIT_INFLATION_RATE_START_PERCENT: Int
    STEEMIT_INFLATION_RATE_STOP_PERCENT: Int
    STEEMIT_INIT_MINER_NAME: String
    STEEMIT_INIT_PUBLIC_KEY_STR: String
    STEEMIT_INIT_SUPPLY: Int
    STEEMIT_INIT_TIME: String
    STEEMIT_IRREVERSIBLE_THRESHOLD: Int
    STEEMIT_LIQUIDITY_APR_PERCENT: Int
    STEEMIT_LIQUIDITY_REWARD_BLOCKS: Int
    STEEMIT_LIQUIDITY_REWARD_PERIOD_SEC: Int
    STEEMIT_LIQUIDITY_TIMEOUT_SEC: String
    STEEMIT_MAX_ACCOUNT_NAME_LENGTH: Int
    STEEMIT_MAX_ACCOUNT_WITNESS_VOTES: Int
    STEEMIT_MAX_ASSET_WHITELIST_AUTHORITIES: Int
    STEEMIT_MAX_AUTHORITY_MEMBERSHIP: Int
    STEEMIT_MAX_BLOCK_SIZE: Int
    STEEMIT_MAX_CASHOUT_WINDOW_SECONDS: Int
    STEEMIT_MAX_COMMENT_DEPTH: Int
    STEEMIT_MAX_COMMENT_DEPTH_PRE_HF17: Int
    STEEMIT_MAX_FEED_AGE_SECONDS: Int
    STEEMIT_MAX_INSTANCE_ID: String
    STEEMIT_MAX_MEMO_SIZE: Int
    STEEMIT_MAX_WITNESSES: Int
    STEEMIT_MAX_MINER_WITNESSES_HF0: Int
    STEEMIT_MAX_MINER_WITNESSES_HF17: Int
    STEEMIT_MAX_PERMLINK_LENGTH: Int
    STEEMIT_MAX_PROXY_RECURSION_DEPTH: Int
    STEEMIT_MAX_RATION_DECAY_RATE: Int
    STEEMIT_MAX_RESERVE_RATIO: Int
    STEEMIT_MAX_RUNNER_WITNESSES_HF0: Int
    STEEMIT_MAX_RUNNER_WITNESSES_HF17: Int
    STEEMIT_MAX_SHARE_SUPPLY: String
    STEEMIT_MAX_SIG_CHECK_DEPTH: Int
    STEEMIT_MAX_TIME_UNTIL_EXPIRATION: Int
    STEEMIT_MAX_TRANSACTION_SIZE: Int
    STEEMIT_MAX_UNDO_HISTORY: Int
    STEEMIT_MAX_URL_LENGTH: Int
    STEEMIT_MAX_VOTE_CHANGES: Int
    STEEMIT_MAX_VOTED_WITNESSES_HF0: Int
    STEEMIT_MAX_VOTED_WITNESSES_HF17: Int
    STEEMIT_MAX_WITHDRAW_ROUTES: Int
    STEEMIT_MAX_WITNESS_URL_LENGTH: Int
    STEEMIT_MIN_ACCOUNT_CREATION_FEE: Int
    STEEMIT_MIN_ACCOUNT_NAME_LENGTH: Int
    STEEMIT_MIN_BLOCK_SIZE_LIMIT: Int
    STEEMIT_MIN_CONTENT_REWARD: String
    STEEMIT_MIN_CURATE_REWARD: String
    STEEMIT_MIN_PERMLINK_LENGTH: Int
    STEEMIT_MIN_REPLY_INTERVAL: Int
    STEEMIT_MIN_ROOT_COMMENT_INTERVAL: Int
    STEEMIT_MIN_VOTE_INTERVAL_SEC: Int
    STEEMIT_MINER_ACCOUNT: String
    STEEMIT_MINER_PAY_PERCENT: Int
    STEEMIT_MIN_FEEDS: Int
    STEEMIT_MINING_REWARD: String
    STEEMIT_MINING_TIME: String
    STEEMIT_MIN_LIQUIDITY_REWARD: String
    STEEMIT_MIN_LIQUIDITY_REWARD_PERIOD_SEC: Int
    STEEMIT_MIN_PAYOUT_SBD: String
    STEEMIT_MIN_POW_REWARD: String
    STEEMIT_MIN_PRODUCER_REWARD: String
    STEEMIT_MIN_RATION: Int
    STEEMIT_MIN_TRANSACTION_EXPIRATION_LIMIT: Int
    STEEMIT_MIN_TRANSACTION_SIZE_LIMIT: Int
    STEEMIT_MIN_UNDO_HISTORY: Int
    STEEMIT_NULL_ACCOUNT: String
    STEEMIT_NUM_INIT_MINERS: Int
    STEEMIT_ORIGINAL_MIN_ACCOUNT_CREATION_FEE: Int
    STEEMIT_OWNER_AUTH_HISTORY_TRACKING_START_BLOCK_NUM: Int
    STEEMIT_OWNER_AUTH_RECOVERY_PERIOD: String
    STEEMIT_OWNER_CHALLENGE_COOLDOWN: String
    STEEMIT_OWNER_CHALLENGE_FEE: String
    STEEMIT_OWNER_UPDATE_LIMIT: Int
    STEEMIT_POST_AVERAGE_WINDOW: Int
    STEEMIT_POST_MAX_BANDWIDTH: Int
    STEEMIT_POST_REWARD_FUND_NAME: String
    STEEMIT_POST_WEIGHT_CONSTANT: Int
    STEEMIT_POW_APR_PERCENT: Int
    STEEMIT_PRODUCER_APR_PERCENT: Int
    STEEMIT_PROXY_TO_SELF_ACCOUNT: String
    STEEMIT_SBD_INTEREST_COMPOUND_INTERVAL_SEC: Int
    STEEMIT_SECONDS_PER_YEAR: Int
    STEEMIT_RECENT_RSHARES_DECAY_RATE_HF19: String
    STEEMIT_RECENT_RSHARES_DECAY_RATE_HF17: String
    STEEMIT_REVERSE_AUCTION_WINDOW_SECONDS: Int
    STEEMIT_ROOT_POST_PARENT: String
    STEEMIT_SAVINGS_WITHDRAW_REQUEST_LIMIT: Int
    STEEMIT_SAVINGS_WITHDRAW_TIME: String
    STEEMIT_SBD_START_PERCENT: Int
    STEEMIT_SBD_STOP_PERCENT: Int
    STEEMIT_SECOND_CASHOUT_WINDOW: Int
    STEEMIT_SOFT_MAX_COMMENT_DEPTH: Int
    STEEMIT_START_MINER_VOTING_BLOCK: Int
    STEEMIT_START_VESTING_BLOCK: Int
    STEEMIT_SYMBOL: String
    STEEMIT_TEMP_ACCOUNT: String
    STEEMIT_UPVOTE_LOCKOUT_HF7: Int
    STEEMIT_UPVOTE_LOCKOUT_HF17: String
    STEEMIT_VESTING_FUND_PERCENT: Int
    STEEMIT_VESTING_WITHDRAW_INTERVALS: Int
    STEEMIT_VESTING_WITHDRAW_INTERVALS_PRE_HF_16: Int
    STEEMIT_VESTING_WITHDRAW_INTERVAL_SECONDS: Int
    STEEMIT_VOTE_CHANGE_LOCKOUT_PERIOD: Int
    STEEMIT_VOTE_DUST_THRESHOLD: Int
    STEEMIT_VOTE_REGENERATION_SECONDS: Int
    STEEM_SYMBOL: String
    STMD_SYMBOL: String
    VESTS_SYMBOL: String
    VIRTUAL_SCHEDULE_LAP_LENGTH: String
    VIRTUAL_SCHEDULE_LAP_LENGTH2: String
  }
`;

module.exports = schema;
