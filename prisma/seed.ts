import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const password = await hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'dharmendra.ahirwar101@gmail.com' },
    update: {},
    create: {
      email: 'dharmendra.ahirwar101@gmail.com',
      name: 'Dharmendra Ahirwar',
      password,
      role: 'ADMIN',
    },
  });

  console.log({ admin });

  // Create initial content blocks
  const heroTitle = await prisma.contentBlock.upsert({
    where: { identifier: 'hero-title' },
    update: {},
    create: {
      identifier: 'hero-title',
      content: "Hello, I'm Dharmendra Ahirwar",
      section: 'hero',
      type: 'TEXT',
    },
  });

  const heroDescription = await prisma.contentBlock.upsert({
    where: { identifier: 'hero-description' },
    update: {},
    create: {
      identifier: 'hero-description',
      content: 'Software Engineer with a passion for building impactful technology solutions in quantitative finance and distributed systems.',
      section: 'hero',
      type: 'TEXT',
    },
  });

  console.log({ heroTitle, heroDescription });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 