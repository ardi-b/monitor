import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({ 
        data: [
            {
                title: "Home",
                link: "/"
            }, 
            {
                title: "Json",
                link: "/json"
            },
            {
                title: "About",
                link: "/about"
            },
        ]
    })
}