import React from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import FalconComponentCard from 'components/common/FalconComponentCard';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {

  var dataAxis = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T'
  ];

  var data = [
    220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133,
    334, 198, 123, 125, 220
  ];

  const chartRef = useRef(null);

  const tooltipFormatter = params => {
    return (
      ' <div> <h6 class="fs--1 text-700 mb-0">  <div class="dot me-1 fs--2 d-inline-block bg-primary" ></div>' +
      params[0].name +
      ' : ' +
      params[0].value +
      ' </h6> </div> '
    );
  };

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      },
      formatter: tooltipFormatter
    },
    title: {
      text: 'Gradient and Clickable bar chart',
      textStyle: {
        color: getColor('600')
      },
      left: 'center'
    },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: getColor('600')
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColor('300')
        }
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        name: 'Total',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: getColor('info') },
            { offset: 0.5, color: getColor('primary') },
            { offset: 1, color: getColor('primary') }
          ]),
          borderRadius: [3, 3, 0, 0]
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: getColor('primary') },
              { offset: 0.7, color: getColor('primary') },
              { offset: 1, color: getColor('info') }
            ])
          }
        },
        data: data
      }
    ],
    grid: {
      right: 5,
      left: 5,
      bottom: 5,
      top: '10%',
      containLabel: true
    }
  });
  
  const zoomSize = 6;
  const onEvents = {
    click: params => {
      chartRef.current.getEchartsInstance().dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    }
  };
  
  return (
    <EChartsReactCore
    echarts={echarts}
    ref={chartRef}
    option={getOption()}
    style={{ height: '21.88rem' }}
    onEvents={onEvents}
  />
  );
}`;

const GradientBarChart = () => {
  return (
    <FalconComponentCard className="h-100">
      <FalconComponentCard.Header title="Gradient bar chart" light={false} />
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

export default GradientBarChart;
