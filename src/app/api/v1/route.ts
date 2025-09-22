import { NextResponse } from "next/server";

export const GET = () => {

    return NextResponse.json({ health: "ok" }, { status: 200 });
};