import React from "react";
import CalloutCard from "~/components/CalloutCard";
import InformationPanel from "~/components/InformationPanel";
import StatCard from "~/components/StatCard";
import { Root } from "~/generated/weather";
import fetchWeatherQuery from "~/graphql/queries/fetchWeather.gql";
import { MyQueryDocument } from "~/graphql/queries/fetchWeather.gql.generated";
import { client } from "~/lib/apolo-client";

type Props = {
    params: {
        city: string;
        long: string;
        lat: string;
    };
};

export default async function WeatherPage({
    params: { city, long, lat },
}: Props) {
    const { data } = await client.query({
        query: MyQueryDocument,
        variables: {
            longitude: long,
            latitude: lat,
            timezone: "GMT",
        },
    });
    const results: Root = data.myQuery as Root

    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <InformationPanel
                city={city}
                results={results}
                long={long}
                lat={lat}
            />
            <div className="flex-1 p-5 lg:p-10">
                <div className="p-5">
                    <div className="pb-5">
                        <h2 className="text-xl font-bold">Todays Overview</h2>
                        <p className="text-sm text-gray-400">
                            Last Updated at:{" "}
                            {new Date(
                                results?.current?.time as string
                            ).toLocaleString()}
                            ({results?.timezone})
                        </p>
                    </div>
                    {/* callout card */}
                    <div className="m-2 mb-10">
                        <CalloutCard message="This is where GPT-4 Summary will go!" />
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                        <StatCard
                            title="Maximum Temperature"
                            metric={`${results?.daily?.temperature_2m_max![0]?.toFixed(
                                1
                            )}º`}
                            color="yellow"
                        />
                        <StatCard
                            title="Minimum Temperature"
                            metric={`${results?.daily?.temperature_2m_max![0]?.toFixed(
                                1
                            )}º`}
                            color="green"
                        />
                        <div>
                            <StatCard
                                title="UV index"
                                metric={`${results?.daily?.uv_index_max![0]?.toFixed(
                                    1
                                )}`}
                                color="rose"
                            />
                            {Number(
                                results?.daily?.uv_index_max![0]?.toFixed(
                                    1
                                )
                            ) > 5 && (
                                <CalloutCard
                                    message="The Uv is high today, be sure to wear SPF!"
                                    warning
                                />
                            )}
                        </div>
                        <div className="flex space-x-3">
                        <StatCard
                            title="Wind Speed"
                            metric={`${results?.current?.windspeed_10m!.toFixed(
                                1
                            )}m/s`}
                            color="cyan"
                        />
                        <StatCard
                            title="Wind direction"
                            metric={`${results?.current?.winddirection_10m?.toFixed(
                                1
                            )}º`}
                            color="violet"
                        />
                        </div>
                    </div>
                </div>
                <hr  className="mb-5"/>

                <div className="space-y-3"></div>
            </div>
        </div>
    );
}
