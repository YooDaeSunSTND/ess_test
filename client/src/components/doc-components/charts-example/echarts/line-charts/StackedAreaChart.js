import React from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { getColor, rgbaColor } from 'helpers/utils';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { LineChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatter } from 'helpers/echart-utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: getColor('dark'),
      borderWidth: 1,
      formatter: tooltipFormatter,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    },
    xAxis: {
      type: 'category',
      data: days,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: getColor('300')
        }
      },
      axisTick: { show: false },
      axisLabel: {
        color: getColor('400'),
        formatter: value => value.substring(0, 3),
        margin: 15
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: getColor('200')
        }
      },
      boundaryGap: false,
      axisLabel: {
        show: true,
        color: getColor('400'),
        margin: 15
      },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    series: [
      {
        name: 'Matcha Latte',
        type: 'line',
        symbolSize: 6,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('info'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('info')
        },
        symbol: 'circle',
        stack: 'product',
        data: [120, 132, 101, 134, 90, 230, 210],
        areaStyle: {
          color: rgbaColor(getColor('info'), 0.3)
        }
      },
      {
        name: 'Milk Tea',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('success'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('success')
        },
        symbol: 'circle',
        stack: 'product',
        data: [220, 182, 191, 234, 290, 330, 310],
        areaStyle: {
          color: rgbaColor(getColor('success'), 0.3)
        }
      },
      {
        name: 'Cheese Cocoa',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('danger'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('danger')
        },
        symbol: 'circle',
        stack: 'product',
        data: [150, 232, 201, 154, 190, 330, 410],
        areaStyle: {
          color: rgbaColor(getColor('danger'), 0.3)
        }
      },
      {
        name: 'Cheese Brownie',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('warning'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('warning')
        },
        symbol: 'circle',
        stack: 'product',
        data: [320, 332, 301, 334, 390, 330, 320],
        areaStyle: {
          color: rgbaColor(getColor('warning'), 0.3)
        }
      },
      {
        name: 'Matcha Cocoa',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('primary'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('primary')
        },
        symbol: 'circle',
        stack: 'product',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        areaStyle: {
          color: rgbaColor(getColor('primary'), 0.3)
        }
      }
    ],
    grid: { right: 10, left: 5, bottom: 5, top: 8, containLabel: true }
  });
  return (
    <EChartsReactCore
      echarts={echarts}
      option={getOption()}
      style={{ height: '18.75rem' }}
    />
  );
}
`;

const StackedAreaChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Stacked area line chart"
        light={false}
      />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          EChartsReactCore,
          echarts,
          getColor,
          rgbaColor,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default StackedAreaChart;
