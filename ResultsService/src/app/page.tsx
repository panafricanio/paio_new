'use client';

import { useState } from 'react';
import { Filter, ArrowLeft, Home } from 'lucide-react';
import { resultsData, competitionStats, type ContestantResult } from '@/data/results';

export default function ResultsPage() {
  const [selectedDay, setSelectedDay] = useState<'all' | 'day1' | 'day2'>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique countries
  const countries = Array.from(new Set(resultsData.map(r => r.country).filter(c => c && c !== '')));

  // Filter data based on selections
  const filteredData = resultsData.filter(contestant => {
    const dayFilter = selectedDay === 'all' || 
      (selectedDay === 'day1' && contestant.day1Total > 0) ||
      (selectedDay === 'day2' && contestant.day2Total > 0);
    
    const countryFilter = selectedCountry === 'all' || contestant.country === selectedCountry;
    
    return dayFilter && countryFilter;
  });

  // Function to get row background color - unofficial contestants are skipped from highlighting
  const getRowBackgroundColor = (contestant: ContestantResult) => {
    // Unofficial contestants get simple gray highlighting and are skipped from rank-based highlighting
    if (contestant.isUnofficial) {
      return 'bg-gray-200';
    }

    // Special awards override rank-based coloring (only for official contestants)
    if (contestant.specialAward === 'DAY 1 HM') {
      return 'bg-blue-100'; // Blue for Day 1 honorable mention (rank 45)
    }

    // Use actual rank numbers for highlighting ranges (as per original request)
    if (contestant.rank >= 1 && contestant.rank <= 9) {
      return 'bg-yellow-100'; // Gold highlighting for ranks 1-9
    }
    if (contestant.rank >= 10 && contestant.rank <= 21) {
      return 'bg-gray-100'; // Silver highlighting for ranks 10-21
    }
    if (contestant.rank >= 22 && contestant.rank <= 36) {
      return 'bg-amber-100'; // Bronze highlighting for ranks 22-36
    }
    if (contestant.rank >= 37 && contestant.rank <= 41) {
      return 'bg-green-100'; // Green highlighting for Day 2 HM range (37-41)
    }

    // Default background for other official contestants
    return 'bg-white';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://pafricanoi.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Main System</span>
              </a>
              <div className="h-4 w-px bg-gray-300"></div>
              <a
                href="https://pafricanoi.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">PAIO Home</span>
              </a>
            </div>
            <div className="text-sm text-gray-500">
              PAIO 2025 Results
            </div>
          </div>
        </div>
      </nav>

      {/* Simple Header */}
      <header className="bg-white border-b border-amber-200">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              PAIO 2025 Results
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Pan African Informatics Olympiad - Official Competition Results
            </p>
            
            {/* Simple Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div className="bg-white border border-amber-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-800">{competitionStats.totalParticipants}</div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
              <div className="bg-white border border-amber-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-800">{competitionStats.countriesRepresented}+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="bg-white border border-amber-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-800">{competitionStats.totalProblems}</div>
                <div className="text-sm text-gray-600">Problems</div>
              </div>
              <div className="bg-white border border-amber-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-800">{competitionStats.goldMedals + competitionStats.silverMedals + competitionStats.bronzeMedals}</div>
                <div className="text-sm text-gray-600">Medals</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter Controls */}
        <div className="mb-8">
          <div className="bg-white rounded-lg border border-amber-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <div className="text-sm text-gray-600">
                  Showing {filteredData.length} of {resultsData.length} contestants
                </div>
              </div>

              {showFilters && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedDay('all')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDay === 'all' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200'
                      }`}
                    >
                      All Days
                    </button>
                    <button
                      onClick={() => setSelectedDay('day1')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDay === 'day1' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200'
                      }`}
                    >
                      Day 1 Only
                    </button>
                    <button
                      onClick={() => setSelectedDay('day2')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDay === 'day2' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200'
                      }`}
                    >
                      Day 2 Only
                    </button>
                  </div>

                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-amber-200 bg-white text-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="all">All Countries</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg border border-amber-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="px-2 py-2 text-left text-sm font-semibold border-r border-amber-400">Rank</th>
                  <th className="px-2 py-2 text-left text-sm font-semibold border-r border-amber-400">Name</th>
                  <th className="px-2 py-2 text-left text-sm font-semibold border-r border-amber-400">Country</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">Cards</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">GCD</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">Rooks</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">XOR</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400 bg-amber-700">Day 1</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">Adv</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">Cake</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">Exh</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400">Towers</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400 bg-amber-700">Day 2</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold border-r border-amber-400 bg-green-600">Total</th>
                  <th className="px-2 py-2 text-center text-sm font-semibold">Awards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((contestant, index) => (
                  <tr 
                    key={index}
                    className={`hover:bg-gray-100 transition-colors ${getRowBackgroundColor(contestant)}`}
                  >
                    <td className="px-2 py-2 border-r border-amber-100">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        contestant.isUnofficial ? 'bg-gray-400 text-white' : 
                        contestant.specialAward === 'DAY 1 HM' ? 'bg-blue-300 text-blue-900' :
                        contestant.rank >= 1 && contestant.rank <= 9 ? 'bg-yellow-300 text-yellow-900' :
                        contestant.rank >= 10 && contestant.rank <= 21 ? 'bg-gray-300 text-gray-800' :
                        contestant.rank >= 22 && contestant.rank <= 36 ? 'bg-amber-300 text-amber-900' :
                        contestant.rank >= 37 && contestant.rank <= 41 ? 'bg-green-300 text-green-900' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {contestant.rank}
                      </span>
                    </td>
                    <td className="px-2 py-2 border-r border-amber-100">
                      <div className="text-sm font-medium text-gray-900">
                        {contestant.firstName} {contestant.lastName}
                      </div>
                      {contestant.isUnofficial && (
                        <span className="text-xs text-gray-500">Unofficial</span>
                      )}
                    </td>
                    <td className="px-2 py-2 border-r border-amber-100">
                      <span className="text-sm text-gray-700">{contestant.country || 'N/A'}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.cards}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.gcd}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.rooks}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.xor}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100 bg-amber-50">
                      <span className="text-sm font-bold text-gray-900">{contestant.day1Total}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.adventure}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.cake}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.exhibition}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100">
                      <span className="text-sm font-medium text-gray-900">{contestant.towers}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100 bg-amber-50">
                      <span className="text-sm font-bold text-gray-900">{contestant.day2Total}</span>
                    </td>
                    <td className="px-2 py-2 text-center border-r border-amber-100 bg-green-50">
                      <span className="text-sm font-bold text-gray-900">{contestant.globalTotal}</span>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {contestant.medal && (
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border ${
                            contestant.medal === 'GOLD' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-yellow-500' :
                            contestant.medal === 'SILVER' ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-white border-gray-400' :
                            'bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-600'
                          }`}>
                            <span>{contestant.medal}</span>
                          </div>
                        )}
                        {contestant.specialAward && (
                          <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                            contestant.specialAward === 'DAY 2 HM' ? 'bg-green-200 text-green-900 border border-green-300' :
                            contestant.specialAward === 'DAY 1 HM' ? 'bg-blue-200 text-blue-900 border border-blue-300' :
                            'bg-purple-200 text-purple-900 border border-purple-300'
                          }`}>
                            {contestant.specialAward}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8">
          <div className="bg-white rounded-lg border border-amber-200 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Competition Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{competitionStats.goldMedals}</div>
                <div className="text-sm text-gray-600">Gold Medals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-500 mb-2">{competitionStats.silverMedals}</div>
                <div className="text-sm text-gray-600">Silver Medals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">{competitionStats.bronzeMedals}</div>
                <div className="text-sm text-gray-600">Bronze Medals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{competitionStats.honorableMentions}</div>
                <div className="text-sm text-gray-600">Honorable Mentions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
