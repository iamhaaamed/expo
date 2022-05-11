import React from 'react';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import Mchart from 'components/common/MChart';
import { chartData } from 'constants/chartData';

const MChartShowcase = createScreen(
  () => {
    return (
      <View>
        <Mchart
          chartType="line"
          data={chartData.lineData}
          height={250}
          chartConfig={chartData.chartConfig}
          chartProps={chartData.lineProps}
          bezier
          style={{
            marginVertical: 4,
            borderRadius: 12,
          }}
        />
        <Mchart
          chartType="progress"
          data={chartData.progressData}
          chartConfig={chartData.chartConfig}
          chartProps={chartData.progressProps}
          style={{
            marginVertical: 4,
            borderRadius: 12,
          }}
        />
        <Mchart
          chartType="bar"
          data={chartData.barData}
          chartConfig={chartData.chartConfig}
          chartProps={chartData.barProps}
          style={{
            marginVertical: 4,
            borderRadius: 12,
          }}
        />
        <Mchart
          chartType="contribution"
          data={chartData.contributionData}
          chartConfig={chartData.chartConfig}
          chartProps={chartData.contributionProps}
          style={{
            marginVertical: 4,
            borderRadius: 12,
          }}
        />
        <Mchart
          chartType="stacked"
          data={chartData.stackedData}
          chartConfig={chartData.chartConfig}
          chartProps={chartData.stackedProps}
          style={{
            marginVertical: 4,
            borderRadius: 12,
          }}
        />
        <Mchart
          chartType="pie"
          data={chartData.pieChartData}
          chartConfig={chartData.chartConfig}
          chartProps={chartData.pieProps}
          style={{
            backgroundColor: '#fb8c00',
            marginVertical: 4,
            borderRadius: 12,
          }}
        />
      </View>
    );
  },
  {
    scrollView: true,
    paddingBottom: false,
    paddingTop: false,
  },
);
export default MChartShowcase;
