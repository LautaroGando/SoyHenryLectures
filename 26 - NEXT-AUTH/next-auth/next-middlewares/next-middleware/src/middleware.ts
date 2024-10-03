import { NextResponse } from "next/server";

export const middleware = (req) => {

    const user = "";

    if (!user) return NextResponse.redirect(new URL("/", req.url));

    return NextResponse.next();

};

export const config = {
    matcher: ["/user", "/admin"],
};