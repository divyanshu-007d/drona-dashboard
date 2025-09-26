'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to army dashboard on page load
    router.push('/dashboard');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
          <span className="text-white font-bold text-xl">🇮🇳</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">ARYA Dashboard</h1>
        <p className="text-gray-300">Army Recruitment & Youth Assessment</p>
        <p className="text-gray-400 text-sm mt-2">Loading India&apos;s Defense Talent...</p>
      </div>
    </div>
  );
}
