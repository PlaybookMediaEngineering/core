# UserProfileApi

All URIs are relative to *http://social-service.platform.svc.cluster.local:9896*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserProfile**](UserProfileApi.md#createUserProfile) | **POST** /api/v1/users | creates a user profile |
| [**deleteUserProfile**](UserProfileApi.md#deleteUserProfile) | **DELETE** /api/v1/users/{userId} | deletes a user profile |
| [**discoverProfiles**](UserProfileApi.md#discoverProfiles) | **GET** /api/v1/users/{userId}/discover/limit/{limit} | Discover Profiles |
| [**getUserProfile**](UserProfileApi.md#getUserProfile) | **GET** /api/v1/users/{userId} | gets a user profile |
| [**getUserProfiles**](UserProfileApi.md#getUserProfiles) | **GET** /api/v1/users/page-size/{pageSize}/page-number/{pageNumber} | Gets a set of user profiles |


<a name="createUserProfile"></a>
# **createUserProfile**
> CreateUserProfileResponse createUserProfile(CreateUserProfileRequest)

creates a user profile

    This endpoint enables a client to create a user profile

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateUserProfileRequest** | [**CreateUserProfileRequest**](../Models/CreateUserProfileRequest.md)|  | |

### Return type

[**CreateUserProfileResponse**](../Models/CreateUserProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteUserProfile"></a>
# **deleteUserProfile**
> DeleteUserProfileResponse deleteUserProfile(userId)

deletes a user profile

    This endpoint enables a client to delete a user profile

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| the user ID trying to delete this user profile (NOTE: userID refers to the ID from the vantage point of the user service. This ID is the single source of truth for a given user across our suite of services) | type: uint64 | [default to null] |

### Return type

[**DeleteUserProfileResponse**](../Models/DeleteUserProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="discoverProfiles"></a>
# **discoverProfiles**
> DiscoverProfilesResponse discoverProfiles(userId, limit)

Discover Profiles

    This endpoint enables a client to discover a set of profiles he/she does not follow

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**|  | [default to null] |
| **limit** | **String**|  | [default to null] |

### Return type

[**DiscoverProfilesResponse**](../Models/DiscoverProfilesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserProfile"></a>
# **getUserProfile**
> GetUserProfileResponse getUserProfile(userId, requestorProfileId, requestorProfileType)

gets a user profile

    This endpoint performs a query against the social service to obtain a user profile

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| The user ID associated with the profile we want to get | type: uint64 | [default to null] |
| **requestorProfileId** | **String**| The RequestorProfileID is an optional parameter used to check if the profileID (requestor) making a request for the record actually follows the record | [optional] [default to null] |
| **requestorProfileType** | **String**| The RequestorProfileType is an optional parameter which tells us what type of profile is the requestor | [optional] [default to ACCOUNT_TYPE_UNSPECIFIED] [enum: ACCOUNT_TYPE_UNSPECIFIED, ACCOUNT_TYPE_USER, ACCOUNT_TYPE_COMMUNITY] |

### Return type

[**GetUserProfileResponse**](../Models/GetUserProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserProfiles"></a>
# **getUserProfiles**
> GetUserProfilesResponse getUserProfiles(pageSize, pageNumber)

Gets a set of user profiles

    This endpoint enables a client to get a number of user profiles in a paginated manner

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | **Integer**|  | [default to null] |
| **pageNumber** | **Integer**|  | [default to null] |

### Return type

[**GetUserProfilesResponse**](../Models/GetUserProfilesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

