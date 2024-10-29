import { Post } from "./post"
import { User } from "./user"

export type Theme = {
        "subscribers": string[],
        "posts": Post[] ,
        "_id": string,
        "themeName": string,
        "userId": User,
        "created_at": string,
        "updatedAt": string,
        "__v": number
    }