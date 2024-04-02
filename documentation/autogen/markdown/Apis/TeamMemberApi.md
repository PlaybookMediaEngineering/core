# TeamMemberApi

All URIs are relative to *http://social-service.platform.svc.cluster.local:9896*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addTeamMember**](TeamMemberApi.md#addTeamMember) | **POST** /api/v1/users/teams/{teamId}/members | Add a new team member |
| [**getTeamMember**](TeamMemberApi.md#getTeamMember) | **GET** /api/v1/teams/{teamId}/members/{memberUserId} | Get details of a team member |
| [**removeTeamMember**](TeamMemberApi.md#removeTeamMember) | **DELETE** /api/v1/teams/{teamId}/members/{memberUserId}/admin/{adminUserId} | Remove a team member |


<a name="addTeamMember"></a>
# **addTeamMember**
> AddTeamMemberResponse addTeamMember(teamId, AddTeamMemberBody)

Add a new team member

    This endpoint adds a new member to a team.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **teamId** | **String**| The unique identifier of the team to which the member is being added. This field is required. | [default to null] |
| **AddTeamMemberBody** | [**AddTeamMemberBody**](../Models/AddTeamMemberBody.md)|  | |

### Return type

[**AddTeamMemberResponse**](../Models/AddTeamMemberResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getTeamMember"></a>
# **getTeamMember**
> GetTeamMemberResponse getTeamMember(teamId, memberUserId)

Get details of a team member

    This endpoint fetches details of a specific team member.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **teamId** | **String**| The unique identifier of the team whose members are being requested. This field is required. | [default to null] |
| **memberUserId** | **String**| The user ID of the member whose details are being requested. This field is required. | [default to null] |

### Return type

[**GetTeamMemberResponse**](../Models/GetTeamMemberResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="removeTeamMember"></a>
# **removeTeamMember**
> RemoveTeamMemberResponse removeTeamMember(teamId, memberUserId, adminUserId)

Remove a team member

    This endpoint removes a member from a team.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **teamId** | **String**| The unique identifier of the team from which the member is being removed. This field is required. | [default to null] |
| **memberUserId** | **String**| The user ID of the member being removed from the team. This field is required. | [default to null] |
| **adminUserId** | **String**| The user ID of the team administrator. This field is required. | [default to null] |

### Return type

[**RemoveTeamMemberResponse**](../Models/RemoveTeamMemberResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

