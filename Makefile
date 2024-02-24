SWAGGER_CODEGEN_PATH:=./core-library/pkg/generated/social_service/v2/apidocs.swagger.json
VERSION = 3
FILE = ./krakend-config/final-krakend.json

gen: 
	cd core-library && make gen && cd ../

copy-swagger:
	cp -rf $(SWAGGER_CODEGEN_PATH) ./swagger

convert-swagger-to-openapiv3:
	swagger2openapi --yaml --outfile ./swagger/backend-api.yaml $(SWAGGER_CODEGEN_PATH)
	swagger2openapi --outfile ./swagger/backend-api.json $(SWAGGER_CODEGEN_PATH)

# generate the various typescript sdks for this core-lib
update-typescript-sdk:
	openapi-generator generate \
    	-i ./swagger/backend-api.yaml \
    	-g typescript-fetch -o ./playbook-media-typescript-sdk/src/typescript-fetch

update-docs:
	openapi-generator generate \
    -i ./swagger/backend-api.yaml \
    -g openapi-yaml -o ./documentation/autogen/openapi-yaml

	openapi-generator generate \
		-i ./swagger/backend-api.yaml \
		-g markdown -o ./documentation/autogen/markdown

	openapi-generator generate \
		-i ./swagger/backend-api.yaml \
		-g postman-collection -o ./documentation/autogen/postman-collection

generate-krakend-config:
	mkdir temp-swagger && cp ./swagger/backend-api.json ./temp-swagger/backend-api.json
	go run ./openapi2krakend/pkg/main.go -directory ./temp-swagger -output ./krakend-config/krakend.json
	rm -rf temp-swagger

prettify-krakend:
	cat ./krakend-config/krakend.json | jq >> ./krakend-config/krakend.compiled.json
	mv ./krakend-config/krakend.compiled.json ./krakend-config/krakend.json

merge-configs: 
	jq -s '.[0] * .[1]' ./krakend-config/gateway-configurations.json ./krakend-config/krakend.json > ./krakend-config/final-krakend.json
	@sed -i '' 's/"version": "3"/"version": $(VERSION)/' $(FILE)


validate:
	krakend check --config ./krakend-config/final-krakend.json -ddd
	krakend check -tlc ./krakend-config/final-krakend.json

copy-configs-to-gateway:
	cp ./krakend-config/final-krakend.json ./backend-api-gateway/krakend.json

autogen: gen copy-swagger convert-swagger-to-openapiv3 update-typescript-sdk update-docs generate-krakend-config prettify-krakend merge-configs validate copy-configs-to-gateway