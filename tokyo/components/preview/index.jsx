// pages/index.js
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // Redirect to /home
  }, [router]);

  return null;
};

export default IndexPage;
