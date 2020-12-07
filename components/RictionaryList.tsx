import { Header, Icon, Table } from "semantic-ui-react";

import React from "react";
import { Rictionary } from "../types";

interface RictionaryListProps {
    rictionary: Rictionary;
}

const iterableProps: Array<keyof Rictionary> = [
    "AValue",
    "BValue",
    "CValue",
    "DValue",
    "EValue",
    "FValue",
    "GValue",
    "HValue",
    "IValue",
    "JValue",
    "KValue",
    "LValue",
    "MValue",
    "NValue",
    "OValue",
    "PValue",
    "QValue",
    "RValue",
    "SValue",
    "TValue",
    "UValue",
    "VValue",
    "WValue",
    "XValue",
    "YValue",
    "ZValue"
];

const RictionaryList: React.FC<RictionaryListProps> = ({ rictionary }) => {
    return (
        <Table striped celled>
            <Table.Body>
                {iterableProps.map((prop) => {
                    const value = rictionary[prop] as string;
                    return (
                        <Table.Row key={prop} textAlign="center">
                            <Table.Cell width="1" content={<Header content={(prop as string).substr(0, 1)} color="blue" />} />
                            <Table.Cell width="14" textAlign="left" content={value} />
                            <Table.Cell width="1">
                                <a
                                    href={`https://google.com/search?q=${encodeURIComponent(value)}`}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Icon name="search" color="blue" />
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
};

export default RictionaryList;
