import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';

const Mchart = ({ chartType, data, chartProps, chartConfig, style }) => {
  const Chart = () => {
    switch (chartType) {
      case 'line':
        return (
          <LineChart
            data={data}
            width={
              !!chartProps?.width
                ? chartProps.width
                : Dimensions.get('window').width
            }
            height={!!chartProps?.height ? chartProps.height : 220}
            yAxisLabel={chartProps?.yAxisLabel}
            yAxisSuffix={chartProps?.yAxisSuffix}
            yAxisInterval={
              chartProps?.yAxisInterval ? chartProps.yAxisInterval : 1
            }
            chartConfig={chartConfig}
            bezier={chartProps.bezier}
            style={style}
          />
        );
      case 'progress':
        return (
          <ProgressChart
            data={data}
            width={
              !!chartProps?.width
                ? chartProps.width
                : Dimensions.get('window').width
            }
            height={!!chartProps?.height ? chartProps.height : 220}
            strokeWidth={
              !!chartProps?.strokeWidth ? chartProps.strokeWidth : 16
            }
            radius={!!chartProps?.radius ? chartProps.radius : 32}
            chartConfig={chartConfig}
            hideLegend={!!chartProps?.hideLegend}
            style={style}
          />
        );
      case 'bar':
        return (
          <BarChart
            data={data}
            width={
              !!chartProps?.width
                ? chartProps.width
                : Dimensions.get('window').width
            }
            height={!!chartProps?.height ? chartProps.height : 220}
            chartConfig={chartConfig}
            style={style}
          />
        );
      case 'pie':
        return (
          <PieChart
            data={data}
            width={
              !!chartProps?.width
                ? chartProps.width
                : Dimensions.get('window').width
            }
            height={!!chartProps?.height ? chartProps.height : 220}
            chartConfig={chartConfig}
            accessor={chartProps.accessor}
            style={style}
            // center={[10, 50]}
            absolute={chartProps.absolute} //Show percentage if absolute=false
          />
        );
      case 'contribution':
        return (
          <ContributionGraph
            values={data}
            width={
              !!chartProps?.width
                ? chartProps.width
                : Dimensions.get('window').width
            }
            height={!!chartProps?.height ? chartProps.height : 220}
            endDate={chartProps.endDate}
            numDays={chartProps.numDays}
            chartConfig={chartConfig}
            style={style}
          />
        );
      case 'stacked':
        return (
          <StackedBarChart
            style={style}
            data={data}
            width={
              !!chartProps?.width
                ? chartProps.width
                : Dimensions.get('window').width
            }
            height={!!chartProps?.height ? chartProps.height : 220}
            chartConfig={chartConfig}
            style={style}
          />
        );
      default:
        return <Text>Invalid Type</Text>;
    }
  };
  return (
    <View>
      <Chart />
    </View>
  );
};

export default Mchart;
