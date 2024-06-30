// @ts-ignore
import {log} from "@repo/logger";
import {createServer} from "./server";
import PostCtrl from "./modules/post/PostCtrl.ts";
import UserCtrl from "./modules/user/UserCtrl.ts";
import {PostSchema} from "./modules/post/models/PostDTOs.ts";
import {action} from "./lib/DtoValidator.ts";




const port = process.env.PORT || 8080
const server = createServer()

server.listen(port, () => log(`api running on ${port}`) )




server.post('/post/', action(PostSchema, PostCtrl.CreatePost))
server.get('/post/list/', PostCtrl.ListPost)
server.get('/post/:id', PostCtrl.GetPost)
server.put('/post/', action(PostSchema, PostCtrl.UpdatePost))
server.delete('/post/:id', PostCtrl.UpdatePost)



server.post('/user/', UserCtrl.createUser)

