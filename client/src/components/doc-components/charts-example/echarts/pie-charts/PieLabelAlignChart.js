import React from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { getColor, rgbaColor } from 'helpers/utils';
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
  
  const chartRef = useRef(null)
  const data = [
    {
      value: 800,
      name: 'Starter',
      itemStyle: {
        color: rgbaColor(getColor('primary'), 0.5)
      }
    },
    {
      value: 1048,
      name: 'Starter Pro',
      itemStyle: {
        color: getColor('danger')
      }
    },
    {
      value: 735,
      name: 'Basic',
      itemStyle: {
        color: getColor('primary')
      }
    },
    {
      value: 580,
      name: 'Optimal',
      itemStyle: {
        color: getColor('secondary')
      }
    },
    {
      value: 484,
      name: 'Business',
      itemStyle: {
        color: getColor('warning')
      }
    },
    {
      value: 600,
      name: 'Classic addition',
      itemStyle: {
        color: rgbaColor(getColor('warning'), 0.8)
      }
    },
    {
      value: 300,
      name: 'Premium',
      itemStyle: {
        color: getColor('success')
      }
    },
    {
      value: 300,
      name: 'Platinum',
      itemStyle: {
        color: getColor('info')
      }
    },
    {
      value: 400,
      name: 'Platinum Pro',
      itemStyle: {
        color: rgbaColor(getColor('primary'), 0.5)
      }
    }
  ];
  
  const getOption = () => ({
    title: [
      {
        text: 'Pie Label Align Chart',
        left: 'center',
        textStyle: {
          color: getColor('600')
        }
      },
      {
        subtext: 'alignTo: "labelLine"',
        left: '50%',
        top: '85%',
        textAlign: 'center',
        subtextStyle: {
          color: getColor('700')
        }
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
    },

    series: [
      {
        type: 'pie',
        radius: window.innerWidth < 530 ? '45%' : '60%',
        center: ['50%', '50%'],
        data: data,
        label: {
          position: 'outer',
          alignTo: 'labelLine',
          bleedMargin: 5,
          color: getColor('700')
        },
        left: '5%',
        right: '5%',
        top: 0,
        bottom: 0
      }
    ]
    });

    //------- Responsive on window resize -------

    const updateDimensions = () => {
      if (window.innerWidth < 530) {
        chartRef.current.getEchartsInstance().setOption({
          series: [{ radius: '45%' }]
        });
      }
      else
        chartRef.current.getEchartsInstance().setOption({
          series: [{ radius: '60%' }]
        });
    }
  
    useEffect(() => {
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
      <EChartsReactCore
        echarts={echarts}
        option={getOption()}
        ref={chartRef}
        style={{ height: '20rem' }}
      />
    );
  }
`;

const PieLabelAlignChart = () => {
  return (
    <FalconComponentCard dir="ltr" className="h-100">
      <FalconComponentCard.Header title="Pie chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          EChartsReactCore,
          echarts,
          getColor,
          rgbaColor
        }}
      />
    </FalconComponentCard>
  );
};

export default PieLabelAlignChart;
