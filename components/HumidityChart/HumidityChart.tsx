"use client";
import { AreaChart, Card, Title } from "@tremor/react";
import { Root } from "~/generated/weather";

interface Props {
    results: Root;
}

const HumidityChart: React.FC<Props> = ({ results }) => {
    const hourly = (results?.hourly!.time || [])
        .map((time) =>
            new Date(time as string).toLocaleString("en-Us", {
                hour: "numeric",
                hour12: false,
            })
        )
        .slice(0, 24);

    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "Humidity (%)": results.hourly?.relativehumidity_2m![i],
    }));
    const dataFormatter = (number: Number) => `${number}`;
    return (
        <Card>
            <Title>Humidity Levels</Title>
            <AreaChart
                className="mt-6 "
                data={data}
                showLegend
                index="time"
                categories={["Humidity (%)"]}
                colors={["teal"]}
                minValue={0}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
        </Card>
    );
};
export default HumidityChart;
