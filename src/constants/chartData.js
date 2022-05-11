import { Dimensions } from 'react-native';

export const chartData = {
  chartConfig: {
    // backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientFromOpacity: 1, //between 0-1
    backgroundGradientTo: '#ffa726',
    backgroundGradientToOpacity: 1, //between 0-1
    fillShadowGradient: 'green',
    fillShadowGradientOpacity: 0.4, //between 0-1
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 1, //between 0-1
    style: {
      borderRadius: 12,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  },
  lineProps: {
    width: Dimensions.get('window').width,
    height: 220,
    yAxisLabel: '$',
    yAxisSuffix: 'k',
    yAxisInterval: 1,
    bezier: true,
  },
  lineData: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  },
  progressProps: {
    width: Dimensions.get('window').width,
    height: 220,
    strokeWidth: 16,
    radius: 32,
    hideLegend: false,
  },
  progressData: [0.4, 0.6, 0.8, 0.95],
  barProps: {
    width: Dimensions.get('window').width,
    height: 220,
  },
  barData: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  },
  stackedProps: {
    width: Dimensions.get('window').width,
    height: 220,
  },
  stackedData: {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  },
  pieProps: {
    width: Dimensions.get('window').width,
    height: 220,
    accessor: 'population',
    absolute: false,
  },
  pieChartData: [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ],
  contributionProps: {
    width: Dimensions.get('window').width,
    height: 220,
    endDate: new Date('2016-05-01'),
    numDays: 105,
  },
  contributionData: [
    { date: '2016-01-02', count: 1 },
    { date: '2016-01-03', count: 2 },
    { date: '2016-01-04', count: 3 },
    { date: '2016-01-05', count: 4 },
    { date: '2016-01-06', count: 5 },
    { date: '2016-01-30', count: 2 },
    { date: '2016-01-31', count: 3 },
    { date: '2016-03-01', count: 2 },
    { date: '2016-04-02', count: 4 },
    { date: '2016-03-05', count: 2 },
    { date: '2016-02-30', count: 4 },
  ],
};
