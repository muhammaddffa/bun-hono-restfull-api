import { Hono } from "hono";
import { RegisterUserRequest } from "../model/user-model";

export const userController = new Hono()

userController.post('/api/users', async (c) => {
    const request = await c.req.json() as RegisterUserRequest;


    //kirim ke service 

    //Return response
})