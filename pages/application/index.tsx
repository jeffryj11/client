import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ApplicationIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/application/start');
  }, [router]);

  return null;
}