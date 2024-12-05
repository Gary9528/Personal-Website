// pages/index.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/home");
    }
  }, [router]);

  return null;
};

export default IndexPage;
