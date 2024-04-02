# Documentation for Social Service

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://social-service.platform.svc.cluster.local:9896*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *BlockProfileApi* | [**blockUserProfile**](Apis/BlockProfileApi.md#blockuserprofile) | **POST** /api/v1/users/source/{sourceUserId}/block/target/{targetUserId} | blocks a user profile |
| *BookmarkApi* | [**bookmarkPost**](Apis/BookmarkApi.md#bookmarkpost) | **POST** /api/v1/users/{userId}/post/bookmark/{postId} | Bookmarks a post |
*BookmarkApi* | [**bookmarkPublication**](Apis/BookmarkApi.md#bookmarkpublication) | **POST** /api/v1/users/{userId}/publication/{publicationId}/bookmark | Bookmarks a publication |
*BookmarkApi* | [**removeBookmarkedPost**](Apis/BookmarkApi.md#removebookmarkedpost) | **DELETE** /api/v1/users/{userId}/post/{postId}/bookmark | Deletes A Bookmarked Post |
*BookmarkApi* | [**removeBookmarkedPublication**](Apis/BookmarkApi.md#removebookmarkedpublication) | **DELETE** /api/v1/users/{userId}/publication/{publicationId}/bookmark | Deletes A Bookmarked Publication |
| *BookmarksApi* | [**getBookmarkedPosts**](Apis/BookmarksApi.md#getbookmarkedposts) | **GET** /api/v1/users/bookmarks/{userId} | Get Bookmarked Posts |
| *CommentApi* | [**addCommentQualityScore**](Apis/CommentApi.md#addcommentqualityscore) | **POST** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/quality | Add Comment Quality Score |
*CommentApi* | [**createComment**](Apis/CommentApi.md#createcomment) | **POST** /api/v1/users/{userId}/post/{postId}/comment | Create A Commnet |
*CommentApi* | [**deleteComment**](Apis/CommentApi.md#deletecomment) | **DELETE** /api/v1/post/{postId}/comment/{commentId} | Delete A Comment |
*CommentApi* | [**reportComment**](Apis/CommentApi.md#reportcomment) | **POST** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/report | Report A Comment |
| *CommentReplyApi* | [**createCommentReply**](Apis/CommentReplyApi.md#createcommentreply) | **POST** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/reply | Reply To A Comment |
*CommentReplyApi* | [**deleteCommentReply**](Apis/CommentReplyApi.md#deletecommentreply) | **DELETE** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/reply/{replyId} | Delete A Comment Reply |
*CommentReplyApi* | [**editCommentReply**](Apis/CommentReplyApi.md#editcommentreply) | **PUT** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/reply/{replyId} | Edit A Comment Reply |
*CommentReplyApi* | [**getCommentReplies**](Apis/CommentReplyApi.md#getcommentreplies) | **GET** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/replies | Get Comment Replies |
*CommentReplyApi* | [**reportCommentReply**](Apis/CommentReplyApi.md#reportcommentreply) | **POST** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}/report | Report A Comment Reply |
| *CommunityProfileApi* | [**createCommunityProfile**](Apis/CommunityProfileApi.md#createcommunityprofile) | **POST** /api/v1/community-profiles/{userId} | Create a community Profile |
*CommunityProfileApi* | [**deleteCommunityProfile**](Apis/CommunityProfileApi.md#deletecommunityprofile) | **DELETE** /api/v1/users/{userId}/community-profiles/{communityProfileId} | Delete Community Profile |
*CommunityProfileApi* | [**editCommunityProfile**](Apis/CommunityProfileApi.md#editcommunityprofile) | **PUT** /api/v1/users/{userId}/community-profiles/{communityProfileId} | Edit a community Profile |
*CommunityProfileApi* | [**getCommunitiesUserFollows**](Apis/CommunityProfileApi.md#getcommunitiesuserfollows) | **GET** /api/v1/users/{userId}/communities-followed | Gets all the communities a user follows |
*CommunityProfileApi* | [**getCommunityProfile**](Apis/CommunityProfileApi.md#getcommunityprofile) | **GET** /api/v1/social/community-profiles/{communityId}/requestor/{requestorProfileId}/profile-type/{requestorProfileType} | Get a community Profile |
*CommunityProfileApi* | [**getCommunityProfiles**](Apis/CommunityProfileApi.md#getcommunityprofiles) | **GET** /api/v1/community-profiles/page-size/{pageSize}/page-number/{pageNumber} | Get Community Profiles |
| *FeedApi* | [**getCommunityFeed**](Apis/FeedApi.md#getcommunityfeed) | **GET** /api/v1/community-profiles/{communityProfileId}/timeline | Gets A Community Feed |
*FeedApi* | [**getUserFeed**](Apis/FeedApi.md#getuserfeed) | **GET** /api/v1/users/{userId}/timeline | Gets A Userfeed |
*FeedApi* | [**sharePost**](Apis/FeedApi.md#sharepost) | **POST** /api/v1/users/{userId}/post/share/{parentPostId}/type/{parentPostType} | Share a post |
| *FollowApi* | [**getAccountsFollowing**](Apis/FollowApi.md#getaccountsfollowing) | **GET** /api/v1/users/{userId}/profile/{profileId}/account-type/{accountType}/following | Get Communities and users you are following |
*FollowApi* | [**getFollowers**](Apis/FollowApi.md#getfollowers) | **GET** /api/v1/users/{userId}/profile/{profileId}/followers | Get Users Following you |
*FollowApi* | [**getPendingFollows**](Apis/FollowApi.md#getpendingfollows) | **GET** /api/v1/users/{userId}/follow/pending-requests | Get Pending Follow Requests |
| *FollowCommunityProfileApi* | [**followCommunityProfile**](Apis/FollowCommunityProfileApi.md#followcommunityprofile) | **POST** /api/v1/users/source/{sourceUserId}/follow/community-profiles/{targetCommunityProfileId} | Follows A Community Profile |
| *FollowProfileApi* | [**acceptFollowProfile**](Apis/FollowProfileApi.md#acceptfollowprofile) | **POST** /api/v1/follow-requests/{followRecordId}/accept | Accepts a user's follow request |
*FollowProfileApi* | [**followProfile**](Apis/FollowProfileApi.md#followprofile) | **POST** /api/v1/users/source/{sourceUserId}/follow/target/{targetUserId} | follow a user profile |
| *NoteApi* | [**createNote**](Apis/NoteApi.md#createnote) | **POST** /api/v1/users/{userId}/post/{postId}/note | Creates and associates a note to a given post |
*NoteApi* | [**deleteNote**](Apis/NoteApi.md#deletenote) | **DELETE** /api/v1/users/{userId}/post/{postId}/note/{noteId} | Delete a note |
*NoteApi* | [**editNote**](Apis/NoteApi.md#editnote) | **PUT** /api/v1/users/{userId}/post/{postId}/note/{noteId} | Update a note |
| *PollApi* | [**createPoll**](Apis/PollApi.md#createpoll) | **POST** /api/v1/users/{userId}/poll | Create a poll |
*PollApi* | [**deletePoll**](Apis/PollApi.md#deletepoll) | **DELETE** /api/v1/users/{userId}/poll/{postId} | Delete a poll |
*PollApi* | [**getPoll**](Apis/PollApi.md#getpoll) | **GET** /api/v1/users/{userId}/poll/{postId} | Get a poll |
*PollApi* | [**getPolls**](Apis/PollApi.md#getpolls) | **GET** /api/v1/users/{userId}/polls | Get all the polls of a given user |
*PollApi* | [**respondToPoll**](Apis/PollApi.md#respondtopoll) | **POST** /api/v1/users/{userId}/poll/{pollId} | Adds a user response to a given poll by a user |
| *PostApi* | [**addPostQualityScore**](Apis/PostApi.md#addpostqualityscore) | **POST** /api/v1/users/{userId}/post/{postId}/quality | Adds a quality score to a post |
*PostApi* | [**createPost**](Apis/PostApi.md#createpost) | **POST** /api/v1/users/{userId}/post | Create a post |
*PostApi* | [**deletePost**](Apis/PostApi.md#deletepost) | **DELETE** /api/v1/users/{userId}/post/{postId}/type/{postType} | Delete a post |
*PostApi* | [**editPost**](Apis/PostApi.md#editpost) | **PUT** /api/v1/post/{postId}/type/{postType} | Edits a post by id |
*PostApi* | [**getBlogPostsByTag**](Apis/PostApi.md#getblogpostsbytag) | **GET** /api/v1/posts/blog/tag/{tag} | Get blog posts by tag |
*PostApi* | [**getCommunityBlogPosts**](Apis/PostApi.md#getcommunityblogposts) | **GET** /api/v1/community-profiles/{communityProfileId}/posts/blog | Get community blog posts |
*PostApi* | [**getPost**](Apis/PostApi.md#getpost) | **GET** /api/v1/users/{userId}/post/{postId}/type/{postType} | Get a post |
*PostApi* | [**getPostsByCategory**](Apis/PostApi.md#getpostsbycategory) | **GET** /api/v1/user/{userId}/category/{category}/posts/{postType}/limit/{limit}/offset/{offset} | Get all posts associated with a category |
*PostApi* | [**getPostsByTopic**](Apis/PostApi.md#getpostsbytopic) | **GET** /api/v1/community/{communityProfileId}/topic/{topicName}/posts | Get all posts associated with a topic |
*PostApi* | [**publishPost**](Apis/PostApi.md#publishpost) | **POST** /api/v1/users/{userId}/post/publish | Publishes a post |
*PostApi* | [**reportPost**](Apis/PostApi.md#reportpost) | **POST** /api/v1/users/{userId}/post/{postId}/type/{postType}/report | Report a post |
*PostApi* | [**reviewPost**](Apis/PostApi.md#reviewpost) | **POST** /api/v1/users/{userId}/post/review | Reviews a post |
*PostApi* | [**setPostInDraftMode**](Apis/PostApi.md#setpostindraftmode) | **POST** /api/v1/users/{userId}/post/draft | Sets a post in draft mode |
| *PostsApi* | [**getPosts**](Apis/PostsApi.md#getposts) | **GET** /api/v1/users/{userId}/posts | Get all the posts of a given user |
| *PublicationApi* | [**addPostToPublication**](Apis/PublicationApi.md#addposttopublication) | **POST** /api/v1/users/editor/{editorUserId}/publication/{publicationId} | Add a post to a publication |
*PublicationApi* | [**addPublicationEditor**](Apis/PublicationApi.md#addpublicationeditor) | **PUT** /api/v1/users/admin/{adminUserId}/publication/{publicationId}/editor/{editorUserId} | Adds an editor to a publication |
*PublicationApi* | [**createPublication**](Apis/PublicationApi.md#createpublication) | **POST** /api/v1/users/{userId}/publication | Creates a publication |
*PublicationApi* | [**deletePostFromPublication**](Apis/PublicationApi.md#deletepostfrompublication) | **DELETE** /api/v1/users/editor/{editorUserId}/publication/{publicationId}/post/{postId} | Deletes a post from a publication |
*PublicationApi* | [**deletePublication**](Apis/PublicationApi.md#deletepublication) | **DELETE** /api/v1/users/admin/{adminUserId}/publication/{publicationId} | Deletes a publication |
*PublicationApi* | [**deletePublicationEditor**](Apis/PublicationApi.md#deletepublicationeditor) | **DELETE** /api/v1/users/admin/{adminUserId}/publication/{publicationId}/editor/{editorUserId} | Deletes an editor to a publication |
*PublicationApi* | [**getPublication**](Apis/PublicationApi.md#getpublication) | **GET** /api/v1/users/{userId}/publication/{publicationId} | Gets a publication |
| *ReactionApi* | [**reactToComment**](Apis/ReactionApi.md#reacttocomment) | **POST** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/account-type/{accountType}/reaction/{reaction} | Reacts to a comment |
*ReactionApi* | [**reactToCommentReply**](Apis/ReactionApi.md#reacttocommentreply) | **POST** /api/v1/users/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}/account-type/{accountType}/reaction/{reaction} | Reacts to a comment reply |
*ReactionApi* | [**reactToPost**](Apis/ReactionApi.md#reacttopost) | **POST** /api/v1/users/{userId}/post/{postId}/account-type/{accountType}/reaction/{reaction} | Reacts to a post |
| *ServiceHealthApi* | [**healthCheck**](Apis/ServiceHealthApi.md#healthcheck) | **GET** /api/v1/health | health check |
| *ServiceReadynessApi* | [**readynessCheck**](Apis/ServiceReadynessApi.md#readynesscheck) | **GET** /api/v1/ready | readyness check |
| *TeamApi* | [**createTeam**](Apis/TeamApi.md#createteam) | **POST** /api/v1/users/team/{adminUserId} | Creates a team |
*TeamApi* | [**deleteTeam**](Apis/TeamApi.md#deleteteam) | **DELETE** /api/v1/users/team/{adminUserId}/{teamId} | Delete a team |
| *ThreadApi* | [**addPostToThread**](Apis/ThreadApi.md#addposttothread) | **POST** /api/v1/users/{userId}/post/thread/{parentPostId}/type/{postType} | Adds A Post To A Thread |
*ThreadApi* | [**getPostThread**](Apis/ThreadApi.md#getpostthread) | **GET** /api/v1/users/{userId}/post/thread/{postId} | Gets A Post's Thread |
*ThreadApi* | [**removePostFromThread**](Apis/ThreadApi.md#removepostfromthread) | **DELETE** /api/v1/users/{userId}/post/thread/{parentPostId}/type/{postType}/target/{participantPostId} | Deletes A Post From A Thread |
| *TopicApi* | [**createTopic**](Apis/TopicApi.md#createtopic) | **POST** /api/v1/users/{userId}/community/{communityProfileId}/topic | Create A Topic |
*TopicApi* | [**getTopicsOfCommunitiesUserFollows**](Apis/TopicApi.md#gettopicsofcommunitiesuserfollows) | **GET** /api/v1/users/{userId}/topics | Get Topics Of Communities User Follows |
| *UserProfileApi* | [**createUserProfile**](Apis/UserProfileApi.md#createuserprofile) | **POST** /api/v1/users | creates a user profile |
*UserProfileApi* | [**deleteUserProfile**](Apis/UserProfileApi.md#deleteuserprofile) | **DELETE** /api/v1/users/{userId} | deletes a user profile |
*UserProfileApi* | [**discoverProfiles**](Apis/UserProfileApi.md#discoverprofiles) | **GET** /api/v1/users/{userId}/discover/limit/{limit} | Discover Profiles |
*UserProfileApi* | [**editUserProfile**](Apis/UserProfileApi.md#edituserprofile) | **PUT** /api/v1/users/{userId} | update a user profile |
*UserProfileApi* | [**getCannyUserSSOToken**](Apis/UserProfileApi.md#getcannyuserssotoken) | **GET** /api/v1/user/{userId}/canny/email/{email} | Retrieves user sso token for canny |
*UserProfileApi* | [**getUserProfile**](Apis/UserProfileApi.md#getuserprofile) | **GET** /api/v1/users/{userId} | gets a user profile |
*UserProfileApi* | [**getUserProfiles**](Apis/UserProfileApi.md#getuserprofiles) | **GET** /api/v1/users/page-size/{pageSize}/page-number/{pageNumber} | Gets a set of user profiles |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [AcceptFollowProfileResponse](./Models/AcceptFollowProfileResponse.md)
 - [AccountType](./Models/AccountType.md)
 - [Actor](./Models/Actor.md)
 - [AddCommentQualityScoreResponse](./Models/AddCommentQualityScoreResponse.md)
 - [AddPostQualityScoreResponse](./Models/AddPostQualityScoreResponse.md)
 - [AddPostToPublicationResponse](./Models/AddPostToPublicationResponse.md)
 - [AddPostToThreadResponse](./Models/AddPostToThreadResponse.md)
 - [AddPublicationEditorResponse](./Models/AddPublicationEditorResponse.md)
 - [Any](./Models/Any.md)
 - [BaseTimeline](./Models/BaseTimeline.md)
 - [BlockUserProfileResponse](./Models/BlockUserProfileResponse.md)
 - [Bookmark](./Models/Bookmark.md)
 - [BookmarkPostResponse](./Models/BookmarkPostResponse.md)
 - [BookmarkPublicationResponse](./Models/BookmarkPublicationResponse.md)
 - [Category](./Models/Category.md)
 - [Comment](./Models/Comment.md)
 - [CommentReply](./Models/CommentReply.md)
 - [CommunityProfile](./Models/CommunityProfile.md)
 - [ContentInsights](./Models/ContentInsights.md)
 - [CreateCommentReplyBody](./Models/CreateCommentReplyBody.md)
 - [CreateCommentReplyResponse](./Models/CreateCommentReplyResponse.md)
 - [CreateCommentResponse](./Models/CreateCommentResponse.md)
 - [CreateCommunityProfileBody](./Models/CreateCommunityProfileBody.md)
 - [CreateCommunityProfileResponse](./Models/CreateCommunityProfileResponse.md)
 - [CreateNoteBody](./Models/CreateNoteBody.md)
 - [CreateNoteResponse](./Models/CreateNoteResponse.md)
 - [CreatePollResponse](./Models/CreatePollResponse.md)
 - [CreatePostResponse](./Models/CreatePostResponse.md)
 - [CreatePublicationResponse](./Models/CreatePublicationResponse.md)
 - [CreateTeamBody](./Models/CreateTeamBody.md)
 - [CreateTeamResponse](./Models/CreateTeamResponse.md)
 - [CreateTopicResponse](./Models/CreateTopicResponse.md)
 - [CreateUserProfileRequest](./Models/CreateUserProfileRequest.md)
 - [CreateUserProfileResponse](./Models/CreateUserProfileResponse.md)
 - [DeleteCommentReplyResponse](./Models/DeleteCommentReplyResponse.md)
 - [DeleteCommentResponse](./Models/DeleteCommentResponse.md)
 - [DeleteCommunityProfileResponse](./Models/DeleteCommunityProfileResponse.md)
 - [DeleteNoteResponse](./Models/DeleteNoteResponse.md)
 - [DeletePollResponse](./Models/DeletePollResponse.md)
 - [DeletePostFromPublicationResponse](./Models/DeletePostFromPublicationResponse.md)
 - [DeletePostResponse](./Models/DeletePostResponse.md)
 - [DeletePublicationEditorResponse](./Models/DeletePublicationEditorResponse.md)
 - [DeletePublicationResponse](./Models/DeletePublicationResponse.md)
 - [DeleteTeamResponse](./Models/DeleteTeamResponse.md)
 - [DeleteUserProfileResponse](./Models/DeleteUserProfileResponse.md)
 - [DiscoverProfilesResponse](./Models/DiscoverProfilesResponse.md)
 - [EditCommentReplyBody](./Models/EditCommentReplyBody.md)
 - [EditCommentReplyResponse](./Models/EditCommentReplyResponse.md)
 - [EditCommunityProfileRequest](./Models/EditCommunityProfileRequest.md)
 - [EditCommunityProfileResponse](./Models/EditCommunityProfileResponse.md)
 - [EditNoteResponse](./Models/EditNoteResponse.md)
 - [EditPostResponse](./Models/EditPostResponse.md)
 - [EditUserProfileResponse](./Models/EditUserProfileResponse.md)
 - [Entities](./Models/Entities.md)
 - [ErrorCode](./Models/ErrorCode.md)
 - [FeedActivity](./Models/FeedActivity.md)
 - [FeedType](./Models/FeedType.md)
 - [FollowCommunityProfileResponse](./Models/FollowCommunityProfileResponse.md)
 - [FollowProfileResponse](./Models/FollowProfileResponse.md)
 - [GetAccountsFollowingResponse](./Models/GetAccountsFollowingResponse.md)
 - [GetBlogPostsByTagResponse](./Models/GetBlogPostsByTagResponse.md)
 - [GetBookmarkedPostsResponse](./Models/GetBookmarkedPostsResponse.md)
 - [GetCannyUserSSOTokenResponse](./Models/GetCannyUserSSOTokenResponse.md)
 - [GetCommentRepliesResponse](./Models/GetCommentRepliesResponse.md)
 - [GetCommunitiesUserFollowsResponse](./Models/GetCommunitiesUserFollowsResponse.md)
 - [GetCommunityBlogPostsResponse](./Models/GetCommunityBlogPostsResponse.md)
 - [GetCommunityFeedResponse](./Models/GetCommunityFeedResponse.md)
 - [GetCommunityProfileResponse](./Models/GetCommunityProfileResponse.md)
 - [GetCommunityProfilesResponse](./Models/GetCommunityProfilesResponse.md)
 - [GetFollowersResponse](./Models/GetFollowersResponse.md)
 - [GetPendingFollowsResponse](./Models/GetPendingFollowsResponse.md)
 - [GetPollResponse](./Models/GetPollResponse.md)
 - [GetPollsResponse](./Models/GetPollsResponse.md)
 - [GetPostResponse](./Models/GetPostResponse.md)
 - [GetPostThreadResponse](./Models/GetPostThreadResponse.md)
 - [GetPostsByCategoryResponse](./Models/GetPostsByCategoryResponse.md)
 - [GetPostsByTopicResponse](./Models/GetPostsByTopicResponse.md)
 - [GetPostsResponse](./Models/GetPostsResponse.md)
 - [GetPublicationResponse](./Models/GetPublicationResponse.md)
 - [GetTopicsOfCommunitiesUserFollowsResponse](./Models/GetTopicsOfCommunitiesUserFollowsResponse.md)
 - [GetUserFeedResponse](./Models/GetUserFeedResponse.md)
 - [GetUserProfileResponse](./Models/GetUserProfileResponse.md)
 - [GetUserProfilesResponse](./Models/GetUserProfilesResponse.md)
 - [HealthCheckResponse](./Models/HealthCheckResponse.md)
 - [InternalErrorCode](./Models/InternalErrorCode.md)
 - [InternalErrorMessageResponse](./Models/InternalErrorMessageResponse.md)
 - [Media](./Models/Media.md)
 - [MediaCrop](./Models/MediaCrop.md)
 - [MediaMetadata](./Models/MediaMetadata.md)
 - [MediaResize](./Models/MediaResize.md)
 - [MediaType](./Models/MediaType.md)
 - [NotFoundErrorCode](./Models/NotFoundErrorCode.md)
 - [Note](./Models/Note.md)
 - [NotificationActivity](./Models/NotificationActivity.md)
 - [NotificationFeedGroup](./Models/NotificationFeedGroup.md)
 - [NotificationTimeline](./Models/NotificationTimeline.md)
 - [PathUnknownErrorMessageResponse](./Models/PathUnknownErrorMessageResponse.md)
 - [PendingFollowRequest](./Models/PendingFollowRequest.md)
 - [PermissionType](./Models/PermissionType.md)
 - [PollPost](./Models/PollPost.md)
 - [PollResponse](./Models/PollResponse.md)
 - [Post](./Models/Post.md)
 - [PostPublishStatus](./Models/PostPublishStatus.md)
 - [PostType](./Models/PostType.md)
 - [Publication](./Models/Publication.md)
 - [PublicationType](./Models/PublicationType.md)
 - [PublishPostBody](./Models/PublishPostBody.md)
 - [PublishPostResponse](./Models/PublishPostResponse.md)
 - [ReactToCommentReplyResponse](./Models/ReactToCommentReplyResponse.md)
 - [ReactToCommentResponse](./Models/ReactToCommentResponse.md)
 - [ReactToPostResponse](./Models/ReactToPostResponse.md)
 - [Reaction](./Models/Reaction.md)
 - [ReadynessCheckResponse](./Models/ReadynessCheckResponse.md)
 - [RemoveBookmarkedPostResponse](./Models/RemoveBookmarkedPostResponse.md)
 - [RemoveBookmarkedPublicationResponse](./Models/RemoveBookmarkedPublicationResponse.md)
 - [RemovePostFromThreadResponse](./Models/RemovePostFromThreadResponse.md)
 - [ReportCommentBody](./Models/ReportCommentBody.md)
 - [ReportCommentReplyBody](./Models/ReportCommentReplyBody.md)
 - [ReportCommentReplyResponse](./Models/ReportCommentReplyResponse.md)
 - [ReportCommentResponse](./Models/ReportCommentResponse.md)
 - [ReportPostResponse](./Models/ReportPostResponse.md)
 - [RespondToPollBody](./Models/RespondToPollBody.md)
 - [RespondToPollResponse](./Models/RespondToPollResponse.md)
 - [ReviewPostBody](./Models/ReviewPostBody.md)
 - [ReviewPostResponse](./Models/ReviewPostResponse.md)
 - [Sentiment](./Models/Sentiment.md)
 - [SetPostInDraftModeBody](./Models/SetPostInDraftModeBody.md)
 - [SetPostInDraftModeResponse](./Models/SetPostInDraftModeResponse.md)
 - [SharePostResponse](./Models/SharePostResponse.md)
 - [SharedPost](./Models/SharedPost.md)
 - [SocialProfileMetadata](./Models/SocialProfileMetadata.md)
 - [SocialRelationshipMetadata](./Models/SocialRelationshipMetadata.md)
 - [Status](./Models/Status.md)
 - [Thread](./Models/Thread.md)
 - [ThreadParticipantType](./Models/ThreadParticipantType.md)
 - [Topic](./Models/Topic.md)
 - [UserProfile](./Models/UserProfile.md)
 - [UserTags](./Models/UserTags.md)
 - [ValidationErrorMessageResponse](./Models/ValidationErrorMessageResponse.md)
 - [VirtualProfileType](./Models/VirtualProfileType.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
