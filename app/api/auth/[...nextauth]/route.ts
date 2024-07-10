// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth'; // Adjust this import path if necessary

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };