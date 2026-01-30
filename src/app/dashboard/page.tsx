'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Pledge {
  id: string;
  pledgeType: string;
  percentageAmount?: number;
  fixedAmount?: number;
  frequency: string;
  musicFund: number;
  filmFund: number;
  techFund: number;
  status: string;
  createdAt: string;
  transactions: any[];
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalContributed: 0,
    activePledges: 0,
    projectsFunded: 0,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchPledges();
    }
  }, [session]);

  const fetchPledges = async () => {
    try {
      const response = await fetch('/api/pledges');
      const data = await response.json();
      setPledges(data.pledges || []);
      
      // Calculate stats
      const total = data.pledges?.reduce((sum: number, pledge: Pledge) => {
        return sum + pledge.transactions.reduce((t: number, trans: any) => t + trans.amount, 0);
      }, 0) || 0;
      
      setStats({
        totalContributed: total,
        activePledges: data.pledges?.filter((p: Pledge) => p.status === 'active').length || 0,
        projectsFunded: 0, // This would come from grants data
      });
    } catch (error) {
      console.error('Error fetching pledges:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome, {session.user?.name || 'Creator'}</h1>
          <p className="text-gray-600">Manage your pledges and track your impact</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold mb-2">${stats.totalContributed.toFixed(2)}</div>
            <div className="text-gray-600">Total Contributed</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold mb-2">{stats.activePledges}</div>
            <div className="text-gray-600">Active Pledges</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold mb-2">{stats.projectsFunded}</div>
            <div className="text-gray-600">Projects Funded</div>
          </div>
        </div>

        {/* Pledges Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Pledges</h2>
            <Link
              href="/dashboard/create-pledge"
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Create New Pledge
            </Link>
          </div>

          {pledges.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">No Pledges Yet</h3>
              <p className="text-gray-600 mb-6">Start making an impact by creating your first pledge</p>
              <Link
                href="/dashboard/create-pledge"
                className="inline-block px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Create Your First Pledge
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {pledges.map((pledge) => (
                <div key={pledge.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-lg font-bold">
                        {pledge.pledgeType === 'percentage' 
                          ? `${pledge.percentageAmount}% of earnings`
                          : `$${pledge.fixedAmount} fixed`
                        }
                      </div>
                      <div className="text-gray-600 text-sm capitalize">{pledge.frequency}</div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      pledge.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {pledge.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Music Fund</div>
                      <div className="font-semibold">{pledge.musicFund}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Film Fund</div>
                      <div className="font-semibold">{pledge.filmFund}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Tech Fund</div>
                      <div className="font-semibold">{pledge.techFund}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Impact Section */}
        <div className="bg-black text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Your Impact</h2>
          <p className="text-gray-300 mb-6">
            Your contributions are supporting the next generation of Bay Area creators. 
            Stay tuned for updates on projects funded through your pledges.
          </p>
          <Link
            href="/creator-fund"
            className="inline-block px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Funded Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
