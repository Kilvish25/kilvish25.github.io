import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { identifier, content, type } = await req.json();

    if (!identifier || !content || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const contentBlock = await prisma.contentBlock.upsert({
      where: { identifier },
      update: { content },
      create: {
        identifier,
        content,
        type,
        section: identifier.split('-')[0],
      },
    });

    // Create history entry
    await prisma.contentHistory.create({
      data: {
        contentBlockId: contentBlock.id,
        content,
        updatedBy: session.user.id,
      },
    });

    return NextResponse.json(contentBlock);
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const identifier = searchParams.get('identifier');

    if (!identifier) {
      return NextResponse.json({ error: 'Missing identifier' }, { status: 400 });
    }

    const contentBlock = await prisma.contentBlock.findUnique({
      where: { identifier },
    });

    if (!contentBlock) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json(contentBlock);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 