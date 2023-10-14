"use client"
import React from "react";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
interface Props {
    message: string;
    warning?: boolean;
}
const CalloutCard: React.FC<Props> = ({ message, warning }) => {
    return (
        <Callout
            title={message}
            className="mt-4"
            icon={warning ? CheckCircleIcon : ExclamationIcon}
            color={warning ? "rose" : "teal"}
        />
    );
};

export default CalloutCard;
