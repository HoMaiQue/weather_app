/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../generated/weather';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type MyQueryQueryVariables = Types.Exact<{
  current?: Types.InputMaybe<Types.Scalars['String']['input']>;
  daily?: Types.InputMaybe<Types.Scalars['String']['input']>;
  hourly?: Types.InputMaybe<Types.Scalars['String']['input']>;
  latitude: Types.Scalars['String']['input'];
  longitude: Types.Scalars['String']['input'];
  timezone: Types.Scalars['String']['input'];
}>;


export type MyQueryQuery = { myQuery?: { elevation?: number | null, generationtime_ms?: number | null, latitude?: number | null, longitude?: number | null, timezone?: string | null, timezone_abbreviation?: string | null, utc_offset_seconds?: number | null, current?: { apparent_temperature?: number | null, cloudcover?: number | null, interval?: number | null, is_day?: number | null, precipitation?: number | null, pressure_msl?: number | null, rain?: number | null, relativehumidity_2m?: number | null, showers?: number | null, snowfall?: number | null, surface_pressure?: number | null, temperature_2m?: number | null, time?: string | null, weathercode?: number | null, winddirection_10m?: number | null, windgusts_10m?: number | null, windspeed_10m?: number | null } | null, current_units?: { apparent_temperature?: string | null, cloudcover?: string | null, interval?: string | null, is_day?: string | null, precipitation?: string | null, pressure_msl?: string | null, rain?: string | null, relativehumidity_2m?: string | null, showers?: string | null, snowfall?: string | null, surface_pressure?: string | null, temperature_2m?: string | null, time?: string | null, weathercode?: string | null, winddirection_10m?: string | null, windgusts_10m?: string | null, windspeed_10m?: string | null } | null, daily?: { apparent_temperature_max?: Array<number | null> | null, apparent_temperature_min?: Array<number | null> | null, temperature_2m_max?: Array<number | null> | null, temperature_2m_min?: Array<number | null> | null, time?: Array<string | null> | null, uv_index_clear_sky_max?: Array<number | null> | null, uv_index_max?: Array<number | null> | null, weathercode?: Array<number | null> | null } | null, daily_units?: { apparent_temperature_max?: string | null, apparent_temperature_min?: string | null, temperature_2m_max?: string | null, temperature_2m_min?: string | null, time?: string | null, uv_index_clear_sky_max?: string | null, uv_index_max?: string | null, weathercode?: string | null } | null, hourly?: { apparent_temperature?: Array<number | null> | null, dewpoint_2m?: Array<number | null> | null, relativehumidity_2m?: Array<number | null> | null, temperature_2m?: Array<number | null> | null, time?: Array<string | null> | null, uv_index?: Array<number | null> | null, uv_index_clear_sky?: Array<number | null> | null } | null, hourly_units?: { apparent_temperature?: string | null, dewpoint_2m?: string | null, relativehumidity_2m?: string | null, temperature_2m?: string | null, time?: string | null, uv_index?: string | null, uv_index_clear_sky?: string | null } | null } | null };


export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"current"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,pressure_msl,surface_pressure,windspeed_10m,winddirection_10m,windgusts_10m","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daily"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hourly"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,uv_index,uv_index_clear_sky","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timezone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myQuery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"current"},"value":{"kind":"Variable","name":{"kind":"Name","value":"current"}}},{"kind":"Argument","name":{"kind":"Name","value":"daily"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daily"}}},{"kind":"Argument","name":{"kind":"Name","value":"hourly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hourly"}}},{"kind":"Argument","name":{"kind":"Name","value":"latitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"longitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"timezone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timezone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature"}},{"kind":"Field","name":{"kind":"Name","value":"cloudcover"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"is_day"}},{"kind":"Field","name":{"kind":"Name","value":"precipitation"}},{"kind":"Field","name":{"kind":"Name","value":"pressure_msl"}},{"kind":"Field","name":{"kind":"Name","value":"rain"}},{"kind":"Field","name":{"kind":"Name","value":"relativehumidity_2m"}},{"kind":"Field","name":{"kind":"Name","value":"showers"}},{"kind":"Field","name":{"kind":"Name","value":"snowfall"}},{"kind":"Field","name":{"kind":"Name","value":"surface_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"weathercode"}},{"kind":"Field","name":{"kind":"Name","value":"winddirection_10m"}},{"kind":"Field","name":{"kind":"Name","value":"windgusts_10m"}},{"kind":"Field","name":{"kind":"Name","value":"windspeed_10m"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature"}},{"kind":"Field","name":{"kind":"Name","value":"cloudcover"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"is_day"}},{"kind":"Field","name":{"kind":"Name","value":"precipitation"}},{"kind":"Field","name":{"kind":"Name","value":"pressure_msl"}},{"kind":"Field","name":{"kind":"Name","value":"rain"}},{"kind":"Field","name":{"kind":"Name","value":"relativehumidity_2m"}},{"kind":"Field","name":{"kind":"Name","value":"showers"}},{"kind":"Field","name":{"kind":"Name","value":"snowfall"}},{"kind":"Field","name":{"kind":"Name","value":"surface_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"weathercode"}},{"kind":"Field","name":{"kind":"Name","value":"winddirection_10m"}},{"kind":"Field","name":{"kind":"Name","value":"windgusts_10m"}},{"kind":"Field","name":{"kind":"Name","value":"windspeed_10m"}}]}},{"kind":"Field","name":{"kind":"Name","value":"daily"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature_max"}},{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature_min"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m_max"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m_min"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index_clear_sky_max"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index_max"}},{"kind":"Field","name":{"kind":"Name","value":"weathercode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"daily_units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature_max"}},{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature_min"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m_max"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m_min"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index_clear_sky_max"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index_max"}},{"kind":"Field","name":{"kind":"Name","value":"weathercode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"elevation"}},{"kind":"Field","name":{"kind":"Name","value":"generationtime_ms"}},{"kind":"Field","name":{"kind":"Name","value":"hourly"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature"}},{"kind":"Field","name":{"kind":"Name","value":"dewpoint_2m"}},{"kind":"Field","name":{"kind":"Name","value":"relativehumidity_2m"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index_clear_sky"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hourly_units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparent_temperature"}},{"kind":"Field","name":{"kind":"Name","value":"dewpoint_2m"}},{"kind":"Field","name":{"kind":"Name","value":"relativehumidity_2m"}},{"kind":"Field","name":{"kind":"Name","value":"temperature_2m"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index"}},{"kind":"Field","name":{"kind":"Name","value":"uv_index_clear_sky"}}]}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone_abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"utc_offset_seconds"}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;