import os
import subprocess
from pathlib import Path

import typer

this_dir = Path(__file__).parent
repo_root = Path(this_dir).parent
client_dir = Path(repo_root, "client")
api_spec = Path(repo_root, "server/openapi.yaml")


def main(
    *,
    input_spec: Path = typer.Option(api_spec, help="the openapi v3 spec for the api"),
    client_generator: str = typer.Option(
        "typescript-fetch",
        help="the runtime for the api client; see https://openapi-generator.tech/docs/generators",
    ),
    output_dir: Path = typer.Option(
        client_dir, help="where to place the generated api client"
    ),
    dry_run: bool = typer.Option(
        False,
        help="Print the subcommand that would be run instead of actually running it",
    ),
) -> None:
    "generate an api client from the"
    relative_path_to_spec = input_spec.relative_to(os.getcwd())
    assert input_spec.exists(), f"{relative_path_to_spec} does not exist"
    assert input_spec.is_file(), f"{relative_path_to_spec} is not a file"

    assert (
        output_dir.is_dir() or not output_dir.exists()
    ), f"{output_dir.relative_to(os.getcwd())} is a file"
    os.makedirs(output_dir, exist_ok=True)
    cmd = [
        "docker",
        "run",
        "--rm",
        f"--user={os.getuid()}:{os.getgid()}",
        f"--volume={repo_root.absolute()}:/local",
        "--workdir=/local",
        "docker.io/openapitools/openapi-generator-cli:v6.0.1",
        "generate",
        "-i",
        input_spec.relative_to(repo_root),
        "-g",
        client_generator,
        "-o",
        output_dir.relative_to(repo_root),
    ]
    if dry_run:
        print(f"would run: `{' '.join(cmd)}`")
    else:
        subprocess.run(cmd, check=True)


if __name__ == "__main__":
    typer.run(main)
