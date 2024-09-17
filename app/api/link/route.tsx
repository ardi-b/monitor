import { NextResponse } from "next/server";

export async function GET() {
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