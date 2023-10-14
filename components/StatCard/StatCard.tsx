"use client";

import { Card, Color, Metric, Text } from "@tremor/react";

interface Props {
    title: string;
    metric: string;
    color?: Color;
}
const StatCard: React.FC<Props> = ({ title, metric, color }) => {
    return (
        <Card decoration="top" decorationColor={color}>
            <Text>{title}</Text>
            <Metric>{metric}</Metric>
        </Card>
    );
};

export default StatCard;
