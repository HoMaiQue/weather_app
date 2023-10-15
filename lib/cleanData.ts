import { Root } from "~/generated/weather";

const cleanData = (data: Root, city: string) => {
    const { current, timezone, hourly, hourly_units, timezone_abbreviation } =
        data;

    const { winddirection_10m, windgusts_10m, windspeed_10m } = current as any;
};
