"use client";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "~/components/CityPicker";

export default function Home() {
 
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col items-center justify-center ">
            <Card className="max-w-4xl  mx-auto bg-white">
                <Text className="text-6xl text-center mb-10 font-bold">
                    Weather Ai
                </Text>
                <Subtitle className="text-center text-xl">
                    Powered by OpenAi, Next.js 13, Tailwind css, tremor and more
                </Subtitle>

                <Divider className="my-10" />

                <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
                    <CityPicker />
                </Card>
            </Card>
        </div>
    );
}
