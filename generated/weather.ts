export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Current = {
  apparent_temperature?: Maybe<Scalars['Float']['output']>;
  cloudcover?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['Int']['output']>;
  is_day?: Maybe<Scalars['Int']['output']>;
  precipitation?: Maybe<Scalars['Int']['output']>;
  pressure_msl?: Maybe<Scalars['Float']['output']>;
  rain?: Maybe<Scalars['Int']['output']>;
  relativehumidity_2m?: Maybe<Scalars['Int']['output']>;
  showers?: Maybe<Scalars['Int']['output']>;
  snowfall?: Maybe<Scalars['Int']['output']>;
  surface_pressure?: Maybe<Scalars['Float']['output']>;
  temperature_2m?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  weathercode?: Maybe<Scalars['Int']['output']>;
  winddirection_10m?: Maybe<Scalars['Int']['output']>;
  windgusts_10m?: Maybe<Scalars['Float']['output']>;
  windspeed_10m?: Maybe<Scalars['Float']['output']>;
};

export type CurrentUnits = {
  apparent_temperature?: Maybe<Scalars['String']['output']>;
  cloudcover?: Maybe<Scalars['String']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  is_day?: Maybe<Scalars['String']['output']>;
  precipitation?: Maybe<Scalars['String']['output']>;
  pressure_msl?: Maybe<Scalars['String']['output']>;
  rain?: Maybe<Scalars['String']['output']>;
  relativehumidity_2m?: Maybe<Scalars['String']['output']>;
  showers?: Maybe<Scalars['String']['output']>;
  snowfall?: Maybe<Scalars['String']['output']>;
  surface_pressure?: Maybe<Scalars['String']['output']>;
  temperature_2m?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  weathercode?: Maybe<Scalars['String']['output']>;
  winddirection_10m?: Maybe<Scalars['String']['output']>;
  windgusts_10m?: Maybe<Scalars['String']['output']>;
  windspeed_10m?: Maybe<Scalars['String']['output']>;
};

export type Daily = {
  apparent_temperature_max?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  apparent_temperature_min?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  temperature_2m_max?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  temperature_2m_min?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  time?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  uv_index_clear_sky_max?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  uv_index_max?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  weathercode?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type DailyUnits = {
  apparent_temperature_max?: Maybe<Scalars['String']['output']>;
  apparent_temperature_min?: Maybe<Scalars['String']['output']>;
  temperature_2m_max?: Maybe<Scalars['String']['output']>;
  temperature_2m_min?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  uv_index_clear_sky_max?: Maybe<Scalars['String']['output']>;
  uv_index_max?: Maybe<Scalars['String']['output']>;
  weathercode?: Maybe<Scalars['String']['output']>;
};

export type Hourly = {
  apparent_temperature?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  dewpoint_2m?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  relativehumidity_2m?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  temperature_2m?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  time?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  uv_index?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  uv_index_clear_sky?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type HourlyUnits = {
  apparent_temperature?: Maybe<Scalars['String']['output']>;
  dewpoint_2m?: Maybe<Scalars['String']['output']>;
  relativehumidity_2m?: Maybe<Scalars['String']['output']>;
  temperature_2m?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  uv_index?: Maybe<Scalars['String']['output']>;
  uv_index_clear_sky?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  myQuery?: Maybe<Root>;
};


export type QueryMyQueryArgs = {
  current?: InputMaybe<Scalars['String']['input']>;
  daily?: InputMaybe<Scalars['String']['input']>;
  hourly?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Root = {
  current?: Maybe<Current>;
  current_units?: Maybe<CurrentUnits>;
  daily?: Maybe<Daily>;
  daily_units?: Maybe<DailyUnits>;
  elevation?: Maybe<Scalars['Int']['output']>;
  generationtime_ms?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Hourly>;
  hourly_units?: Maybe<HourlyUnits>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  timezone_abbreviation?: Maybe<Scalars['String']['output']>;
  utc_offset_seconds?: Maybe<Scalars['Int']['output']>;
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    