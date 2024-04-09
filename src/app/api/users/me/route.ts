import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/userModel';
import { connect } from '@/dbConfig/dbConfig';

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findById(userId).select("-password -isAdmin");
        return NextResponse.json({
            message: "User Found",
            data: user
        });
    } catch (error: unknown) {
        // Ensure error handling accounts for different types of errors
        const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
}