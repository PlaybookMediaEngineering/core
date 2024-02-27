# V2Api

All URIs are relative to *http://social-service.platform.svc.cluster.local:9896*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCannyUserSSOToken**](V2Api.md#getCannyUserSSOToken) | **GET** /api/v1/user/{userId}/canny/accounty-type/{accountType} | Retrieves user sso token for canny |


<a name="getCannyUserSSOToken"></a>
# **getCannyUserSSOToken**
> GetCannyUserSSOTokenResponse getCannyUserSSOToken(userId, accountType)

Retrieves user sso token for canny

    Fetches a user sso token for canny

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**|  | [default to null] |
| **accountType** | **String**| Indicates the profile type to be queried. For example: \&quot;username:testuser\&quot; | [default to null] [enum: ACCOUNT_TYPE_UNSPECIFIED, ACCOUNT_TYPE_USER, ACCOUNT_TYPE_COMMUNITY] |

### Return type

[**GetCannyUserSSOTokenResponse**](../Models/GetCannyUserSSOTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

