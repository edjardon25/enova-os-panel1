import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  return NextResponse.json({
    message: `Draft: ${prompt}\n\n(ENOVA will generate a polished message using your CRM data)`
  });
}
