import { EXERCISE_2_RESPONSE } from '@/modules';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(EXERCISE_2_RESPONSE);
}
