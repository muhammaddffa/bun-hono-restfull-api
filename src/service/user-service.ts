import { RegisterUserRequest, toUserResponse, UserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { prismaClient } from "../application/database";
import { HTTPException } from "hono/http-exception";

export class UserService {
  static async register(request: RegisterUserRequest): Promise<UserResponse> {
    request = UserValidation.REGISTER.parse(request);

    //Validasi request
    const totalUsernameWithUsername = await prismaClient.user.count({
      where: {
        username: request.username,
      },
    });

    // cek apakah data di database atau tidak

    if (totalUsernameWithUsername != 0) {
      throw new HTTPException(400, {
        message: "Username already exists",
      });
    }

    // hashing password menggunakan bcrypt
    request.password = await Bun.password.hash(request.password, {
      algorithm: "bcrypt",
      cost: 10,
    });

    // save database

    const User = await prismaClient.user.create({
        data: request 
    })
   return toUserResponse(User); 
  }
}
