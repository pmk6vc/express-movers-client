export async function GET() {
    const res = await fetch("https://express-movers-h3fpwbsj7a-uc.a.run.app/_health/ping")
    const data = await res.text()
    return new Response(data)
}