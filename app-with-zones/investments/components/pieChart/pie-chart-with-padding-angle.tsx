import { colorsInvestments, investmentsChartData } from '@/data/global-data';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: PieData;
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload || payload[0];
    if (data && (data.name || data.value)) {
      return (
        <div
          style={{
            background: '#fff',
            border: '1px solid #ccc',
            padding: 8,
            borderRadius: 4,
            color: '#222',
            minWidth: 120,
          }}
        >
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            <strong>Valor:</strong> R$ {data.value ?? 'N/A'}
          </div>
          <div style={{ fontSize: 12 }}>
            <strong>Porcentagem:</strong> {data.percent ?? 'N/A'}%
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            background: '#fff',
            border: '1px solid #ccc',
            padding: 8,
            borderRadius: 4,
            color: '#222',
            minWidth: 120,
          }}
        >
          <div>Nenhum dado disponível</div>
        </div>
      );
    }
  }
  return null;
};


type PieData = {
  name: string;
  value: number;
  percent?: number;
};

const formatPieData = (investments: PieData[]): PieData[] => {
  const total = investments.reduce((sum, item) => sum + item.value, 0);
  return investments.map((item) => ({
    ...item,
    percent: total ? Math.round((item.value / total) * 100) : 0,
  }));
};

const PieChartWithPaddingAngle = () => {
  const formatted = formatPieData(investmentsChartData);
  const data = formatted;
  if (!data.length) return <div>Carregando gráfico...</div>;

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
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colorsInvestments[index % colorsInvestments.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
      <ul style={{ listStyle: 'none', marginLeft: '32px', padding: 0 }}>
        {data.map((entry, index) => (
          <li
            key={entry.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              color: '#fff',
              fontSize: '16px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: colorsInvestments[index % colorsInvestments.length],
                marginRight: 12,
              }}
            ></span>
            {entry.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartWithPaddingAngle;
