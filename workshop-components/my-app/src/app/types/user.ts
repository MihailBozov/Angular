import { Post } from "./post"

export type User = {
    "themes": string[],
    "posts": string[] | Post[],
    "_id": string,
    "tel": string,
    "email": string,
    "username": string,
    "password": string,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}