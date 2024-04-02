# AuditLog
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** |  | [optional] [default to null] |
| **action** | **String** |  | [optional] [default to null] |
| **userId** | **String** |  | [optional] [default to null] |
| **timestamp** | **String** |  | [optional] [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **actionType** | [**ActionType**](ActionType.md) |  | [optional] [default to null] |
| **ipAddress** | **String** | logs the IP address from where the action was initiated, which is useful for security and auditing purposes. | [optional] [default to null] |
| **outcome** | [**Outcome**](Outcome.md) |  | [optional] [default to null] |
| **affectedEntityType** | **String** | give specific information about the entity that was affected by the action, making it easier to trace and understand the impact of each logged activity. | [optional] [default to null] |
| **affectedEntityId** | **String** |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

