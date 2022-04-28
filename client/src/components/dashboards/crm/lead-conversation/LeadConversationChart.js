import React from 'react';
import * as echarts from 'echarts/core';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor, rgbaColor } from 'helpers/utils';
import { tooltipFormatter, getPosition } from 'helpers/echart-utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = () => ({
  color: [
    rgbaColor(getColor('primary'), 0.7),
    rgbaColor(getColor('info'), 0.6),
    rgbaColor(getColor('secondary'), 0.2),
    rgbaColor(getColor('warning'), 0.6)
  ],
  legend: {
    data: ['Campaigns', 'Lead', 'Opportunity', 'Deal'],
    left: '0%',
    icon: 'circle',
    inactiveColor: getColor('400'),
    textStyle: { color: getColor('700') },
    itemGap: 10
  },
  yAxis: {
    type: 'category',
    data: [
      'kerry Ingram',
      'Bradie Pitter',
      'Harrington',
      'Ashley Shaw',
      'Jenny Horas',
      'Chris Pratt'
    ],
    axisLine: {
      show: false
    },
    boundaryGap: false,
    splitLine: {
      lineStyle: {
        color: getColor('200')
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getColor('600')
    }
  },
  xAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: getColor('200')
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    axisPointer: {
      type: 'none'
    },
    backgroundColor: getColor('100'),
    borderColor: getColor('300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    position(pos, params, dom, rect, size) {
      return getPosition(pos, params, dom, rect, size);
    },
    formatter: tooltipFormatter
  },

  series: [
    {
      name: 'Campaigns',
      type: 'bar',
      stack: 'total',
      data: [1405, 1300, 1620, 1430, 1500, 1520],
      barWidth: '20%'
    },
    {
      name: 'Lead',
      type: 'bar',
      stack: 'total',
      data: [320, 302, 301, 334, 340, 390],
      barWidth: '20%'
    },
    {
      name: 'Opportunity',
      type: 'bar',
      stack: 'total',
      data: [220, 182, 351, 234, 290, 300],
      barWidth: '20%'
    },
    {
      name: 'Deal',
      type: 'bar',
      stack: 'total',
      data: [120, 182, 191, 134, 190, 170],
      barWidth: '20%'
    }
  ],
  grid: {
    right: 5,
    left: 5,
    bottom: 8,
    top: 60,
    containLabel: true
  }
});

const LeadConversationChart = () => {
  return (
    <EChartsReactCore
      echarts={echarts}
      option={getOptions()}
      style={{ height: '19.1rem' }}
    />
  );
};

export default LeadConversationChart;
