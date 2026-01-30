'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function CreatePledgePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    pledgeType: 'percentage',
    percentageAmount: 1,
    fixedAmount: 50,
    frequency: 'quarterly',
    musicFund: 34,
    filmFund: 33,
    techFund: 33,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (status === 'loading') {
    return <div className="min-h-screen pt-24 flex items-center justify-center">Loading...</div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate fund allocation
    const total = formData.musicFund + formData.filmFund + formData.techFund;
    if (total !== 100) {
      setError('Fund allocation must total exactly 100%');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/pledges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message || 'Failed to create pledge');
    } finally {
      setLoading(false);
    }
  };

  const totalAllocation = formData.musicFund + formData.filmFund + formData.techFund;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Create Your Pledge</h1>
          <p className="text-gray-600">
            Choose how you want to support Bay Area creators
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-8">
          {/* Pledge Type */}
          <div>
            <label className="block text-lg font-semibold mb-4">Pledge Type</label>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, pledgeType: 'percentage' })}
                className={`p-6 rounded-xl border-2 transition-all ${
                  formData.pledgeType === 'percentage'
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-bold text-xl mb-2">Percentage</div>
                <div className="text-gray-600 text-sm">
                  A percentage of your quarterly earnings
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, pledgeType: 'fixed' })}
                className={`p-6 rounded-xl border-2 transition-all ${
                  formData.pledgeType === 'fixed'
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-bold text-xl mb-2">Fixed Amount</div>
                <div className="text-gray-600 text-sm">
                  A set dollar amount per cycle
                </div>
              </button>
            </div>
          </div>

          {/* Amount */}
          <div>
            {formData.pledgeType === 'percentage' ? (
              <div>
                <label htmlFor="percentage" className="block text-lg font-semibold mb-2">
                  Percentage Amount
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    id="percentage"
                    min="1"
                    max="10"
                    step="0.5"
                    value={formData.percentageAmount}
                    onChange={(e) =>
                      setFormData({ ...formData, percentageAmount: parseFloat(e.target.value) })
                    }
                    className="flex-1"
                  />
                  <div className="text-3xl font-bold w-24 text-right">
                    {formData.percentageAmount}%
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Most creators pledge 1-5% of their quarterly earnings
                </p>
              </div>
            ) : (
              <div>
                <label htmlFor="fixed" className="block text-lg font-semibold mb-2">
                  Fixed Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">$</span>
                  <input
                    type="number"
                    id="fixed"
                    min="10"
                    step="10"
                    value={formData.fixedAmount}
                    onChange={(e) =>
                      setFormData({ ...formData, fixedAmount: parseFloat(e.target.value) })
                    }
                    className="w-full pl-10 pr-4 py-4 text-2xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Frequency */}
          <div>
            <label className="block text-lg font-semibold mb-4">Payment Frequency</label>
            <div className="grid md:grid-cols-3 gap-4">
              {['monthly', 'quarterly', 'yearly'].map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => setFormData({ ...formData, frequency: freq })}
                  className={`p-4 rounded-lg border-2 transition-all capitalize ${
                    formData.frequency === freq
                      ? 'border-black bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          {/* Fund Allocation */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Fund Allocation
              <span className={`ml-4 text-sm ${totalAllocation === 100 ? 'text-green-600' : 'text-red-600'}`}>
                {totalAllocation}% allocated
              </span>
            </label>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">🎵 Music Fund</span>
                  <span className="font-bold">{formData.musicFund}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.musicFund}
                  onChange={(e) =>
                    setFormData({ ...formData, musicFund: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">🎬 Film Fund</span>
                  <span className="font-bold">{formData.filmFund}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.filmFund}
                  onChange={(e) =>
                    setFormData({ ...formData, filmFund: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">💻 Tech Fund</span>
                  <span className="font-bold">{formData.techFund}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.techFund}
                  onChange={(e) =>
                    setFormData({ ...formData, techFund: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="flex-1 px-6 py-4 border-2 border-black text-black rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || totalAllocation !== 100}
              className="flex-1 px-6 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Pledge'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
