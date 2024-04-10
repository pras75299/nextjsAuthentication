import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { password, token } = reqBody;
  console.log(token);

  try {
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" });
    }
    console.log(user);

    // hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    user.password = hashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    user.save();

    return NextResponse.json({
      message: "Password reset successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}