package main

import (
	"encoding/json"
	"flag"
	"os"
	"path/filepath"

	"github.com/okhuz/openapi2krakend/pkg/converter"
	"github.com/okhuz/openapi2krakend/pkg/models"
	"github.com/okhuz/openapi2krakend/pkg/utility"
)

func main() {
	swaggerDirectory := flag.String("directory", "./swagger", "Directory of the swagger files")
	outputFilePath := flag.String("output", "output/krakend.json", "Output file path")
	webhookHost := flag.String("webhookHost", "http://localhost:8080", "Webhook host")
	webhookPathUrl := flag.String("webhookPathUrl", "/stripe/webhook", "Webhook path url")
	webhookKrakendEndpointUrl := flag.String("webhookKrakendEndpointUrl", "/stripe/webhook", "Webhook krakend endpoint url")
	webhookMethod := flag.String("webhookMethod", "post", "Webhook method")

	flag.Parse()

	webhookCfg := &models.WebhookFixedConfigurations{
		WebhookHost:               *webhookHost,
		WebhookPathUrl:            *webhookPathUrl,
		WebhookKrakendEndpointUrl: *webhookKrakendEndpointUrl,
		WebhookMethod:             *webhookMethod,
	}

	encoding := utility.GetEnv("ENCODING", "json")
	globalTimeout := utility.GetEnv("GLOBAL_TIMEOUT", "10000ms")

	configuration := converter.Convert(*swaggerDirectory, encoding, globalTimeout, webhookCfg)

	file, _ := json.MarshalIndent(configuration, "", " ")
	outputDir := filepath.Dir(*outputFilePath)
	_ = os.MkdirAll(outputDir, 0777)
	_ = os.WriteFile(*outputFilePath, file, 0644)
}
