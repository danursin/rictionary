import { Dropdown, DropdownItemProps, Header, Tab } from "semantic-ui-react";
import { GetStaticProps, GetStaticPropsResult } from "next";
import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { RictionaryItem } from "../types";
import RictionaryList from "../components/RictionaryList";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import WordSpelling from "../components/WordSpelling";
import dynamodb from "../db";

interface HomeProps {
    rictionaryIds: string[];
}

const Home: React.FC<HomeProps> = ({ rictionaryIds }) => {
    const [rictionaryOptions] = useState<DropdownItemProps[]>(
        rictionaryIds.map((id) => ({
            text: id,
            value: id,
            key: id
        }))
    );
    const [selectedRictionaryId, setSelectedRictionaryId] = useState<string>(rictionaryIds[0]);
    const [selectedRictionary, setSelectedRictionary] = useState<RictionaryItem>();

    useEffect(() => {
        setSelectedRictionary(undefined);
        (async () => {
            const res = await fetch("/api/get-by-id?" + new URLSearchParams({ id: selectedRictionaryId }));
            setSelectedRictionary(await res.json());
        })();
    }, [selectedRictionaryId]);

    const panes = [
        {
            menuItem: "Spell",
            pane: (
                <Tab.Pane key="spell">
                    <WordSpelling rictionary={selectedRictionary} />
                </Tab.Pane>
            )
        },
        {
            menuItem: "List",
            pane: (
                <Tab.Pane key="list">
                    <RictionaryList rictionary={selectedRictionary} />
                </Tab.Pane>
            )
        }
    ];

    return (
        <Layout>
            <Dropdown
                selection
                search
                fluid
                placeholder="Select a Rictionary"
                openOnFocus={false}
                selectOnBlur={false}
                options={rictionaryOptions}
                value={selectedRictionaryId}
                onChange={(e, { value }) => setSelectedRictionaryId(value as string)}
            />

            {selectedRictionary && (
                <Header
                    content={selectedRictionary.name}
                    subheader={`Created by ${selectedRictionary.created_by} on ${new Date(
                        selectedRictionary.created
                    ).toLocaleDateString()}`}
                />
            )}

            <Tab panes={panes} style={{ marginTop: "1rem" }} renderActiveOnly={false} />
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<GetStaticPropsResult<HomeProps>> => {
    const { Items } = await dynamodb.send(
        new ScanCommand({
            TableName: "rictionary",
            IndexName: "GSI1"
        })
    );
    const rictionaryIds = (Items?.map((i) => i.GSI1PK as string) ?? []).sort();
    return {
        props: {
            rictionaryIds
        }
    };
};
