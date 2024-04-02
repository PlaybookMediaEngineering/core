# TeamApi

All URIs are relative to *http://social-service.platform.svc.cluster.local:9896*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTeam**](TeamApi.md#createTeam) | **POST** /api/v1/users/team/{adminUserId} | Creates a team |
| [**deleteTeam**](TeamApi.md#deleteTeam) | **DELETE** /api/v1/users/team/{adminUserId}/{teamId} | Delete a team |
| [**getTeam**](TeamApi.md#getTeam) | **GET** /api/v1/users/team/{adminOrMemberUserId}/{teamId} | Get a team |


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

<a name="getTeam"></a>
# **getTeam**
> GetTeamResponse getTeam(adminOrMemberUserId, teamId, includeMembers, includePublications, includeAuditLogs)

Get a team

    This endpoint gets a specific team.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **adminOrMemberUserId** | **String**| The user ID of the member or admin requesting the team details. This field is required. | [default to null] |
| **teamId** | **String**| The unique identifier of the team whose details are being requested. This field is required. | [default to null] |
| **includeMembers** | **Boolean**| Optional flag to include detailed information about team members in the response. If true, the response will contain a list of team members and their roles. | [optional] [default to null] |
| **includePublications** | **Boolean**| Optional flag to include a list of publicatins or activities associated with the team in the response. If true, the response will contain detailed information about the team&#39;s projects or activities. | [optional] [default to null] |
| **includeAuditLogs** | **Boolean**| Optional flag to include the team&#39;s audit log entries in the response. If true, the response will contain recent audit log entries for the team. | [optional] [default to null] |

### Return type

[**GetTeamResponse**](../Models/GetTeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

