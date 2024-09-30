import {connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();
 
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;


         //check if the user exista
        const user = await User.findOne({email, username})

        if(user){
            return NextResponse.json({error: "user already exist"}, {status: 400})
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        //save new user to the database
        const savedUser = await  newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: "user created successfully",
            success: true,
            savedUser,
        
        })

    } catch (error: any) {
        return NextResponse.json({
            error:  error.message
        },
        {status:500}
    )   
        
    }
}