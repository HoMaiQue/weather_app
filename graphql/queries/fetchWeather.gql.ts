import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
    query myQuery(
        $current: String = "temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,pressure_msl,surface_pressure,windspeed_10m,winddirection_10m,windgusts_10m"
        $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max"
        $hourly: String = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,uv_index,uv_index_clear_sky"
        $latitude: String!
        $longitude: String!
        $timezone: String!
    ) {
        myQuery(
            current: $current
            daily: $daily
            hourly: $hourly
            latitude: $latitude
            longitude: $longitude
            timezone: $timezone
        ) {
            current {
                apparent_temperature
                cloudcover
                interval
                is_day
                precipitation
                pressure_msl
                rain
                relativehumidity_2m
                showers
                snowfall
                surface_pressure
                temperature_2m
                time
                weathercode
                winddirection_10m
                windgusts_10m
                windspeed_10m
            }
            current_units {
                apparent_temperature
                cloudcover
                interval
                is_day
                precipitation
                pressure_msl
                rain
                relativehumidity_2m
                showers
                snowfall
                surface_pressure
                temperature_2m
                time
                weathercode
                winddirection_10m
                windgusts_10m
                windspeed_10m
            }
            daily {
                apparent_temperature_max
                apparent_temperature_min
                temperature_2m_max
                temperature_2m_min
                time
                uv_index_clear_sky_max
                uv_index_max
                weathercode
            }
            daily_units {
                apparent_temperature_max
                apparent_temperature_min
                temperature_2m_max
                temperature_2m_min
                time
                uv_index_clear_sky_max
                uv_index_max
                weathercode
            }
            elevation
            generationtime_ms
            hourly {
                apparent_temperature
                dewpoint_2m
                relativehumidity_2m
                temperature_2m
                time
                uv_index
                uv_index_clear_sky
            }
            hourly_units {
                apparent_temperature
                dewpoint_2m
                relativehumidity_2m
                temperature_2m
                time
                uv_index
                uv_index_clear_sky
            }
            latitude
            longitude
            timezone
            timezone_abbreviation
            utc_offset_seconds
        }
    }
`;

export default fetchWeatherQuery;
