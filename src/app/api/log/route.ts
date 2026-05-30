import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, messages, event } = body;
    console.log(`[Sunhighlands Log] Session: ${sessionId}, Event: ${event}, Messages: ${messages?.length || 0}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
