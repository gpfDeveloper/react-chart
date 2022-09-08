import { FunctionComponent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Box, Tabs, Tab } from '@mui/material';
import VerticalBar from './VerticalBar';
import HorizontalBar from './HorizontalBar';
import StackedBar from './StackedBar';
import GroupedBar from './GroupedBar';
import AreaChart from './AreaChart';
import LineChart from './LineChart';
import MultiaxisLine from './MultiaxisLine';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import PolarAreaChart from './PolarAreaChart';
import RadarChart from './RadarChart';
import ScatterChart from './ScatterChart';
import BubbleChart from './BubbleChart';
import MultitypeChart from './MultitypeChart';
import ChartEvent from './ChartEvent';
import ChartRef from './ChartRef';
import GradientChart from './GradientChart';

type ChartType = { label: string; component: ReactElement };

const CHARTS: ChartType[] = [
    { label: 'Vertical Bar', component: <VerticalBar /> },
    { label: 'Horizontal Bar', component: <HorizontalBar /> },
    { label: 'Stacked Bar', component: <StackedBar /> },
    { label: 'Grouped Bar', component: <GroupedBar /> },
    { label: 'Area Chart', component: <AreaChart /> },
    { label: 'Line Chart', component: <LineChart /> },
    { label: 'Multiaxis Line', component: <MultiaxisLine /> },
    { label: 'Pie Chart', component: <PieChart /> },
    { label: 'Doughnut Chart', component: <DoughnutChart /> },
    { label: 'PolarArea Chart', component: <PolarAreaChart /> },
    { label: 'Radar Chart', component: <RadarChart /> },
    { label: 'Scatter Chart', component: <ScatterChart /> },
    { label: 'Bubble Chart', component: <BubbleChart /> },
    { label: 'Multitype Chart', component: <MultitypeChart /> },
    { label: 'Chart Event', component: <ChartEvent /> },
    { label: 'Chart Ref', component: <ChartRef /> },
    { label: 'Gradient Chart', component: <GradientChart /> },
];

const Styles = styled(Box)`
    display: flex;
`;

const Charts: FunctionComponent = () => {
    const [idx, setIdx] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newIdx: number) => {
        setIdx(newIdx);
    };

    return (
        <Styles>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={idx}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider', flexShrink: 0 }}
            >
                {CHARTS.map((item, idx) => (
                    <Tab key={idx} label={item.label} id={idx.toString()} />
                ))}
            </Tabs>
            <Box sx={{ flexGrow: 1 }}>{CHARTS[idx].component}</Box>
        </Styles>
    );
};

export default Charts;
