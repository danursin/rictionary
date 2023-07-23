import { Header, Icon, Placeholder, Table } from "semantic-ui-react";

import React from "react";
import { RictionaryItem } from "../types";

interface RictionaryListProps {
    rictionary?: RictionaryItem | undefined;
}

const iterableProps: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

const RictionaryList: React.FC<RictionaryListProps> = ({ rictionary }) => {
    if (!rictionary) {
        return (
            <Placeholder>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
            </Placeholder>
        );
    }
    return (
        <Table striped celled unstackable>
            <Table.Body>
                {iterableProps.map((prop) => {
                    const value = rictionary[prop] as string;
                    return (
                        <Table.Row key={prop} textAlign="center">
                            <Table.Cell width="1" content={<Header content={prop.toUpperCase()} color="blue" />} />
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
