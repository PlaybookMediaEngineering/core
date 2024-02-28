package models

func DefaultEndpointExtraConfig() map[string]interface{} {
	return map[string]interface{}{
		"qos/ratelimit/router": map[string]interface{}{
			"@comment": "1 million requests every second",
			"max_rate": 6000000,
			"every":    "1m",
		},
	}
}

func DefaultBackendExtraConfig() map[string]interface{} {
	return map[string]interface{}{
		"modifier/martian": map[string]interface{}{
			"fifo.Group": map[string]interface{}{
				"scope":           []string{"request", "response"},
				"aggregateErrors": true,
				"modifiers": []map[string]interface{}{
					{
						"header.Append": map[string]interface{}{
							"scope": []string{"request", "response"},
							"name":  "X-PLATFORM",
							"value": "playbook-media",
						},
					},
				},
			},
		},
		"qos/circuit-breaker": map[string]interface{}{
			"interval":          30,
			"timeout":           10,
			"max_errors":        5,
			"log_status_change": true,
			"name":              "playbook-media-circuit-breaker",
		},
		"backend/http": map[string]interface{}{
			"return_error_details": "message",
		},
	}
}
