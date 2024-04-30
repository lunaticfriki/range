import { EXERCISE_1_RESPONSE } from '@/modules';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(EXERCISE_1_RESPONSE);
}
