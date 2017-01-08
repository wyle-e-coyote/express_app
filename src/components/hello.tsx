import * as React from "react";

interface IHelloProps {
    message: string;
}

export default function Hello(props: IHelloProps) {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
}
