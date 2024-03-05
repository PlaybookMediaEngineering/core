import {
  BlockProfileApi,
  BookmarkApi,
  BookmarksApi,
  CommentApi,
  CommentReplyApi,
  CommunityProfileApi,
  Configuration,
  FeedApi,
  FollowApi,
  FollowCommunityProfileApi,
  FollowProfileApi,
  NoteApi,
  PollApi,
  PostApi,
  PostsApi,
  PublicationApi,
  ReactionApi,
  ThreadApi,
  TopicApi,
  UserProfileApi,
} from "../typescript-fetch/index";

export function getConfiguration(token: string, backendUrl: string): Configuration {
  const config = new Configuration({
    basePath:
      backendUrl|| "https://playbookmedia-engineering.com",
    accessToken: token,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    middleware: [],
  });
  return config;
}

// Singleton class for HttpClient
export class BackendClient {
  public userProfileApi: UserProfileApi;
  public blockProfileApi: BlockProfileApi;
  public bookmarkApi: BookmarkApi;
  public bookmarksApi: BookmarksApi;
  public commentApi: CommentApi;
  public commentReplyApi: CommentReplyApi;
  public communityProfileApi: CommunityProfileApi;
  public feedApi: FeedApi;
  public followApi: FollowApi;
  public followCommunityApi: FollowCommunityProfileApi;
  public followProfileApi: FollowProfileApi;
  public noteApi: NoteApi;
  public pollApi: PollApi;
  public postApi: PostApi;
  public publicationApi: PublicationApi;
  public reactionApi: ReactionApi;
  public threadApi: ThreadApi;
  public topicApi: TopicApi;
  public postsApi: PostsApi;

  // Private constructor to prevent direct construction calls with the `new` operator
  public constructor(config: Configuration) {
    this.userProfileApi = new UserProfileApi(config);
    this.blockProfileApi = new BlockProfileApi(config);
    this.bookmarkApi = new BookmarkApi(config);
    this.bookmarksApi = new BookmarksApi(config);
    this.commentApi = new CommentApi(config);
    this.commentReplyApi = new CommentReplyApi(config);
    this.communityProfileApi = new CommunityProfileApi(config);
    this.feedApi = new FeedApi(config);
    this.followApi = new FollowApi(config);
    this.followCommunityApi = new FollowCommunityProfileApi(config);
    this.followProfileApi = new FollowProfileApi(config);
    this.noteApi = new NoteApi(config);
    this.pollApi = new PollApi(config);
    this.postApi = new PostApi(config);
    this.publicationApi = new PublicationApi(config);
    this.reactionApi = new ReactionApi(config);
    this.threadApi = new ThreadApi(config);
    this.topicApi = new TopicApi(config);
    this.postsApi = new PostsApi(config);
  }
}

export class SingletonHttpClient {
  public static instance: BackendClient | null = null;
  private config: Configuration;

  // Private constructor
  private constructor(config: Configuration) {
    this.config = config;
  }

  // Static method to get/create the singleton instance
  public static getInstance(cfg: Configuration): BackendClient {
    if (!this.instance) {
      this.instance = new BackendClient(cfg);
    }

    return this.instance;
  }
}
