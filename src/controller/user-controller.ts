import { Hono } from "hono";
import { RegisterUserRequest } from "../model/user-model";
import { UserService } from "../service/user-service";

export const userController = new Hono();

userController.post("/api/users", async (c) => {
  const request = (await c.req.json()) as RegisterUserRequest;

  //kirim ke service
  const response = UserService.register(request);

  //Return response
  return c.json({
    data: response,
  });
});
