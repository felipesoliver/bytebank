import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const mockFetchAccount = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    result: {
      transactions: [
        { id: "1", type: "Debit", value: -200, date: "2024-12-16T18:29:08.734Z" },
        { id: "2", type: "Credit", value: 200, date: "2024-12-17T18:29:08.734Z" },
        { id: "3", type: "Debit", value: -50, date: "2024-12-18T18:29:08.734Z" },
        { id: "4", type: "Credit", value: 100, date: "2024-12-19T18:29:08.734Z" },
      ],
    },
  };
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


type Transaction = {
  id: string;
  type: string;
  value: number;
  date: string;
};

type PieData = {
  name: string;
  value: number;
  percent?: number;
};

const typeMap: Record<string, string> = {
  Debit: 'Débito',
  Credit: 'Crédito',
};

const formatPieData = (transactions: Transaction[]): PieData[] => {
  const grouped = transactions.reduce<Record<string, number>>((acc, tx) => {
    acc[tx.type] = (acc[tx.type] || 0) + Math.abs(tx.value);
    return acc;
  }, {});
  const total = Object.values(grouped).reduce((sum, v) => sum + v, 0);
  return Object.entries(grouped).map(([type, value]) => ({
    name: typeMap[type] || type,
    value,
    percent: total ? Math.round((value / total) * 100) : 0
  }));
};

const PieChartWithPaddingAngle = () => {
  const [data, setData] = useState<PieData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchAccount().then((res) => {
      const formatted = formatPieData(res.result.transactions);
      console.log('PieChart data:', formatted);
      setData(formatted);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Carregando gráfico...</div>;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          cx={75}
          cy={75}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <ul style={{ listStyle: 'none', marginLeft: '32px', padding: 0 }}>
        {data.map((entry, index) => (
          <li key={entry.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#fff', fontSize: '16px' }}>
            <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: '50%', background: COLORS[index % COLORS.length], marginRight: 12 }}></span>
            {entry.name} — R$ {entry.value} ({entry.percent}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartWithPaddingAngle;
