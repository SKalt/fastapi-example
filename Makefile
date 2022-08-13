
.PHONY: all install client openapi-spec dev-server clean
all: install client dev-server
install:
	poetry install
dev-server:
	poetry run python3 -m server develop
client: ./client/index.ts
./client/index.ts: ./server/openapi.yaml
	poetry run python3 -m scripts.generate_client

openapi-spec: ./server/openapi.yaml
./server/openapi.yaml: ./server/api.py
	poetry run python3 -m server print-openapi --format yaml > ./server/openapi.yaml

clean:
	rm -rf ./client ./server/openapi.yaml
