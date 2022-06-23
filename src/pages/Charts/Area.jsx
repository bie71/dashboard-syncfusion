import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  Legend,
  Tooltip,
  SplineAreaSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate In Percentage" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[Legend, DateTime, SplineAreaSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;