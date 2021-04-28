from pydantic import BaseModel, Field

class Team_Member(BaseModel):
    id: int
    name: str = Field(
        None, title="Name of the team member", max_length=300
    )