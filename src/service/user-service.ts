import { PrismaClient } from "@prisma/client";
import { RegisterUserRequest, UserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";

export class UserService {
    static async (request: RegisterUserRequest): Promise<UserResponse> {
        //Validasi request
        UserValidation.REGISTER.parse(request)
        // cek apakah data di database atau tidak

        PrismaClient.user.count({
            
        })
        // hashing password menggunakan bcrypt

        // save database

        //return response
    }
}