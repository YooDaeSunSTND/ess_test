import React from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { PieChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  
  const getOption = () => ({
    legend: {
      left: 'left',
      textStyle: {
        color: getColor('600')
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '55%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 1048,
            name: 'Facebook',
            itemStyle: {
              color: getColor('primary')
            }
          },
          {
            value: 735,
            name: 'Youtube',
            itemStyle: {
              color: getColor('danger')
            }
          },
          {
            value: 580,
            name: 'Twitter',
            itemStyle: {
              color: getColor('info')
            }
          },
          {
            value: 484,
            name: 'Linkedin',
            itemStyle: {
              color: getColor('success')
            }
          },
          {
            value: 300,
            name: 'Github',
            itemStyle: {
              color: getColor('warning')
            }
          }
        ]
      }
    ],
    tooltip: {
      trigger: 'item',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    }
    });
    
    return (
      <EChartsReactCore
        echarts={echarts}
        option={getOption()}
        style={{ height: '20rem' }}
      />
    );
  }
`;

const DoughnutChart = () => {
  return (
    <FalconComponentCard dir="ltr" className="h-100">
      <FalconComponentCard.Header title="Doughnut chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          EChartsReactCore,
          echarts,
          getColor
        }}
      />
    </FalconComponentCard>
  );
};

export default DoughnutChart;
