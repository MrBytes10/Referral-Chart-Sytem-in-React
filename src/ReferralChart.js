import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, Input, Button } from './components';





const ReferralChart = () => {
  const [friends, setFriends] = useState(5);
  const [avgDeposit, setAvgDeposit] = useState(100);

  const data = [
    { name: '1 Friend', earnings: friends >= 1 ? avgDeposit * 0.1 : 0 },
    { name: '3 Friends', earnings: friends >= 3 ? avgDeposit * 0.1 * 3 : 0 },
    { name: '5 Friends', earnings: friends >= 5 ? avgDeposit * 0.1 * 5 : 0 },
    { name: '10 Friends', earnings: friends >= 10 ? avgDeposit * 0.1 * 10 : 0 },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">X-App Referral Earnings Potential</h2>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-4">
          <Input
            type="number"
            value={friends}
            onChange={(e) => setFriends(parseInt(e.target.value) || 0)}
            placeholder="Number of friends"
            className="w-1/2"
          />
          <Input
            type="number"
            value={avgDeposit}
            onChange={(e) => setAvgDeposit(parseInt(e.target.value) || 0)}
            placeholder="Average deposit amount"
            className="w-1/2"
          />
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="earnings" fill="#82ca9d" name="Earnings ($)" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">
            Total Potential Earnings: ${(friends * avgDeposit * 0.1).toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">
            Based on {friends} friends with an average deposit of ${avgDeposit}
          </p>
        </div>
        <div className="mt-4 text-center">
          <Button className="bg-green-500 text-white">Invite Friends Now!</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralChart;