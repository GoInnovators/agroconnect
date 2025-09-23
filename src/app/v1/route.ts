import { NextResponse } from "next/server";

export const GET = () => {

    return NextResponse.json({ health: "ok", status: "success", version: "1.0.0" }, { status: 200 });
};