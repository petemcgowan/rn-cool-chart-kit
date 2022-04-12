import React from "react";
import { Dimensions, ScrollView, StatusBar, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

import {
  contributionData,
  data,
  pieChartData,
  progressChartData,
  stackedBarGraphData,
  stackedBarGraphDataSmaller,
} from "./data";
import {
  BarChart,
  ContributionGraph,
  LineChart,
  PieChart,
  ProgressChart,
  StackedBarChart,
} from "react-native-chart-kit";

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: "#011000",
    // backgroundColor: "#022173",
    backgroundGradientFrom: "#1E2923",
    // backgroundGradientFrom: "#022173",
    backgroundGradientTo: "#1b3fa0",
    // backgroundColor: "#000000",
    // backgroundGradientFrom: "#1E2923",
    // backgroundGradientTo: "#08130D",
    alignItems: "center",
    justifyContent: "center",

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeDasharray: "", // solid background lines with no dashes
      strokeLinecap: "round",
    },
  },
];

export default class App extends React.Component {
  renderTabBar() {
    return <StatusBar hidden />;
  }

  render() {
    const { width } = Dimensions.get("window");
    const height = 256;
    return (
      <>
        {chartConfigs.map((chartConfig) => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: "center",
            fontSize: 16,
          };
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style,
          };
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FlashMessage duration={1000} />
                <Text style={labelStyle}>Daily Carb Consumption</Text>
                <StackedBarChart
                  style={graphStyle}
                  data={stackedBarGraphDataSmaller}
                  width={width * 0.25}
                  withInnerLines={false}
                  withOuterLines={false}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withDots={false}
                  height={220}
                  chartConfig={chartConfig}
                />
              </View>
              />
            </ScrollView>
          );
        })}
      </>
    );
  }
}
