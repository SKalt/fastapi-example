from fastapi import FastAPI
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel
from datetime import datetime
from typing import Generic,  List, Optional,  TypeVar


class BlogPost(BaseModel):
    "a blog post"
    title: str
    author: str
    content: str
    published: datetime


Data = TypeVar("Data")


class Response(GenericModel, Generic[Data]):
    "a generic api response"
    data: Data
    errors: Optional[List[str]]


api = FastAPI()


@api.get("/api/greeting", response_model=Response[str])
def greet(to_greet: str) -> Response[str]:
    "say hello"
    return Response[str](data=f"hello {to_greet}")


@api.get("/api/blog/posts", response_model=Response[List[BlogPost]])
async def get_blog_posts() -> Response[List[BlogPost]]:
    "Serve up some _original content_"
    return Response[List[BlogPost]](data=[
        {  # you can pass dicts, which are validated at runtime
            "title": "foo",
            "content": "foo was just for SEO, this is about bar",
            "author": "baz",
            "published": datetime.now()
        },
        BlogPost( # alternately, mypy can validate this statically
            title="foo 2",
            content="a repost of foo, now with more bar",
            author="baz",
            published=datetime.now()
        )
    ])
