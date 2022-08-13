import enum
import typer
import json
import yaml
import uvicorn

from .api import api

cli = typer.Typer(name="server")
host_opt = typer.Option("127.0.0.1", help="on what IP to host the server")


@cli.command("develop", help="run a development server with livereload")
def dev_server(*, host=host_opt):
    uvicorn.run("server.api:api", host=host)


class Format(enum.Enum):
    json = "json"
    yaml = "yaml"


@cli.command("print-openapi", help="write the openapi spec as JSON to STDOUT")
def print_api_spec(format: Format = typer.Option(Format.json.value, help="...")):
    openapi = api.openapi()
    if format == Format.json:
        print(json.dumps(openapi, sort_keys=True, indent=2))
    elif format == Format.yaml:
        print(yaml.dump(openapi, sort_keys=True, indent=2))


if __name__ == "__main__":
    cli()
