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

import {
  AcceptFollowProfileData,
  AddCommentQualityScoreData,
  AddCommentQualityScoreParams,
  AddPostQualityScoreData,
  AddPostQualityScoreParams,
  AddPostToPublicationData,
  AddPostToThreadData,
  AddPostToThreadParamsEnum,
  AddPublicationEditorData,
  BlockUserProfileData,
  BookmarkPostData,
  BookmarkPublicationData,
  Comment,
  CommunityProfile,
  CreateCommentData,
  CreateCommentParams,
  CreateCommentReplyBody,
  CreateCommentReplyData,
  CreateCommunityProfileBody,
  CreateCommunityProfileData,
  CreateNoteBody,
  CreateNoteData,
  CreatePollData,
  CreatePostData,
  CreatePostParams,
  CreatePublicationData,
  CreateTopicData,
  CreateUserProfileBody,
  CreateUserProfileData,
  DeleteCommentData,
  DeleteCommentParams,
  DeleteCommentReplyData,
  DeleteCommentReplyParams,
  DeleteCommunityProfileData,
  DeleteNoteData,
  DeleteNoteParams,
  DeletePollData,
  DeletePostData,
  DeletePostFromPublicationData,
  DeletePostFromPublicationParams,
  DeletePostParamsEnum,
  DeletePublicationData,
  DeletePublicationEditorData,
  DeleteUserProfileData,
  DiscoverProfilesData,
  EditCommentReplyBody,
  EditCommentReplyData,
  EditCommunityProfileData,
  EditNoteData,
  EditNoteParams,
  EditPostData,
  EditPostParamsEnum,
  EditUserProfileData,
  FollowCommunityProfileData,
  FollowProfileData,
  GetAccountsFollowingData,
  GetAccountsFollowingParams,
  GetBlogPostsByTagData,
  GetBlogPostsByTagParams,
  GetBookmarkedPostsData,
  GetCommentRepliesData,
  GetCommentRepliesParams,
  GetCommunitiesUserFollowsData,
  GetCommunitiesUserFollowsParams,
  GetCommunityBlogPostsData,
  GetCommunityFeedData,
  GetCommunityFeedParams,
  GetCommunityProfileData,
  GetCommunityProfileParamsEnum,
  GetCommunityProfilesData,
  GetFollowersData,
  GetFollowersParams,
  GetPendingFollowsData,
  GetPollData,
  GetPollsData,
  GetPostData,
  GetPostParamsEnum,
  GetPostThreadData,
  GetPostThreadParams,
  GetPostsByTopicData,
  GetPublicationData,
  GetTopicsOfCommunitiesUserFollowsData,
  GetTopicsOfCommunitiesUserFollowsParams,
  GetUserFeedData,
  GetUserFeedParams,
  GetUserProfileData,
  GetUserProfileParams,
  GetUserProfilesData,
  HealthCheckData,
  InternalErrorMessageResponse,
  Note,
  PathUnknownErrorMessageResponse,
  PollPost,
  Post,
  Publication,
  ReactToCommentData,
  ReactToCommentParams,
  ReactToCommentReplyData,
  ReactToCommentReplyParams,
  ReactToPostData,
  ReactToPostParams,
  ReadynessCheckData,
  RemoveBookmarkedPostData,
  RemoveBookmarkedPostParams,
  RemoveBookmarkedPublicationData,
  RemovePostFromThreadData,
  RemovePostFromThreadParamsEnum,
  ReportCommentBody,
  ReportCommentData,
  ReportCommentReplyBody,
  ReportCommentReplyData,
  ReportPostData,
  ReportPostParamsEnum,
  RespondToPollBody,
  RespondToPollData,
  SharePostData,
  SharePostParamsEnum,
  SharePostPayload,
  Status,
  Topic,
  UserProfile,
  ValidationErrorMessageResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint enables a client to accept a follow request from a source a user profile
   *
   * @tags follow-profile
   * @name AcceptFollowProfile
   * @summary Accepts a user's follow request
   * @request POST:/api/v1/social/follow-profile/{followRecordId}/accept
   * @response `200` `AcceptFollowProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  acceptFollowProfile = (followRecordId: string, params: RequestParams = {}) =>
    this.http.request<
      AcceptFollowProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/follow-profile/${followRecordId}/accept`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to add a quality score to a comment
   *
   * @tags comment
   * @name AddCommentQualityScore
   * @summary Add Comment Quality Score
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/quality
   * @response `200` `AddCommentQualityScoreData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addCommentQualityScore = (
    { userId, postId, commentId, ...query }: AddCommentQualityScoreParams,
    qualityScore: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AddCommentQualityScoreData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/quality`,
      method: "POST",
      query: query,
      body: qualityScore,
      ...params,
    });
  /**
   * @description This endpoint enables a client add a quality score to a post
   *
   * @tags post
   * @name AddPostQualityScore
   * @summary Adds a quality score to a post
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/quality
   * @response `200` `AddPostQualityScoreData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addPostQualityScore = (
    { userId, postId, ...query }: AddPostQualityScoreParams,
    qualityScore: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AddPostQualityScoreData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/quality`,
      method: "POST",
      query: query,
      body: qualityScore,
      ...params,
    });
  /**
   * @description This endpoint enables a client to add a post to a publication
   *
   * @tags publication
   * @name AddPostToPublication
   * @summary Add a post to a publication
   * @request POST:/api/v1/social/user/{editorUserId}/publication/{publicationId}
   * @response `200` `AddPostToPublicationData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addPostToPublication = (editorUserId: string, publicationId: string, post: Post, params: RequestParams = {}) =>
    this.http.request<
      AddPostToPublicationData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${editorUserId}/publication/${publicationId}`,
      method: "POST",
      body: post,
      ...params,
    });
  /**
   * @description This endpoint enables a client to add a post to a thread
   *
   * @tags thread
   * @name AddPostToThread
   * @summary Adds A Post To A Thread
   * @request POST:/api/v1/social/user/{userId}/post/{parentPostId}/type/{postType}/thread
   * @response `200` `AddPostToThreadData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addPostToThread = (
    userId: string,
    parentPostId: string,
    postType: AddPostToThreadParamsEnum,
    post: Post,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AddPostToThreadData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${parentPostId}/type/${postType}/thread`,
      method: "POST",
      body: post,
      ...params,
    });
  /**
   * @description This endpoint enables a client to add an editor to a publication
   *
   * @tags publication
   * @name AddPublicationEditor
   * @summary Adds an editor to a publication
   * @request PUT:/api/v1/social/user/{adminUserId}/publication/{publicationId}/editor/{editorUserId}
   * @response `200` `AddPublicationEditorData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addPublicationEditor = (
    adminUserId: string,
    publicationId: string,
    editorUserId: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AddPublicationEditorData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${adminUserId}/publication/${publicationId}/editor/${editorUserId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description This endpoint enables a client to block a user profile
   *
   * @tags block-profile
   * @name BlockUserProfile
   * @summary blocks a user profile
   * @request POST:/api/v1/social/block-profile/source/{sourceUserId}/target/{targetUserId}
   * @response `200` `BlockUserProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  blockUserProfile = (sourceUserId: string, targetUserId: string, params: RequestParams = {}) =>
    this.http.request<
      BlockUserProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/block-profile/source/${sourceUserId}/target/${targetUserId}`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to bookmark a post
   *
   * @tags bookmark
   * @name BookmarkPost
   * @summary Bookmarks a post
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/bookmark
   * @response `200` `BookmarkPostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  bookmarkPost = (userId: string, postId: string, params: RequestParams = {}) =>
    this.http.request<
      BookmarkPostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/bookmark`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to bookmark a publication
   *
   * @tags bookmark
   * @name BookmarkPublication
   * @summary Bookmarks a publication
   * @request POST:/api/v1/social/user/{userId}/publication/{publicationId}/bookmark
   * @response `200` `BookmarkPublicationData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  bookmarkPublication = (userId: string, publicationId: string, params: RequestParams = {}) =>
    this.http.request<
      BookmarkPublicationData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/publication/${publicationId}/bookmark`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a comment
   *
   * @tags comment
   * @name CreateComment
   * @summary Create A Commnet
   * @request POST:/api/v1/social/{userId}/post/{postId}/comment
   * @response `200` `CreateCommentData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createComment = ({ userId, postId, ...query }: CreateCommentParams, comment: Comment, params: RequestParams = {}) =>
    this.http.request<
      CreateCommentData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/${userId}/post/${postId}/comment`,
      method: "POST",
      query: query,
      body: comment,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to reply to a comment
   *
   * @tags comment reply
   * @name CreateCommentReply
   * @summary Reply To A Comment
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply
   * @response `200` `CreateCommentReplyData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createCommentReply = (
    userId: string,
    postId: string,
    commentId: string,
    body: CreateCommentReplyBody,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CreateCommentReplyData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a community profile
   *
   * @tags community profile
   * @name CreateCommunityProfile
   * @summary Create a community Profile
   * @request POST:/api/v1/social/community/{userId}
   * @response `200` `CreateCommunityProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createCommunityProfile = (userId: string, body: CreateCommunityProfileBody, params: RequestParams = {}) =>
    this.http.request<
      CreateCommunityProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/community/${userId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create and associate a not to a post
   *
   * @tags note
   * @name CreateNote
   * @summary Creates and associates a note to a given post
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/note
   * @response `200` `CreateNoteData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createNote = (userId: string, postId: string, body: CreateNoteBody, params: RequestParams = {}) =>
    this.http.request<
      CreateNoteData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/note`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a poll
   *
   * @tags poll
   * @name CreatePoll
   * @summary Create a poll
   * @request POST:/api/v1/social/user/{userId}/poll
   * @response `200` `CreatePollData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createPoll = (userId: string, poll: PollPost, params: RequestParams = {}) =>
    this.http.request<
      CreatePollData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/poll`,
      method: "POST",
      body: poll,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a post
   *
   * @tags post
   * @name CreatePost
   * @summary Create a post
   * @request POST:/api/v1/social/user/{userId}/post
   * @response `200` `CreatePostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createPost = ({ userId, ...query }: CreatePostParams, post: Post, params: RequestParams = {}) =>
    this.http.request<
      CreatePostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post`,
      method: "POST",
      query: query,
      body: post,
      ...params,
    });
  /**
   * @description This endpoint enables a client to creare a publication
   *
   * @tags publication
   * @name CreatePublication
   * @summary Creates a publication
   * @request POST:/api/v1/social/user/{userId}/publication
   * @response `200` `CreatePublicationData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createPublication = (userId: string, publication: Publication, params: RequestParams = {}) =>
    this.http.request<
      CreatePublicationData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/publication`,
      method: "POST",
      body: publication,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a topic
   *
   * @tags topic
   * @name CreateTopic
   * @summary Create A Topic
   * @request POST:/api/v1/social/user/{userId}/community/{communityProfileId}/topic
   * @response `200` `CreateTopicData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createTopic = (userId: string, communityProfileId: string, topic: Topic, params: RequestParams = {}) =>
    this.http.request<
      CreateTopicData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/community/${communityProfileId}/topic`,
      method: "POST",
      body: topic,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a user profile
   *
   * @tags user profile
   * @name CreateUserProfile
   * @summary creates a user profile
   * @request POST:/api/v1/social/user/{userId}
   * @response `200` `CreateUserProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createUserProfile = (userId: string, body: CreateUserProfileBody, params: RequestParams = {}) =>
    this.http.request<
      CreateUserProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a comment
   *
   * @tags comment
   * @name DeleteComment
   * @summary Delete A Comment
   * @request DELETE:/api/v1/social/post/{postId}/comment/{commentId}
   * @response `200` `DeleteCommentData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteComment = ({ postId, commentId, ...query }: DeleteCommentParams, params: RequestParams = {}) =>
    this.http.request<
      DeleteCommentData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/post/${postId}/comment/${commentId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a comment reply
   *
   * @tags comment reply
   * @name DeleteCommentReply
   * @summary Delete A Comment Reply
   * @request DELETE:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}
   * @response `200` `DeleteCommentReplyData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteCommentReply = (
    { userId, postId, commentId, replyId, ...query }: DeleteCommentReplyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DeleteCommentReplyData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a community profile
   *
   * @tags community profile
   * @name DeleteCommunityProfile
   * @summary Delete Community Profile
   * @request DELETE:/api/v1/social/user/{userId}/community/{communityProfileId}
   * @response `200` `DeleteCommunityProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteCommunityProfile = (userId: string, communityProfileId: string, params: RequestParams = {}) =>
    this.http.request<
      DeleteCommunityProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/community/${communityProfileId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a note
   *
   * @tags note
   * @name DeleteNote
   * @summary Delete a note
   * @request DELETE:/api/v1/social/user/{userId}/post/{postId}/note/{noteId}
   * @response `200` `DeleteNoteData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteNote = ({ userId, postId, noteId, ...query }: DeleteNoteParams, params: RequestParams = {}) =>
    this.http.request<
      DeleteNoteData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/note/${noteId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a poll
   *
   * @tags poll
   * @name DeletePoll
   * @summary Delete a poll
   * @request DELETE:/api/v1/social/user/{userId}/poll/{postId}
   * @response `200` `DeletePollData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletePoll = (userId: string, postId: string, params: RequestParams = {}) =>
    this.http.request<
      DeletePollData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/poll/${postId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a post
   *
   * @tags post
   * @name DeletePost
   * @summary Delete a post
   * @request DELETE:/api/v1/social/user/{userId}/post/{postId}/type/{postType}
   * @response `200` `DeletePostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletePost = (userId: string, postId: string, postType: DeletePostParamsEnum, params: RequestParams = {}) =>
    this.http.request<
      DeletePostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/type/${postType}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a post from a publication
   *
   * @tags publication
   * @name DeletePostFromPublication
   * @summary Deletes a post from a publication
   * @request DELETE:/api/v1/social/user/{editorUserId}/publication/{publicationId}/post/{postId}
   * @response `200` `DeletePostFromPublicationData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletePostFromPublication = (
    { editorUserId, publicationId, postId, ...query }: DeletePostFromPublicationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DeletePostFromPublicationData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${editorUserId}/publication/${publicationId}/post/${postId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a publication
   *
   * @tags publication
   * @name DeletePublication
   * @summary Deletes a publication
   * @request DELETE:/api/v1/social/user/{adminUserId}/publication/{publicationId}
   * @response `200` `DeletePublicationData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletePublication = (adminUserId: string, publicationId: string, params: RequestParams = {}) =>
    this.http.request<
      DeletePublicationData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${adminUserId}/publication/${publicationId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to add an editor to a publication
   *
   * @tags publication
   * @name DeletePublicationEditor
   * @summary Deletes an editor to a publication
   * @request DELETE:/api/v1/social/user/{adminUserId}/publication/{publicationId}/editor/{editorUserId}
   * @response `200` `DeletePublicationEditorData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletePublicationEditor = (
    adminUserId: string,
    publicationId: string,
    editorUserId: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DeletePublicationEditorData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${adminUserId}/publication/${publicationId}/editor/${editorUserId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a user profile
   *
   * @tags user profile
   * @name DeleteUserProfile
   * @summary deletes a user profile
   * @request DELETE:/api/v1/social/user/{userId}
   * @response `200` `DeleteUserProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteUserProfile = (userId: string, params: RequestParams = {}) =>
    this.http.request<
      DeleteUserProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to discover a set of profiles he/she does not follow
   *
   * @tags user profile
   * @name DiscoverProfiles
   * @summary Discover Profiles
   * @request GET:/api/v1/social/users/{userId}/discover/limit/{limit}
   * @response `200` `DiscoverProfilesData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  discoverProfiles = (userId: string, limit: string, params: RequestParams = {}) =>
    this.http.request<
      DiscoverProfilesData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/users/${userId}/discover/limit/${limit}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to edit a comment reply
   *
   * @tags comment reply
   * @name EditCommentReply
   * @summary Edit A Comment Reply
   * @request PUT:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}
   * @response `200` `EditCommentReplyData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editCommentReply = (
    userId: string,
    postId: string,
    commentId: string,
    replyId: string,
    body: EditCommentReplyBody,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EditCommentReplyData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to update a community profile
   *
   * @tags community profile
   * @name EditCommunityProfile
   * @summary Edit a community Profile
   * @request PUT:/api/v1/social/user/{userId}/community/{communityProfileId}
   * @response `200` `EditCommunityProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editCommunityProfile = (
    userId: string,
    communityProfileId: string,
    profile: CommunityProfile,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EditCommunityProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/community/${communityProfileId}`,
      method: "PUT",
      body: profile,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to update a note
   *
   * @tags note
   * @name EditNote
   * @summary Update a note
   * @request PUT:/api/v1/social/user/{userId}/post/{postId}/note/{noteId}
   * @response `200` `EditNoteData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editNote = ({ userId, postId, noteId, ...query }: EditNoteParams, note: Note, params: RequestParams = {}) =>
    this.http.request<
      EditNoteData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/note/${noteId}`,
      method: "PUT",
      query: query,
      body: note,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to edit a post by id
   *
   * @tags post
   * @name EditPost
   * @summary Edits a post by id
   * @request PUT:/api/v1/social/user/post/{postId}/type/{postType}
   * @response `200` `EditPostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editPost = (postId: string, postType: EditPostParamsEnum, post: Post, params: RequestParams = {}) =>
    this.http.request<
      EditPostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/post/${postId}/type/${postType}`,
      method: "PUT",
      body: post,
      ...params,
    });
  /**
   * @description This endpoint performs an updates operation on a user profile based on the provided parametersThis update operation can span multiple services on specific cases (such as when the client is explicitly attempting to update the email of the user)All update operations are atomic by nature hence we should not expect any form of divergent state
   *
   * @tags user
   * @name EditUserProfile
   * @summary update a user profile
   * @request PUT:/api/v1/social/user/{userId}
   * @response `200` `EditUserProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editUserProfile = (userId: string, profile: UserProfile, params: RequestParams = {}) =>
    this.http.request<
      EditUserProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}`,
      method: "PUT",
      body: profile,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to follow a community profile
   *
   * @tags follow-community-profile
   * @name FollowCommunityProfile
   * @summary Follows A Community Profile
   * @request POST:/api/v1/social/community/follow/{sourceUserId}/{targetCommunityProfileId}
   * @response `200` `FollowCommunityProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  followCommunityProfile = (sourceUserId: string, targetCommunityProfileId: string, params: RequestParams = {}) =>
    this.http.request<
      FollowCommunityProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/community/follow/${sourceUserId}/${targetCommunityProfileId}`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to follow a user profile
   *
   * @tags follow-profile
   * @name FollowProfile
   * @summary follow a user profile
   * @request POST:/api/v1/social/follow-profile/source/{sourceUserId}/target/{targetUserId}
   * @response `200` `FollowProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  followProfile = (sourceUserId: string, targetUserId: string, params: RequestParams = {}) =>
    this.http.request<
      FollowProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/follow-profile/source/${sourceUserId}/target/${targetUserId}`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the accounts a given user follows
   *
   * @tags follow
   * @name GetAccountsFollowing
   * @summary Get Communities and users you are following
   * @request GET:/api/v1/social/user/{userId}/profile/{profileId}/account-type/{accountType}/following
   * @response `200` `GetAccountsFollowingData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getAccountsFollowing = (
    { userId, profileId, accountType, ...query }: GetAccountsFollowingParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetAccountsFollowingData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/profile/${profileId}/account-type/${accountType}/following`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to query a set of blog posts tied to a tag
   *
   * @tags post
   * @name GetBlogPostsByTag
   * @summary Get blog posts by tag
   * @request GET:/api/v1/social/posts/blog/tag/{tag}
   * @response `200` `GetBlogPostsByTagData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getBlogPostsByTag = ({ tag, ...query }: GetBlogPostsByTagParams, params: RequestParams = {}) =>
    this.http.request<
      GetBlogPostsByTagData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/posts/blog/tag/${tag}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all bookmarked posts of a given user
   *
   * @tags bookmarks
   * @name GetBookmarkedPosts
   * @summary Get Bookmarked Posts
   * @request GET:/api/v1/social/user/bookmarks/{userId}
   * @response `200` `GetBookmarkedPostsData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getBookmarkedPosts = (userId: string, params: RequestParams = {}) =>
    this.http.request<
      GetBookmarkedPostsData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/bookmarks/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get comment replies
   *
   * @tags comment reply
   * @name GetCommentReplies
   * @summary Get Comment Replies
   * @request GET:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/replies
   * @response `200` `GetCommentRepliesData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommentReplies = ({ userId, postId, commentId, ...query }: GetCommentRepliesParams, params: RequestParams = {}) =>
    this.http.request<
      GetCommentRepliesData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/replies`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the communities a user follows
   *
   * @tags community profile
   * @name GetCommunitiesUserFollows
   * @summary Gets all the communities a user follows
   * @request GET:/api/v1/social/community/communities-following/{userId}
   * @response `200` `GetCommunitiesUserFollowsData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunitiesUserFollows = ({ userId, ...query }: GetCommunitiesUserFollowsParams, params: RequestParams = {}) =>
    this.http.request<
      GetCommunitiesUserFollowsData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/community/communities-following/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get community blog posts
   *
   * @tags post
   * @name GetCommunityBlogPosts
   * @summary Get community blog posts
   * @request GET:/api/v1/social/community/{communityProfileId}/posts/blog
   * @response `200` `GetCommunityBlogPostsData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityBlogPosts = (communityProfileId: string, params: RequestParams = {}) =>
    this.http.request<
      GetCommunityBlogPostsData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/community/${communityProfileId}/posts/blog`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client query a community feed
   *
   * @tags feed
   * @name GetCommunityFeed
   * @summary Gets A Community Feed
   * @request GET:/api/v1/social/community/{communityProfileId}/timeline
   * @response `200` `GetCommunityFeedData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityFeed = ({ communityProfileId, ...query }: GetCommunityFeedParams, params: RequestParams = {}) =>
    this.http.request<
      GetCommunityFeedData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/community/${communityProfileId}/timeline`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a community profile
   *
   * @tags community profile
   * @name GetCommunityProfile
   * @summary Get a community Profile
   * @request GET:/api/v1/social/community/{communityId}/requestor/{requestorProfileId}/profile-type/{requestorProfileType}
   * @response `200` `GetCommunityProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityProfile = (
    communityId: string,
    requestorProfileId: string,
    requestorProfileType: GetCommunityProfileParamsEnum,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetCommunityProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/community/${communityId}/requestor/${requestorProfileId}/profile-type/${requestorProfileType}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get community profiles
   *
   * @tags community profile
   * @name GetCommunityProfiles
   * @summary Get Community Profiles
   * @request GET:/api/v1/social/communities/page-size/{pageSize}/page-number/{pageNumber}
   * @response `200` `GetCommunityProfilesData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityProfiles = (pageSize: number, pageNumber: number, params: RequestParams = {}) =>
    this.http.request<
      GetCommunityProfilesData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/communities/page-size/${pageSize}/page-number/${pageNumber}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the followers following a given user
   *
   * @tags follow
   * @name GetFollowers
   * @summary Get Users Following you
   * @request GET:/api/v1/social/user/{userId}/profile/{profileId}/followers
   * @response `200` `GetFollowersData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getFollowers = ({ userId, profileId, ...query }: GetFollowersParams, params: RequestParams = {}) =>
    this.http.request<
      GetFollowersData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/profile/${profileId}/followers`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the pending follow requests
   *
   * @tags follow
   * @name GetPendingFollows
   * @summary Get Pending Follow Requests
   * @request GET:/api/v1/social/user/{userId}/follow/pending-requests
   * @response `200` `GetPendingFollowsData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPendingFollows = (userId: string, params: RequestParams = {}) =>
    this.http.request<
      GetPendingFollowsData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/follow/pending-requests`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to query a poll by id
   *
   * @tags poll
   * @name GetPoll
   * @summary Get a poll
   * @request GET:/api/v1/social/user/{userId}/poll/{postId}
   * @response `200` `GetPollData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPoll = (userId: string, postId: string, params: RequestParams = {}) =>
    this.http.request<
      GetPollData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/poll/${postId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to query all polls tied to a given user id
   *
   * @tags poll
   * @name GetPolls
   * @summary Get all the polls of a given user
   * @request GET:/api/v1/social/user/{userId}/polls
   * @response `200` `GetPollsData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPolls = (userId: string, params: RequestParams = {}) =>
    this.http.request<
      GetPollsData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/polls`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a post
   *
   * @tags post
   * @name GetPost
   * @summary Get a post
   * @request GET:/api/v1/social/user/{userId}/post/{postId}/type/{postType}
   * @response `200` `GetPostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPost = (userId: string, postId: string, postType: GetPostParamsEnum, params: RequestParams = {}) =>
    this.http.request<
      GetPostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/type/${postType}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all posts tied to a topic
   *
   * @tags post
   * @name GetPostsByTopic
   * @summary Get all posts associated with a topic
   * @request GET:/api/v1/social/community/{communityProfileId}/topic/{topicName}/posts
   * @response `200` `GetPostsByTopicData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPostsByTopic = (communityProfileId: string, topicName: string, params: RequestParams = {}) =>
    this.http.request<
      GetPostsByTopicData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/community/${communityProfileId}/topic/${topicName}/posts`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to query a post's thread
   *
   * @tags thread
   * @name GetPostThread
   * @summary Gets A Post's Thread
   * @request GET:/api/v1/social/user/{userId}/post/{postId}/thread
   * @response `200` `GetPostThreadData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPostThread = ({ userId, postId, ...query }: GetPostThreadParams, params: RequestParams = {}) =>
    this.http.request<
      GetPostThreadData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/thread`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a publication
   *
   * @tags publication
   * @name GetPublication
   * @summary Gets a publication
   * @request GET:/api/v1/social/user/{userId}/publication/{publicationId}
   * @response `200` `GetPublicationData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPublication = (userId: string, publicationId: string, params: RequestParams = {}) =>
    this.http.request<
      GetPublicationData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/publication/${publicationId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get topics of communities a user follows
   *
   * @tags topic
   * @name GetTopicsOfCommunitiesUserFollows
   * @summary Get Topics Of Communities User Follows
   * @request GET:/api/v1/social/user/{userId}/topics
   * @response `200` `GetTopicsOfCommunitiesUserFollowsData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getTopicsOfCommunitiesUserFollows = (
    { userId, ...query }: GetTopicsOfCommunitiesUserFollowsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetTopicsOfCommunitiesUserFollowsData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/topics`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client query a user feed
   *
   * @tags feed
   * @name GetUserFeed
   * @summary Gets A Userfeed
   * @request GET:/api/v1/social/user/{userId}/timeline
   * @response `200` `GetUserFeedData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserFeed = ({ userId, ...query }: GetUserFeedParams, params: RequestParams = {}) =>
    this.http.request<
      GetUserFeedData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/timeline`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint performs a query against the social service to obtain a user profile
   *
   * @tags user profile
   * @name GetUserProfile
   * @summary gets a user profile
   * @request GET:/api/v1/social/user/{userId}
   * @response `200` `GetUserProfileData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserProfile = ({ userId, ...query }: GetUserProfileParams, params: RequestParams = {}) =>
    this.http.request<
      GetUserProfileData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a number of user profiles in a paginated manner
   *
   * @tags user profile
   * @name GetUserProfiles
   * @summary Gets a set of user profiles
   * @request GET:/api/v1/social/users/page-size/{pageSize}/page-number/{pageNumber}
   * @response `200` `GetUserProfilesData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserProfiles = (pageSize: number, pageNumber: number, params: RequestParams = {}) =>
    this.http.request<
      GetUserProfilesData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/users/page-size/${pageSize}/page-number/${pageNumber}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint performs a healc check on the service
   *
   * @tags service health
   * @name HealthCheck
   * @summary health check
   * @request GET:/api/v1/health
   * @response `200` `HealthCheckData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  healthCheck = (params: RequestParams = {}) =>
    this.http.request<
      HealthCheckData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/health`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to react to a comment
   *
   * @tags reaction
   * @name ReactToComment
   * @summary Reacts to a comment
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/account-type/{accountType}/reaction/{reaction}
   * @response `200` `ReactToCommentData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reactToComment = (
    { userId, postId, commentId, accountType, reaction, ...query }: ReactToCommentParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReactToCommentData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/account-type/${accountType}/reaction/${reaction}`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to react to a comment reply
   *
   * @tags reaction
   * @name ReactToCommentReply
   * @summary Reacts to a comment reply
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}/account-type/{accountType}/reaction/{reaction}
   * @response `200` `ReactToCommentReplyData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reactToCommentReply = (
    { userId, postId, commentId, replyId, accountType, reaction, ...query }: ReactToCommentReplyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReactToCommentReplyData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}/account-type/${accountType}/reaction/${reaction}`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to react to a post
   *
   * @tags reaction
   * @name ReactToPost
   * @summary Reacts to a post
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/account-type/{accountType}/reaction/{reaction}
   * @response `200` `ReactToPostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reactToPost = ({ userId, postId, accountType, reaction, ...query }: ReactToPostParams, params: RequestParams = {}) =>
    this.http.request<
      ReactToPostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/account-type/${accountType}/reaction/${reaction}`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint performs a readiness check on the service
   *
   * @tags service readyness
   * @name ReadynessCheck
   * @summary readyness check
   * @request GET:/api/v1/ready
   * @response `200` `ReadynessCheckData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  readynessCheck = (params: RequestParams = {}) =>
    this.http.request<
      ReadynessCheckData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/ready`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a bookmarked post
   *
   * @tags bookmark
   * @name RemoveBookmarkedPost
   * @summary Deletes A Bookmarked Post
   * @request DELETE:/api/v1/social/user/{userId}/post/{postId}/bookmark
   * @response `200` `RemoveBookmarkedPostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  removeBookmarkedPost = ({ userId, postId, ...query }: RemoveBookmarkedPostParams, params: RequestParams = {}) =>
    this.http.request<
      RemoveBookmarkedPostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/bookmark`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a bookmarked publication
   *
   * @tags bookmark
   * @name RemoveBookmarkedPublication
   * @summary Deletes A Bookmarked Publication
   * @request DELETE:/api/v1/social/user/{userId}/publication/{publicationId}/bookmark
   * @response `200` `RemoveBookmarkedPublicationData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  removeBookmarkedPublication = (userId: string, publicationId: string, params: RequestParams = {}) =>
    this.http.request<
      RemoveBookmarkedPublicationData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/publication/${publicationId}/bookmark`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a post from a thread
   *
   * @tags thread
   * @name RemovePostFromThread
   * @summary Deletes A Post From A Thread
   * @request DELETE:/api/v1/social/user/{userId}/post/{parentPostId}/type/{postType}/thread/target/{participantPostId}
   * @response `200` `RemovePostFromThreadData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  removePostFromThread = (
    userId: string,
    parentPostId: string,
    postType: RemovePostFromThreadParamsEnum,
    participantPostId: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      RemovePostFromThreadData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${parentPostId}/type/${postType}/thread/target/${participantPostId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to report a comment
   *
   * @tags comment
   * @name ReportComment
   * @summary Report A Comment
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/report
   * @response `200` `ReportCommentData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reportComment = (
    userId: string,
    postId: string,
    commentId: string,
    body: ReportCommentBody,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReportCommentData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/report`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to report a comment reply
   *
   * @tags comment reply
   * @name ReportCommentReply
   * @summary Report A Comment Reply
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}/report
   * @response `200` `ReportCommentReplyData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reportCommentReply = (
    userId: string,
    postId: string,
    commentId: string,
    replyId: string,
    body: ReportCommentReplyBody,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReportCommentReplyData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}/report`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to report a post
   *
   * @tags post
   * @name ReportPost
   * @summary Report a post
   * @request POST:/api/v1/social/user/{userId}/post/{postId}/type/{postType}/report
   * @response `200` `ReportPostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reportPost = (userId: string, postId: string, postType: ReportPostParamsEnum, params: RequestParams = {}) =>
    this.http.request<
      ReportPostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${postId}/type/${postType}/report`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to response to a poll
   *
   * @tags poll
   * @name RespondToPoll
   * @summary Adds a user response to a given poll by a user
   * @request POST:/api/v1/social/user/{userId}/poll/{pollId}
   * @response `200` `RespondToPollData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  respondToPoll = (userId: string, pollId: string, body: RespondToPollBody, params: RequestParams = {}) =>
    this.http.request<
      RespondToPollData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/poll/${pollId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to share a post
   *
   * @tags feed
   * @name SharePost
   * @summary Share a post
   * @request POST:/api/v1/social/user/{userId}/post/{parentPostId}/type/{parentPostType}/share
   * @response `200` `SharePostData` A successful response.
   * @response `400` `ValidationErrorMessageResponse` Request failed due to invalid input.
   * @response `404` `PathUnknownErrorMessageResponse` Request failed due to incorrect path.
   * @response `500` `InternalErrorMessageResponse` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  sharePost = (
    userId: string,
    parentPostId: string,
    parentPostType: SharePostParamsEnum,
    content: SharePostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SharePostData,
      ValidationErrorMessageResponse | PathUnknownErrorMessageResponse | InternalErrorMessageResponse | Status
    >({
      path: `/api/v1/social/user/${userId}/post/${parentPostId}/type/${parentPostType}/share`,
      method: "POST",
      body: content,
      type: ContentType.Json,
      ...params,
    });
}
