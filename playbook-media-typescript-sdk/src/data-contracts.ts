/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type AcceptFollowProfileData = AcceptFollowProfileResponse;

/**
 * AcceptFollowProfileRequestResponse: Represent the object returned as a
 * response to the accept follow profile request
 */
export interface AcceptFollowProfileResponse {
  success?: boolean;
}

/**
 * AccountType used to differ the type of profile an operation
 * is being performed against
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum AccountType {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The type of account making the request to obtain the feed | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The type of profile making the request | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum AccountTypeEnum1 {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum AccountTypeEnum2 {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum AccountTypeEnum3 {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum AccountTypeEnum4 {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/** the account type of the user whoses followers are being requested */
export enum AccountTypeEnum5 {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The type of account making the request to obtain the feed | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum AccountTypeEnum6 {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The type of account making the request to create a comment | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum AccountTypeEnum7 {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/** Actor references the profile performing an operation */
export interface Actor {
  /** AccountType is the type of account this actor is */
  actorType: AccountType;
  /** Communtiy is the community profile who's performing a given operation */
  community: CommunityProfile;
  /** UserProfile is the user profile who's performing a given operation */
  userProfile: UserProfile;
}

export type AddCommentQualityScoreData = AddCommentQualityScoreResponse;

export interface AddCommentQualityScoreParams {
  commentId: string;
  postId: string;
  /**
   * The type of post being reacted to | type: string
   * @default "POST_TYPE_UNSPECIFIED"
   */
  postType: PostTypeEnum6;
  userId: string;
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum AddCommentQualityScoreParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface AddCommentQualityScoreResponse {
  comment?: Comment;
}

export type AddPostQualityScoreData = AddPostQualityScoreResponse;

export interface AddPostQualityScoreParams {
  postId: string;
  /**
   * The type of post being reacted to | type: string
   * @default "POST_TYPE_UNSPECIFIED"
   */
  postType: PostTypeEnum12;
  userId: string;
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum AddPostQualityScoreParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface AddPostQualityScoreResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export type AddPostToPublicationData = AddPostToPublicationResponse;

export interface AddPostToPublicationResponse {
  /**
   * Use Case
   * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
   * - A community publication, a publication that accepts stories published around Medium
   * - A company blog, a publication that is created specifically to share company news
   * - A collection of individual stories by a single author that are parts of a larger whole
   */
  publication?: Publication;
}

export type AddPostToThreadData = AddPostToThreadResponse;

export enum AddPostToThreadParamsEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum AddPostToThreadParamsPostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface AddPostToThreadResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export type AddPublicationEditorData = AddPublicationEditorResponse;

export interface AddPublicationEditorResponse {
  /**
   * Use Case
   * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
   * - A community publication, a publication that accepts stories published around Medium
   * - A company blog, a publication that is created specifically to share company news
   * - A collection of individual stories by a single author that are parts of a larger whole
   */
  publication?: Publication;
}

export interface Any {
  "@type"?: string;
  [key: string]: any;
}

export interface BaseTimeline {
  activities?: Array<FeedActivity>;
}

export type BlockUserProfileData = BlockUserProfileResponse;

/**
 * BlockUserProfileResponse: Represents the object returned as a response to the
 * block user request
 */
export interface BlockUserProfileResponse {
  success?: boolean;
}

export interface Bookmark {
  /**
   * the id of the blocked record
   * @format uint64
   */
  id?: string;
  postIds?: Array<string>;
  publications?: Array<Publication>;
}

export type BookmarkPostData = BookmarkPostResponse;

export interface BookmarkPostResponse {
  bookmark?: Bookmark;
}

export type BookmarkPublicationData = BookmarkPublicationResponse;

export interface BookmarkPublicationResponse {
  bookmark?: Bookmark;
}

export interface Comment {
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   * @minLength 1
   * @example "test-user"
   */
  authorProfileImage: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   * @minLength 1
   * @example "test-user"
   */
  authorUsername: string;
  /**
   * Platform wide ID of the user creating the comment
   * @gotag: bson:"backendPlatformUserId"
   */
  backendPlatformUserId?: string;
  /**
   * Content defining the comment
   * @gotag: bson:"content"
   */
  content?: string;
  /**
   * Time when the comment was created
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the comment
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the comment
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Comment ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Media payload tied to the comment
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the comment
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * ID of either the user profile or the community profile creating the comment
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * Responses to a given comment
   * @gotag: bson:"replies"
   */
  replies?: Array<CommentReply>;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

export interface CommentReply {
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   * @minLength 1
   * @example "test-user"
   */
  authorProfileImage: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   * @minLength 1
   * @example "test-user"
   */
  authorUsername: string;
  /**
   * ID of the user creating the comment response
   * @gotag: bson:"backendPlatformUserId"
   */
  backendPlatformUserId?: string;
  /**
   * Content defining the comment
   * @gotag: bson:"content"
   */
  content?: string;
  /**
   * Time when the comment was created
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the comment response
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the comment
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Response ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Media payload associated to the response
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the comment
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * ID of either the user profile or the community profile creating the comment response
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * the report count for this comment reply
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

/** CommunityProfile: The profile object tied to a given community */
export interface CommunityProfile {
  /**
   * The id of the algolia record referencing this community
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  algoliaId: string;
  /**
   * Defines rules community members must abide by
   * community rules must be at least 5 characters long
   * @example "community rules useful for generating a test community that we can test against. a community is really cool and ideal"
   */
  communityRules: string;
  /**
   * Desscription defines additional info about the community
   * community description must be at least 5 characters long
   * @example "community description useful for generating a test community that we can test against. a community is really cool and ideal"
   */
  description: string;
  /**
   * Followers outlines the number of followers this user profile has
   * @format int64
   */
  followers: string;
  /**
   * Community profile ID
   * @format uint64
   */
  id?: string;
  /**
   * Community name is the name tied to the community profile
   * community name must be at least 5 characters long
   * @example "test-community"
   */
  name: string;
  /**
   * Newsfeed timeline ID Displays all followed and group activities the user
   * follows
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  newsFeedTimelineId: string;
  /**
   * Notification timeline Id. Notification for anything a user/group is
   * following
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  notificationFeedTimelineId: string;
  /**
   * Personal timeline ID Has activities for a user that can be followed
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  personalFeedTimelineId: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /**
   * ProfileImageUrl witholds the url of a given profile image
   * @example "asndlkhaskhdhasgdahsf.jpg"
   */
  profileImageUrl: string;
  /**
   * Defines topics assoociated with the community of interest
   * must create at least 1 topic
   */
  topics?: Array<Topic>;
  /** Visible defines wether just about anyone can find this group */
  visible: boolean;
}

export interface ContentInsights {
  entities?: Array<Entities>;
  language?: string;
  /** @format float */
  languageConfidence?: number;
  /**
   * @format uint64
   * @example 10
   */
  sentenceCount?: string;
  sentiment?: Sentiment;
  /** @format uint64 */
  wordCount?: string;
}

export type CreateCommentData = CreateCommentResponse;

export interface CreateCommentParams {
  /**
   * The type of account making the request to create a comment | type: string
   * @default "ACCOUNT_TYPE_UNSPECIFIED"
   */
  accountType: AccountTypeEnum7;
  /**
   * The ID of the community trying to create a comment | type: uint64
   * @format uint64
   */
  communityProfileId?: string;
  /** The ID of the post to whom to add the comment | type: string */
  postId: string;
  /**
   * The type of post being reacted to | type: string
   * @default "POST_TYPE_UNSPECIFIED"
   */
  postType: PostTypeEnum14;
  /**
   * the user ID trying to create a comment (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: string;
}

/**
 * The type of account making the request to create a comment | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum CreateCommentParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum CreateCommentParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface CreateCommentReplyBody {
  postType: PostType;
  reply?: CommentReply;
}

export type CreateCommentReplyData = CreateCommentReplyResponse;

export interface CreateCommentReplyResponse {
  comment?: Comment;
}

/**
 * CreateCommentResponse: Represent the object returned as a
 * response to the create comment request
 */
export interface CreateCommentResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

/**
 * CreateCommunityProfileRequest: Represents the request object invoked against
 * the social service to create a community profile account
 */
export interface CreateCommunityProfileBody {
  /** the community profile being created | type: json_object */
  profile: CommunityProfile;
}

export type CreateCommunityProfileData = CreateCommunityProfileResponse;

/**
 * CreateCommunityProfileResponse: Represents the response object returned as a
 * response to the `create-community` request
 */
export interface CreateCommunityProfileResponse {
  profile?: CommunityProfile;
}

export interface CreateNoteBody {
  note?: Note;
  postType: PostType;
}

export type CreateNoteData = CreateNoteResponse;

export interface CreateNoteResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export type CreatePollData = CreatePollResponse;

export interface CreatePollResponse {
  pollId?: string;
}

export type CreatePostData = CreatePostResponse;

export interface CreatePostParams {
  /**
   * The type of profile making the request | type: string
   * @default "ACCOUNT_TYPE_UNSPECIFIED"
   */
  accountType: AccountTypeEnum1;
  /**
   * The ID of the community profile attempting to create the post  | type:
   * uint64
   * @format uint64
   */
  communityProfileId?: string;
  /**
   * the user ID trying to create a post (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: string;
}

/**
 * The type of profile making the request | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum CreatePostParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * CreatePostResponse: Represent the object returned as a
 * response to the create post request
 */
export interface CreatePostResponse {
  post?: Post;
}

export type CreatePublicationData = CreatePublicationResponse;

export interface CreatePublicationResponse {
  /** @format uint64 */
  id?: string;
}

export type CreateTopicData = CreateTopicResponse;

/**
 * CreateTopicResponse: Represent the object returned as a response to the
 * create topic request
 */
export interface CreateTopicResponse {
  /** @format uint64 */
  topicId?: string;
}

/**
 * CreateUserProfileRequest: Represents the request object invoked against the
 * social service to create a user profile account
 */
export interface CreateUserProfileBody {
  /** the set of ids of community profiles to follow */
  idsOfCommunitiesToFollow?: Array<string>;
  isPrivate?: boolean;
  profileImageUrl: string;
  tags: Array<UserTags>;
  username: string;
}

export type CreateUserProfileData = CreateUserProfileResponse;

/**
 * CreateUserProfileResponse: Represents the response object returned as a
 * response to the `create-user` request
 */
export interface CreateUserProfileResponse {
  /** @format uint64 */
  virtualProfileId?: string;
}

export type DeleteCommentData = CreateCommentResponse;

export interface DeleteCommentParams {
  /** The ID of the comment trying to be delete | type: string */
  commentId: string;
  /** The ID of the post trying to be deleted | type: string */
  postId: string;
  /**
   * The type of post being reacted to | type: string
   * @default "POST_TYPE_UNSPECIFIED"
   */
  postType: PostTypeEnum;
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum DeleteCommentParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export type DeleteCommentReplyData = DeleteCommentReplyResponse;

export interface DeleteCommentReplyParams {
  commentId: string;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum8;
  replyId: string;
  userId: string;
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum DeleteCommentReplyParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface DeleteCommentReplyResponse {
  comment?: Comment;
}

/**
 * DeleteCommentResponse: Represent the object returned as a
 * response to the delete comment request
 */
export interface DeleteCommentResponse {
  sucess?: boolean;
}

export type DeleteCommunityProfileData = DeleteCommunityProfileResponse;

/**
 * DeleteCommunityProfileResponse: Represent the response object returned as a response
 * to the `delete profile` and `delete-community` request
 */
export interface DeleteCommunityProfileResponse {
  success?: boolean;
}

export type DeleteNoteData = DeleteNoteResponse;

export interface DeleteNoteParams {
  noteId: string;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum10;
  userId: string;
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum DeleteNoteParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface DeleteNoteResponse {
  success?: boolean;
}

export type DeletePollData = DeletePollResponse;

export interface DeletePollResponse {
  success?: boolean;
}

export type DeletePostData = DeletePostResponse;

export type DeletePostFromPublicationData = DeletePostFromPublicationResponse;

export interface DeletePostFromPublicationParams {
  editorUserId: string;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum2;
  /** @format uint64 */
  publicationId: string;
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum DeletePostFromPublicationParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface DeletePostFromPublicationResponse {
  success?: boolean;
}

export enum DeletePostParamsEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum DeletePostParamsPostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * DeletePostResponse: Represent the object returned as a
 * response to the delete post request
 */
export interface DeletePostResponse {
  success?: boolean;
}

export type DeletePublicationData = DeletePublicationResponse;

export type DeletePublicationEditorData = DeletePublicationEditorResponse;

export interface DeletePublicationEditorResponse {
  success?: boolean;
}

export interface DeletePublicationResponse {
  success?: boolean;
}

export type DeleteUserProfileData = DeleteUserProfileResponse;

/**
 * DeleteUserProfileResponse: Represent the response object returned as a response
 * to the `delete profile` and `delete-community` request
 */
export interface DeleteUserProfileResponse {
  success?: boolean;
}

export type DiscoverProfilesData = DiscoverProfilesResponse;

export interface DiscoverProfilesResponse {
  communityProfiles?: Array<CommunityProfile>;
  topics?: Array<Topic>;
  userProfiles?: Array<UserProfile>;
}

export interface EditCommentReplyBody {
  postType: PostType;
  reply?: CommentReply;
}

export type EditCommentReplyData = EditCommentReplyResponse;

export interface EditCommentReplyResponse {
  reply?: CommentReply;
}

export type EditCommunityProfileData = EditCommunityProfileRequest;

/**
 * EditCommunityProfileRequest: Represents the request object invoked against
 * the social service to update a community profile account
 */
export interface EditCommunityProfileRequest {
  /**
   * The community profile ID of the community being updated | type: uint64
   * @format uint64
   */
  communityProfileId: string;
  /** The community profile being updated | type: json_object */
  profile: CommunityProfile;
  /**
   * the user ID trying to update this community profile (NOTE: userID refers to
   * the ID from the vantage point of the user service. This ID is the single
   * source of truth for a given user across our suite of services) | type:
   * uint64
   */
  userId: string;
}

/**
 * UpdateCommunityProfileResponse: Represents the object returned as a response
 * to `update-commmunity-profile` request
 */
export interface EditCommunityProfileResponse {
  profile?: CommunityProfile;
}

export type EditNoteData = EditNoteResponse;

export interface EditNoteParams {
  noteId: string;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum11;
  userId: string;
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum EditNoteParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface EditNoteResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export type EditPostData = EditPostResponse;

export enum EditPostParamsEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum EditPostParamsPostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * EditPostResponse: Represent the object returned as a
 * response to the update post request
 */
export interface EditPostResponse {
  success?: boolean;
}

export type EditUserProfileData = EditUserProfileResponse;

/**
 * EditUserProfileResponse: Represents the object returned as a response to
 * `update-user-profile` request
 */
export interface EditUserProfileResponse {
  profile?: UserProfile;
}

export interface Entities {
  label?: string;
  text?: string;
}

/** @default "no_error" */
export enum ErrorCode {
  NoError = "no_error",
  ValidationError = "validation_error",
  AuthorizationModelNotFound = "authorization_model_not_found",
  AuthorizationModelResolutionTooComplex = "authorization_model_resolution_too_complex",
  InvalidWriteInput = "invalid_write_input",
  CannotAllowDuplicateTuplesInOneRequest = "cannot_allow_duplicate_tuples_in_one_request",
  CannotAllowDuplicateTypesInOneRequest = "cannot_allow_duplicate_types_in_one_request",
  CannotAllowMultipleReferencesToOneRelation = "cannot_allow_multiple_references_to_one_relation",
  InvalidContinuationToken = "invalid_continuation_token",
  InvalidTupleSet = "invalid_tuple_set",
  InvalidCheckInput = "invalid_check_input",
  InvalidExpandInput = "invalid_expand_input",
  UnsupportedUserSet = "unsupported_user_set",
  InvalidObjectFormat = "invalid_object_format",
  WriteFailedDueToInvalidInput = "write_failed_due_to_invalid_input",
  AuthorizationModelAssertionsNotFound = "authorization_model_assertions_not_found",
  LatestAuthorizationModelNotFound = "latest_authorization_model_not_found",
  TypeNotFound = "type_not_found",
  RelationNotFound = "relation_not_found",
  EmptyRelationDefinition = "empty_relation_definition",
  InvalidUser = "invalid_user",
  InvalidTuple = "invalid_tuple",
  UnknownRelation = "unknown_relation",
  StoreIdInvalidLength = "store_id_invalid_length",
  AssertionsTooManyItems = "assertions_too_many_items",
  IdTooLong = "id_too_long",
  AuthorizationModelIdTooLong = "authorization_model_id_too_long",
  TupleKeyValueNotSpecified = "tuple_key_value_not_specified",
  TupleKeysTooManyOrTooFewItems = "tuple_keys_too_many_or_too_few_items",
  PageSizeInvalid = "page_size_invalid",
  ParamMissingValue = "param_missing_value",
  DifferenceBaseMissingValue = "difference_base_missing_value",
  SubtractBaseMissingValue = "subtract_base_missing_value",
  ObjectTooLong = "object_too_long",
  RelationTooLong = "relation_too_long",
  TypeDefinitionsTooFewItems = "type_definitions_too_few_items",
  TypeInvalidLength = "type_invalid_length",
  TypeInvalidPattern = "type_invalid_pattern",
  RelationsTooFewItems = "relations_too_few_items",
  RelationsTooLong = "relations_too_long",
  RelationsInvalidPattern = "relations_invalid_pattern",
  ObjectInvalidPattern = "object_invalid_pattern",
  QueryStringTypeContinuationTokenMismatch = "query_string_type_continuation_token_mismatch",
  ExceededEntityLimit = "exceeded_entity_limit",
  InvalidContextualTuple = "invalid_contextual_tuple",
  DuplicateContextualTuple = "duplicate_contextual_tuple",
  InvalidAuthorizationModel = "invalid_authorization_model",
  UnsupportedSchemaVersion = "unsupported_schema_version",
}

/** FeedActivity references an actvitiy present in a given user's timeline */
export interface FeedActivity {
  /** Actor refers to profile who created the object in the Activity */
  actor: Actor;
  /** Extra encompasses any additional activity metadata */
  extra?: Record<string, string>;
  /**
   * ForeignID is used as a reference identifier between our datastore
   * and getstream
   */
  foreignId?: string;
  /** The ID of the activity from the context of getstream */
  getstreamActivityId: string;
  origin?: string;
  pollPost?: PollPost;
  regularPost?: Post;
  /**
   * Score associated to an activity
   * @format uint64
   */
  score?: string;
  sharedPost?: SharedPost;
  /**
   * Object	Describes the target of the activity. The precise meaning of the
   * activity's target is dependent on the activities verb, but will often be
   * the object the English preposition "to". For instance, in the activity,
   * "John saved a movie to his wishlist", the target of the activity is
   * "wishlist".
   */
  target?: string;
  /** Time is the time this activity was created at */
  time?: string;
  /**
   * The TO field allows you to specify a list of feeds to which the activity
   * should be copied. One way to think about it is as the CC functionality of
   * email.
   */
  to?: Array<string>;
  /** Identifies the action that the activity describes. */
  verb?: PostType;
}

/**
 * FeedType encompasses the various types of feeds a profile can have
 * (in conjuction) with getstream.
 *
 *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
 *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
 *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
 * @default "FEED_TYPE_UNSPECIFIED"
 */
export enum FeedType {
  FEED_TYPE_UNSPECIFIED = "FEED_TYPE_UNSPECIFIED",
  FEED_TYPE_PERSONAL = "FEED_TYPE_PERSONAL",
  FEED_TYPE_NEWS = "FEED_TYPE_NEWS",
  FEED_TYPE_NOTIFICATION = "FEED_TYPE_NOTIFICATION",
}

/**
 * The type of feed aiming to be obtained | type: string
 *
 *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
 *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
 *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
 * @default "FEED_TYPE_UNSPECIFIED"
 */
export enum FeedTypeEnum {
  FEED_TYPE_UNSPECIFIED = "FEED_TYPE_UNSPECIFIED",
  FEED_TYPE_PERSONAL = "FEED_TYPE_PERSONAL",
  FEED_TYPE_NEWS = "FEED_TYPE_NEWS",
  FEED_TYPE_NOTIFICATION = "FEED_TYPE_NOTIFICATION",
}

/**
 * The type of feed aiming to be obtained | type: string
 *
 *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
 *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
 *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
 * @default "FEED_TYPE_UNSPECIFIED"
 */
export enum FeedTypeEnum1 {
  FEED_TYPE_UNSPECIFIED = "FEED_TYPE_UNSPECIFIED",
  FEED_TYPE_PERSONAL = "FEED_TYPE_PERSONAL",
  FEED_TYPE_NEWS = "FEED_TYPE_NEWS",
  FEED_TYPE_NOTIFICATION = "FEED_TYPE_NOTIFICATION",
}

export type FollowCommunityProfileData = FollowCommunityProfileResponse;

/**
 * FollowProfileResponse: Represent the object returned as a response to the
 * follow profile user request
 */
export interface FollowCommunityProfileResponse {
  success?: boolean;
}

export type FollowProfileData = FollowProfileResponse;

/**
 * FollowProfileResponse: Represent the object returned as a response to the
 * follow profile user request
 */
export interface FollowProfileResponse {
  success?: boolean;
}

export type GetAccountsFollowingData = GetAccountsFollowingResponse;

export interface GetAccountsFollowingParams {
  /** the account type of the user whoses followers are being requested */
  accountType: AccountTypeEnum5;
  /** @format uint64 */
  limit: string;
  /** @format uint64 */
  profileId: string;
  userId: string;
}

/** the account type of the user whoses followers are being requested */
export enum GetAccountsFollowingParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum GetAccountsFollowingParams1Enum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export interface GetAccountsFollowingResponse {
  communities?: Array<CommunityProfile>;
  users?: Array<UserProfile>;
}

export type GetBlogPostsByTagData = GetBlogPostsByTagResponse;

export interface GetBlogPostsByTagParams {
  /**
   * The type of post being reacted to | type: string
   * @default "POST_TYPE_UNSPECIFIED"
   */
  postType: PostTypeEnum1;
  tag: string;
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum GetBlogPostsByTagParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface GetBlogPostsByTagResponse {
  posts?: Array<Post>;
}

export type GetBookmarkedPostsData = GetBookmarkedPostsResponse;

export interface GetBookmarkedPostsResponse {
  posts?: Array<Post>;
}

export type GetCommentRepliesData = GetCommentRepliesResponse;

export interface GetCommentRepliesParams {
  commentId: string;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum7;
  userId: string;
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum GetCommentRepliesParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface GetCommentRepliesResponse {
  replies?: Array<CommentReply>;
}

export type GetCommunitiesUserFollowsData = GetCommunitiesUserFollowsResponse;

export interface GetCommunitiesUserFollowsParams {
  /**
   * the max number of communities to return | type: uint64
   * @format uint64
   */
  limit: string;
  /**
   * the user ID who's communities follow set we want to obtain (NOTE: userID
   * refers to the ID from the vantage point of the user service. This ID is the
   * single source of truth for a given user across our suite of services) |
   * type: uint64
   */
  userId: string;
}

/**
 * GetCommunitiesUserFollowsResponse: Represent the response object invoked
 * against the social service to get all the communities a given user follows
 */
export interface GetCommunitiesUserFollowsResponse {
  communities?: Array<CommunityProfile>;
}

export type GetCommunityBlogPostsData = GetCommunityBlogPostsResponse;

export interface GetCommunityBlogPostsResponse {
  posts?: Array<Post>;
}

export type GetCommunityFeedData = GetCommunityFeedResponse;

export interface GetCommunityFeedParams {
  /**
   * The type of account making the request to obtain the feed | type: string
   * @default "ACCOUNT_TYPE_UNSPECIFIED"
   */
  accountType: AccountTypeEnum;
  /**
   * The ID of the community we are trying to obtain the feed for | type: uint64
   * @format uint64
   */
  communityProfileId: string;
  /**
   * The type of feed aiming to be obtained | type: string
   *
   *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
   *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
   *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
   * @default "FEED_TYPE_UNSPECIFIED"
   */
  feedType: FeedTypeEnum;
  nextPageToken?: string;
}

/**
 * The type of account making the request to obtain the feed | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum GetCommunityFeedParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The type of feed aiming to be obtained | type: string
 *
 *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
 *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
 *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
 * @default "FEED_TYPE_UNSPECIFIED"
 */
export enum GetCommunityFeedParams1FeedTypeEnum {
  FEED_TYPE_UNSPECIFIED = "FEED_TYPE_UNSPECIFIED",
  FEED_TYPE_PERSONAL = "FEED_TYPE_PERSONAL",
  FEED_TYPE_NEWS = "FEED_TYPE_NEWS",
  FEED_TYPE_NOTIFICATION = "FEED_TYPE_NOTIFICATION",
}

/**
 * GetCommunityFeedResponse: Represent the object returned as a
 * response to the get community feed request
 */
export interface GetCommunityFeedResponse {
  baseTimeline?: BaseTimeline;
  nextPageToken?: string;
  notificationTimeline?: NotificationTimeline;
}

export type GetCommunityProfileData = GetCommunityProfileResponse;

export enum GetCommunityProfileParamsEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The RequestorProfileType is an optional parameter which tells us what type
 * of profile is the requestor
 */
export enum GetCommunityProfileParamsRequestorProfileTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * GetCommunityProfileResponse: Represents the object returned as a response to
 * `get-commmunity-profile` request
 */
export interface GetCommunityProfileResponse {
  metadata?: SocialRelationshipMetadata;
  profile?: CommunityProfile;
}

export type GetCommunityProfilesData = GetCommunityProfilesResponse;

export interface GetCommunityProfilesResponse {
  /** @format int32 */
  nextPageNumber?: number;
  profiles?: Array<CommunityProfile>;
}

export type GetFollowersData = GetFollowersResponse;

export interface GetFollowersParams {
  /** @format uint64 */
  limit: string;
  /** @format uint64 */
  profileId: string;
  userId: string;
}

export interface GetFollowersResponse {
  users?: Array<UserProfile>;
}

export type GetPendingFollowsData = GetPendingFollowsResponse;

/**
 * GetPendingFollowRequestsResponse: Represent the response object invoked
 * against the social service to get all pending follow requests tied to a user
 */
export interface GetPendingFollowsResponse {
  requests?: Array<PendingFollowRequest>;
}

export type GetPollData = GetPollResponse;

export interface GetPollResponse {
  poll?: PollPost;
}

export type GetPollsData = GetPollsResponse;

export interface GetPollsResponse {
  polls?: Array<PollPost>;
}

export type GetPostData = GetPostResponse;

export enum GetPostParamsEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum GetPostParamsPostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * GetPostResponse: Represent the object returned as a
 * response to the get post request
 */
export interface GetPostResponse {
  post?: Post;
}

export type GetPostThreadData = GetPostThreadResponse;

export interface GetPostThreadParams {
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum13;
  userId: string;
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum GetPostThreadParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface GetPostThreadResponse {
  posts?: Array<Post>;
}

export type GetPostsByTopicData = GetPostsByTopicResponse;

/**
 * GetPostsByTopicResponse: Represent the object returned as a
 * response to the get posts by topic request
 */
export interface GetPostsByTopicResponse {
  posts?: Array<Post>;
}

export type GetPublicationData = GetPublicationResponse;

export interface GetPublicationResponse {
  /**
   * Use Case
   * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
   * - A community publication, a publication that accepts stories published around Medium
   * - A company blog, a publication that is created specifically to share company news
   * - A collection of individual stories by a single author that are parts of a larger whole
   */
  publication?: Publication;
}

export type GetTopicsOfCommunitiesUserFollowsData = GetTopicsOfCommunitiesUserFollowsResponse;

export interface GetTopicsOfCommunitiesUserFollowsParams {
  /** @format uint64 */
  limit: string;
  /**
   * the user ID whose communities topics follow set we want to obtain (NOTE:
   * userID refers to the ID from the vantage point of the user service. This ID
   * is the single source of truth for a given user across our suite of
   * services) | type: uint64
   */
  userId: string;
}

/**
 * GetTopicsOfCommunitiesUserFollowsResponse: Represent the response object
 * invoked against the social service to get all the communities a given user
 * follows
 */
export interface GetTopicsOfCommunitiesUserFollowsResponse {
  topic?: Array<Topic>;
}

export type GetUserFeedData = GetUserFeedResponse;

export interface GetUserFeedParams {
  /**
   * The type of account making the request to obtain the feed | type: string
   * @default "ACCOUNT_TYPE_UNSPECIFIED"
   */
  accountType: AccountTypeEnum6;
  /**
   * The type of feed aiming to be obtained | type: string
   *
   *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
   *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
   *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
   * @default "FEED_TYPE_UNSPECIFIED"
   */
  feedType: FeedTypeEnum1;
  nextPageToken?: string;
  /**
   * the user ID trying to obtain a given feed (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: string;
}

/**
 * The type of account making the request to obtain the feed | type: string
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum GetUserFeedParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * The type of feed aiming to be obtained | type: string
 *
 *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
 *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
 *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
 * @default "FEED_TYPE_UNSPECIFIED"
 */
export enum GetUserFeedParams1FeedTypeEnum {
  FEED_TYPE_UNSPECIFIED = "FEED_TYPE_UNSPECIFIED",
  FEED_TYPE_PERSONAL = "FEED_TYPE_PERSONAL",
  FEED_TYPE_NEWS = "FEED_TYPE_NEWS",
  FEED_TYPE_NOTIFICATION = "FEED_TYPE_NOTIFICATION",
}

/**
 * GetUserFeedResponse: Represent the object returned as a
 * response to the get user feed request
 */
export interface GetUserFeedResponse {
  baseTimeline?: BaseTimeline;
  nextPageToken?: string;
  notificationTimeline?: NotificationTimeline;
}

export type GetUserProfileData = GetUserProfileResponse;

export interface GetUserProfileParams {
  /**
   * The RequestorProfileID is an optional parameter used to check if the
   * profileID (requestor) making a request for the record actually follows the
   * record
   */
  requestorProfileId?: string;
  /**
   * The RequestorProfileType is an optional parameter which tells us what type
   * of profile is the requestor
   * @default "ACCOUNT_TYPE_UNSPECIFIED"
   */
  requestorProfileType?: RequestorProfileTypeEnum;
  /** The user ID associated with the profile we want to get | type: uint64 */
  userId: string;
}

/**
 * The RequestorProfileType is an optional parameter which tells us what type
 * of profile is the requestor
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum GetUserProfileParams1RequestorProfileTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

/**
 * GetUserProfileResponse: Represents the object returned as a response to
 * `get-user-profile` request
 */
export interface GetUserProfileResponse {
  metadata?: SocialRelationshipMetadata;
  profile?: UserProfile;
}

export type GetUserProfilesData = GetUserProfilesResponse;

export interface GetUserProfilesResponse {
  /** @format int32 */
  nextPageNumber?: number;
  profiles?: Array<UserProfile>;
}

export type HealthCheckData = HealthCheckResponse;

/**
 * ServiceHealthResponse: Represent the object returned as a response to the
 * service health api invocation
 */
export interface HealthCheckResponse {
  healthy?: boolean;
}

/** @default "no_internal_error" */
export enum InternalErrorCode {
  NoInternalError = "no_internal_error",
  InternalError = "internal_error",
  Cancelled = "cancelled",
  DeadlineExceeded = "deadline_exceeded",
  AlreadyExists = "already_exists",
  ResourceExhausted = "resource_exhausted",
  FailedPrecondition = "failed_precondition",
  Aborted = "aborted",
  OutOfRange = "out_of_range",
  Unavailable = "unavailable",
  DataLoss = "data_loss",
}

/** @example {"code":"internal_error","message":"Internal Server Error"} */
export interface InternalErrorMessageResponse {
  code?: InternalErrorCode;
  message?: string;
}

export interface Media {
  createdAt?: string;
  id?: string;
  link?: string;
  metadata?: MediaMetadata;
}

/** @default "MEDIA_CROP_UNSPECIFIED" */
export enum MediaCrop {
  MEDIA_CROP_UNSPECIFIED = "MEDIA_CROP_UNSPECIFIED",
  MEDIA_CROP_TOP = "MEDIA_CROP_TOP",
  MEDIA_CROP_BOTTOM = "MEDIA_CROP_BOTTOM",
  MEDIA_CROP_LEFT = "MEDIA_CROP_LEFT",
  MEDIA_CROP_RIGHT = "MEDIA_CROP_RIGHT",
  MEDIA_CROP_CENTER = "MEDIA_CROP_CENTER",
}

export interface MediaMetadata {
  crop?: MediaCrop;
  id?: string;
  /** @format int64 */
  imageHeight?: string;
  /** @format int64 */
  imageWidth?: string;
  resize?: MediaResize;
  type?: MediaType;
}

/** @default "MEDIA_RESIZE_UNSPECIFIED" */
export enum MediaResize {
  MEDIA_RESIZE_UNSPECIFIED = "MEDIA_RESIZE_UNSPECIFIED",
  MEDIA_RESIZE_CLIP = "MEDIA_RESIZE_CLIP",
  MEDIA_RESIZE_CROP = "MEDIA_RESIZE_CROP",
  MEDIA_RESIZE_SCALE = "MEDIA_RESIZE_SCALE",
}

/** @default "MEDIA_TYPE_UNSPECIFIED" */
export enum MediaType {
  MEDIA_TYPE_UNSPECIFIED = "MEDIA_TYPE_UNSPECIFIED",
  MEDIA_TYPE_IMAGE = "MEDIA_TYPE_IMAGE",
  MEDIA_TYPE_VIDEO = "MEDIA_TYPE_VIDEO",
}

/** @default "no_not_found_error" */
export enum NotFoundErrorCode {
  NoNotFoundError = "no_not_found_error",
  UndefinedEndpoint = "undefined_endpoint",
  StoreIdNotFound = "store_id_not_found",
  Unimplemented = "unimplemented",
}

/**
 * A note is a response a user can leave on another user's piece of content. Notes can
 * only be seen by the user who created the content (private) and should serve as some form of
 * intimate feedback protocol
 */
export interface Note {
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this note
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage: string;
  /**
   * Username of the person making the note
   * @gotag: bson:"authorUserName"
   */
  authorUserName: string;
  /**
   * Platform wide ID of the user creating the note
   * @gotag: bson:"backendPlatformUserId"
   */
  backendPlatformUserId?: string;
  /**
   * Content defining the note
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time when the note was created
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Hashtags defined in the note
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Note ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Media payload tied to the note
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the note - NOTE: only the creator of the article whom this
   * note is attached to and the mentioned members will be notified. Additionally, this note
   * will only be viewable by those folks
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * ID of either the user profile or the community profile creating the note
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
}

export interface NotificationActivity {
  activityId?: string;
  actorName?: string;
  foreignId?: string;
  object?: string;
  origin?: string;
  target?: string;
  time?: string;
  verb?: string;
}

export interface NotificationFeedGroup {
  activities?: Array<NotificationActivity>;
  /** @format uint64 */
  activityCount?: string;
  /** @format uint64 */
  actorCount?: string;
  createdAt?: string;
  feedGroupId?: string;
  group?: string;
  isRead?: boolean;
  isSeen?: boolean;
  updatedAt?: string;
  verb?: string;
}

export interface NotificationTimeline {
  activities?: Array<NotificationFeedGroup>;
}

/** @example {"code":"undefined_endpoint","message":"Endpoint not enabled"} */
export interface PathUnknownErrorMessageResponse {
  code?: NotFoundErrorCode;
  message?: string;
}

/**
 * PendingFollowRequest defines the record describing the given pending follow
 * relationship
 */
export interface PendingFollowRequest {
  /** The time the follow request originated */
  createdAt: string;
  /**
   * The ID of the follow request
   * @format uint64
   */
  followRequestId?: string;
  /** The profile who initiated follow request */
  followerRequestionToFollow: UserProfile;
}

export interface PollPost {
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage?: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername?: string;
  /**
   * ID of the user creating the post
   * @gotag: bson:"backendPlatformUserId"
   */
  backendPlatformUserId?: string;
  /**
   * BackgroundImageUrl signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   * @gotag: bson:"backgroundImageUrl"
   */
  backgroundImageUrl?: string;
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments?: Array<Comment>;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 5 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Post ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Insights is a map of all insights associated to a post
   * @gotag: bson:"insights"
   */
  insights?: ContentInsights;
  /**
   * Media associated with the post
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * the distribution of poll responses (in percentage form)
   * @gotag: bson:"pollDistribution"
   */
  pollDistribution?: Record<string, number>;
  /**
   * the end date of the given poll
   * @gotag: bson:"pollEndDate"
   * @format date-time
   */
  pollEndDate?: string;
  /**
   * the set of options the poll witholds
   * @gotag: bson:"pollOptions"
   */
  pollOptions: Array<string>;
  /**
   * ID of the profile creating the post
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * Tags associated with the post
   * @gotag: bson:"tags"
   */
  tags?: Array<string>;
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread?: Thread;
  /**
   * thread participant posts are not sent to get stream to be part of the social graph.
   * posts that are the parent of their thread are sent to get stream to comprise the social graph
   * @gotag: bson:"threadParticipantType"
   */
  threadParticipantType?: ThreadParticipantType;
  /**
   * Title of the post
   * @gotag: bson:"title"
   */
  title?: string;
  /**
   * The topic to which this post is currently associated to. For non-community
   * profiles, posts are not associated to any topic. However for the commmunity
   * case, posts are associated to topic
   * @gotag: bson:"topicName"
   */
  topicName?: string;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * A hash map of user ids to poll responses left by users
   * @gotag: bson:"userIdToPollResponseMap"
   */
  userIdToPollResponsesMap?: Record<string, PollResponse>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

export interface PollResponse {
  /**
   * the id of the poll response
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * the index of the given response
   * @gotag: bson:"responseIdx"
   * @format uint64
   */
  responseIdx?: string;
  /**
   * the actual poll response left by the user
   * @gotag: bson:"responseValue"
   */
  responseValue?: string;
  /**
   * the user id who left the poll response
   * @gotag: bson:"userId"
   */
  userId?: string;
}

/**
 * Posts: Critical to activities and define the content sent over by users and
 * communities
 */
export interface Post {
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * if the post is a question, this field will hold the response to the question by the ai
   * @gotag: bson:"aiGeneratedQuestionResponse"
   */
  aiGeneratedQuestionResponse?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage?: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername?: string;
  /**
   * ID of the user creating the post
   * @gotag: bson:"backendPlatformUserId"
   */
  backendPlatformUserId?: string;
  /**
   * BackgroundImageUrl signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   * @gotag: bson:"backgroundImageUrl"
   */
  backgroundImageUrl?: string;
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments?: Array<Comment>;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 5 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Post ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /** @gotag: bson:"insights" */
  insights?: ContentInsights;
  /**
   * Media associated with the post
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * ReadingTime outlines the number of minutes it would take to read the
   * contents of this post
   * @gotag: bson:"readingTime"
   */
  readingTime?: string;
  /** @gotag: bson:"tags" */
  tags?: Array<string>;
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread?: Thread;
  /**
   * thread participant posts are not sent to get stream to be part of the social graph.
   * posts that are the parent of their thread are sent to get stream to comprise the social graph
   * @gotag: bson:"threadParticipantType"
   */
  threadParticipantType?: ThreadParticipantType;
  /** @gotag: bson:"title" */
  title?: string;
  /**
   * The topic to which this post is currently associated to. For non-community
   * profiles, posts are not associated to any topic. However for the commmunity
   * case, posts are associated to topic
   * @gotag: bson:"topicName"
   */
  topicName?: string;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

/**
 * PostType defines the type of content present in a post
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum PostType {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum PostTypeEnum1 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum10 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum11 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum PostTypeEnum12 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum13 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum PostTypeEnum14 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum2 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum3 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum4 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum5 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * The type of post being reacted to | type: string
 * @default "POST_TYPE_UNSPECIFIED"
 */
export enum PostTypeEnum6 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum7 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum8 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum PostTypeEnum9 {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * A Publication is a collections of stories based around a common theme. Anyone can create them
 * As the creator of a publication, you're an editor by default, which means you have the ability to
 * a) add writers to your publication,
 * b) edit and publish the stories that are submitted by your writers, and
 * c) review the metrics for all of the stories that are part of your publication.
 * As the publication's creator, you'll also have the ability
 * to appoint new editors (so they can do all of that stuff I just mentioned)
 * Use Case
 * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
 * - A community publication, a publication that accepts stories published around Medium
 * - A company blog, a publication that is created specifically to share company news
 * - A collection of individual stories by a single author that are parts of a larger whole
 */
export interface Publication {
  admin?: UserProfile;
  adminBackendPlatformUserId: string;
  createdAt?: string;
  description?: string;
  editors?: Array<UserProfile>;
  /** @format uint64 */
  id?: string;
  /** stories are post that can be submitted only by the publication editors */
  postIds?: Array<string>;
  publicationName: string;
  subjects: Array<string>;
  tags: Array<string>;
  type: PublicationType;
}

/**
 * - PUBLICATION_TYPE_MAGAZINE: a publication with a fixed publication staff that posts stories around a specific topic
 *  - PUBLICATION_TYPE_PLATFORM: a publication that accepts stories published around solomon
 *  - PUBLICATION_TYPE_BLOG: A community blog, a publication that is created specifically to share subset (community) news
 *  - PUBLICATION_TYPE_SUBJECTS: A collection of individual stories by a set of authors that are part of a whole
 * @default "PUBLICATION_TYPE_UNSPECIFIED"
 */
export enum PublicationType {
  PUBLICATION_TYPE_UNSPECIFIED = "PUBLICATION_TYPE_UNSPECIFIED",
  PUBLICATION_TYPE_MAGAZINE = "PUBLICATION_TYPE_MAGAZINE",
  PUBLICATION_TYPE_PLATFORM = "PUBLICATION_TYPE_PLATFORM",
  PUBLICATION_TYPE_BLOG = "PUBLICATION_TYPE_BLOG",
  PUBLICATION_TYPE_SUBJECTS = "PUBLICATION_TYPE_SUBJECTS",
}

export type ReactToCommentData = ReactToCommentResponse;

export interface ReactToCommentParams {
  accountType: AccountTypeEnum3;
  commentId: string;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum5;
  reaction: ReactionEnum1;
  userId: string;
}

export enum ReactToCommentParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum ReactToCommentParams1Enum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum ReactToCommentParams1Enum1 {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum ReactToCommentParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum ReactToCommentParams1ReactionEnum {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

export type ReactToCommentReplyData = ReactToCommentReplyResponse;

export interface ReactToCommentReplyParams {
  accountType: AccountTypeEnum4;
  commentId: string;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum9;
  reaction: ReactionEnum2;
  replyId: string;
  userId: string;
}

export enum ReactToCommentReplyParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum ReactToCommentReplyParams1Enum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum ReactToCommentReplyParams1Enum1 {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum ReactToCommentReplyParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum ReactToCommentReplyParams1ReactionEnum {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

export interface ReactToCommentReplyResponse {
  reply?: CommentReply;
}

export interface ReactToCommentResponse {
  comment?: Comment;
}

export type ReactToPostData = ReactToPostResponse;

export interface ReactToPostParams {
  accountType: AccountTypeEnum2;
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum3;
  reaction: ReactionEnum;
  userId: string;
}

export enum ReactToPostParams1AccountTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum ReactToPostParams1Enum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export enum ReactToPostParams1Enum1 {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum ReactToPostParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum ReactToPostParams1ReactionEnum {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

export interface ReactToPostResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

/** @default "REACTION_UNSPECIFIED" */
export enum Reaction {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

export enum ReactionEnum {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

export enum ReactionEnum1 {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

export enum ReactionEnum2 {
  REACTION_UNSPECIFIED = "REACTION_UNSPECIFIED",
  REACTION_LIKE = "REACTION_LIKE",
  REACTION_LOVE = "REACTION_LOVE",
  REACTION_HAHA = "REACTION_HAHA",
  REACTION_WOW = "REACTION_WOW",
  REACTION_SAD = "REACTION_SAD",
  REACTION_ANGRY = "REACTION_ANGRY",
  REACTION_DISLIKE = "REACTION_DISLIKE",
}

export type ReadynessCheckData = ReadynessCheckResponse;

/**
 * ReadynessCheckResponse Represents a request invoked against the social service for the
 * readyness check response
 */
export interface ReadynessCheckResponse {
  ready?: boolean;
}

export type RemoveBookmarkedPostData = RemoveBookmarkedPostResponse;

export interface RemoveBookmarkedPostParams {
  postId: string;
  /** @default "POST_TYPE_UNSPECIFIED" */
  postType: PostTypeEnum4;
  userId: string;
}

/** @default "POST_TYPE_UNSPECIFIED" */
export enum RemoveBookmarkedPostParams1PostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface RemoveBookmarkedPostResponse {
  bookmark?: Bookmark;
}

export type RemoveBookmarkedPublicationData = RemoveBookmarkedPostResponse;

export interface RemoveBookmarkedPublicationResponse {
  bookmark?: Bookmark;
}

export type RemovePostFromThreadData = RemovePostFromThreadResponse;

export enum RemovePostFromThreadParamsEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum RemovePostFromThreadParamsPostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export interface RemovePostFromThreadResponse {
  success?: boolean;
}

/**
 * ReportCommentRequest: Represents the request object invoked against the
 * social service to report a comment
 */
export interface ReportCommentBody {
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

export type ReportCommentData = ReportCommentResponse;

export interface ReportCommentReplyBody {
  postType: PostType;
}

export type ReportCommentReplyData = ReportCommentReplyResponse;

export interface ReportCommentReplyResponse {
  reply?: CommentReply;
}

export interface ReportCommentResponse {
  comment?: Comment;
}

export type ReportPostData = ReportPostResponse;

export enum ReportPostParamsEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum ReportPostParamsPostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

/**
 * ReportPostResponse: Represent the object returned as a
 * response to the report post request
 */
export interface ReportPostResponse {
  post?: Post;
}

/**
 * The RequestorProfileType is an optional parameter which tells us what type
 * of profile is the requestor
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum RequestorProfileTypeEnum {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER = "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY = "ACCOUNT_TYPE_COMMUNITY",
}

export interface RespondToPollBody {
  /** the poll option the user is responding with */
  pollOption: string;
  /**
   * the index of the poll option the user is responding with
   * @format uint64
   */
  pollOptionIdx: string;
}

export type RespondToPollData = RespondToPollResponse;

export interface RespondToPollResponse {
  poll?: PollPost;
}

export interface Sentiment {
  /**
   * @format float
   * @example 93
   */
  compound?: number;
  /**
   * @format float
   * @example 30
   */
  negative?: number;
  /**
   * @format float
   * @example 50
   */
  neutral?: number;
  /**
   * @format float
   * @example 89
   */
  positive?: number;
}

export type SharePostData = SharePostResponse;

export enum SharePostParamsEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export enum SharePostParamsParentPostTypeEnum {
  POST_TYPE_UNSPECIFIED = "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST = "POST_TYPE_POST",
  POST_TYPE_REPOST = "POST_TYPE_REPOST",
  POST_TYPE_QUESTION = "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT = "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT = "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL = "POST_TYPE_POLL",
  POST_TYPE_ARTICLE = "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY = "POST_TYPE_SHORT_STORY",
}

export type SharePostPayload = string;

export interface SharePostResponse {
  success?: boolean;
}

/**
 * SharedPost: Posts reshared by other profiles
 * TODO: need to expose api endpoints to interact with shared posts
 */
export interface SharedPost {
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername?: string;
  /**
   * ID of the user resharing the post
   * @gotag: bson:"backendPlatformUserId"
   */
  backendPlatformUserId?: string;
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments?: Array<Comment>;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 5 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * RePost ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * The username of the original author
   * @gotag: bson:"originalAuthorUsername"
   */
  originalAuthorUsername?: string;
  /**
   * originalPostType defines the intent of the post
   * @gotag: bson:"originalPostAction"
   */
  originalPostAction: PostType;
  /**
   * Original Post ID
   * @gotag: bson:"originalPostId"
   * @minLength 1
   * @example "test-user"
   */
  originalPostId: string;
  /**
   * The profile Id of the user who owned the original post
   * @gotag: bson:"originalPostUserProfileId"
   * @format uint64
   */
  originalPostUserProfileId?: string;
  /**
   * The backend wide user id of the profile who owned the original post
   * @gotag: bson:"originalPostUserbackendPlaformId"
   */
  originalPostUserbackendPlaformId?: string;
  /**
   * ID of the profile resharing the post
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * Tags associated with the post
   * @gotag: bson:"tags"
   */
  tags?: Array<string>;
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread?: Thread;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   * AccountType is the account type of the creator of this piece of
   *  content
   */
  userIdToReportsMap?: Record<string, string>;
}

export interface SocialProfileMetadata {
  /** @format uint64 */
  profileId?: string;
  profileType?: AccountType;
}

export interface SocialRelationshipMetadata {
  following?: boolean;
  followingSince?: string;
  sourceProfile: SocialProfileMetadata;
  targetProfile: SocialProfileMetadata;
}

export interface Status {
  /** @format int32 */
  code?: number;
  details?: Array<Any>;
  message?: string;
}

export interface Thread {
  /** @gotag: bson:"createdAt" */
  createdAt?: string;
  /**
   * Thread ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * the id of the parent post
   * @gotag: bson:"parentPostId"
   */
  parentPostId?: string;
  /**
   * a list of post ids associated to this thread
   * @gotag: bson:"postIds"
   */
  postIds?: Array<string>;
  /** @gotag: bson:"updatedAt" */
  updatedAt?: string;
}

/** @default "THREAD_PARTICIPANT_TYPE_UNSPECIFIED" */
export enum ThreadParticipantType {
  THREAD_PARTICIPANT_TYPE_UNSPECIFIED = "THREAD_PARTICIPANT_TYPE_UNSPECIFIED",
  THREAD_PARTICIPANT_TYPE_PARENT = "THREAD_PARTICIPANT_TYPE_PARENT",
  THREAD_PARTICIPANT_TYPE_PARTICIPANT = "THREAD_PARTICIPANT_TYPE_PARTICIPANT",
}

/** Topic: topic that can be associated to a record */
export interface Topic {
  /**
   * the description of the topic
   * @example "test-description sakjlDKJGSAHGHFDHSGJHFGAHDFJKGSHAJDLgAKSGDHAS CSVDJKSADASKJHDASFDGJKJLHSAHGFJDSAHD kjskhdgfhgdhfgkhsdfdsdfdssdfsdf"
   */
  description: string;
  /**
   * the id of the topic
   * @format uint64
   */
  id?: string;
  /**
   * the url of the topic image
   * the image url is required
   * @minLength 1
   * @example "test-tagname"
   */
  imageUrl: string;
  /**
   * the name of the topic
   * @example "test-tagname"
   */
  topicName: string;
}

/** UserProfile: The profile object tied to a given user */
export interface UserProfile {
  /**
   * The id of the algolia record referencing this user
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  algoliaId: string;
  /** all the bookmarked pieces of content on the platform */
  bookmarks: Bookmark;
  /**
   * Followers outlines the number of followers this user profile has
   * @format int64
   */
  followers: string;
  /**
   * Number of people account is following
   * @format int64
   */
  following: string;
  /**
   * User profile ID
   * @format uint64
   */
  id?: string;
  /**
   * Profile name is the name tied to the user profile
   * user name must be at least 5 characters long
   * @example "test-user"
   */
  name: string;
  /**
   * Newsfeed timeline ID Displays all followed and group activities the user
   * follows
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  newsFeedTimelineId: string;
  /**
   * Notification timeline Id. Notification for anything a user/group is
   * following
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  notificationFeedTimelineId: string;
  /**
   * Personal timeline ID Has activities for a user that can be followed
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  personalFeedTimelineId: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /**
   * ProfileImageUrl witholds the url of a given profile image
   * @example "asndlkhaskhdhasgdahsf.jpg"
   */
  profileImageUrl: string;
  /** Tags are interests */
  tags: Array<UserTags>;
}

/** Tags: tags that can be associated to a record */
export interface UserTags {
  /**
   * the description of the tag ... tag must be at least 5 characters long
   * @example "test-description sakjlDKJGSAHGHFDHSGJHFGAHDFJKGSHAJDLgAKSGDHAS CSVDJKSADASKJHDASFDGJKJLHSAHGFJDSAHD kjskhdgfhgdhfgkhsdfdsdfdssdfsdf"
   */
  description: string;
  /**
   * the id of the tag record
   * @format uint64
   */
  id?: string;
  /**
   * the name of the tag ... tag must be at least 5 characters long
   * @example "test-tagname"
   */
  tagName: string;
}

/** @example {"code":"validation_error","message":"Generic validation error"} */
export interface ValidationErrorMessageResponse {
  code?: ErrorCode;
  message?: string;
}
