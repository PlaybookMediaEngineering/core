# TeamApi

All URIs are relative to *http://social-service.platform.svc.cluster.local:9896*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTeam**](TeamApi.md#createTeam) | **POST** /api/v1/users/team/{adminUserId} | Creates a team |
| [**deleteTeam**](TeamApi.md#deleteTeam) | **DELETE** /api/v1/users/team/{adminUserId}/{teamId} | Delete a team |


<a name="createTeam"></a>
# **createTeam**
> CreateTeamResponse createTeam(adminUserId, CreateTeamBody)

Creates a team

    This endpoint enables a client to create a team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **adminUserId** | **String**| The user ID of the team administrator. This field is required. | [default to null] |
| **CreateTeamBody** | [**CreateTeamBody**](../Models/CreateTeamBody.md)|  | |

### Return type

[**CreateTeamResponse**](../Models/CreateTeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTeam"></a>
# **deleteTeam**
> DeleteTeamResponse deleteTeam(adminUserId, teamId)

Delete a team

    This endpoint deletes a specific team.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **adminUserId** | **String**| The user ID of the team administrator. This field is required. | [default to null] |
| **teamId** | **String**| The unique identifier of the team being deleted. This field is required. | [default to null] |

### Return type

[**DeleteTeamResponse**](../Models/DeleteTeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

