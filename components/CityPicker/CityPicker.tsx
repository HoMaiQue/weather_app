"use client";
import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { CityOption, Option } from "~/types/city.types";
import { GlobeIcon } from "@heroicons/react/solid";
const options = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
}));
export default function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<Option>(null);
    const [selectedCity, setSelectedCity] = useState<CityOption>(null);

    const router = useRouter();

    const handleSelectedCountry = (option: Option) => {
        setSelectedCountry(option);
        setSelectedCity(null);
    };

    const handleSelectedCity = (option: CityOption) => {
        setSelectedCity(option);
        router.push(`location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`);
    }
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <div className="flex items-center text-white/80 space-x-2">
                    <GlobeIcon className="h-5 w-5 text-white" />
                    <label htmlFor="country">Country</label>
                </div>
                <Select
                    className="text-black"
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    options={options}
                ></Select>
            </div>
            {selectedCountry && (
                <div className="space-y-2">
                    <div className="flex items-center text-white/80 space-x-2">
                        <GlobeIcon className="h-5 w-5 text-white" />
                        <label htmlFor="country">Country</label>
                    </div>
                    <Select
                        className="text-black"
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(city=>({
                            value:{
                                latitude: city.latitude!,
                                longitude: city.longitude!,
                                countryCode: city.countryCode,
                                name: city.name,
                                stateCode: city.stateCode
                            },
                            label:city.name 
                        }))}
                    ></Select>
                </div>
            )}
        </div>
    );
}
