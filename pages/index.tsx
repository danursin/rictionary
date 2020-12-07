import { Dropdown, DropdownItemProps, Tab } from "semantic-ui-react";
import { GetStaticProps, GetStaticPropsResult } from "next";
import React, { useState } from "react";

import Layout from "../components/Layout";
import { Rictionary } from "../types";
import RictionaryList from "../components/RictionaryList";
import WordSpelling from "../components/WordSpelling";
import { getKnex } from "../db";

interface HomeProps {
    rictionaries: Rictionary[];
}

const Home: React.FC<HomeProps> = ({ rictionaries }) => {
    const [rictionaryOptions] = useState<DropdownItemProps[]>(
        rictionaries.map((d) => ({
            text: d.RictionaryName,
            value: d.RictionaryId,
            key: d.RictionaryId
        }))
    );
    const [selectedRictionary, setSelectedRictionary] = useState<Rictionary>(rictionaries[0]);

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
                value={selectedRictionary.RictionaryId}
                onChange={(e, { value }) => {
                    const rictionary = rictionaries.find((r) => r.RictionaryId === (value as number));
                    if (!rictionary) {
                        throw new Error(`No rictionary found with ID ${value}`);
                    }
                    setSelectedRictionary(rictionary);
                }}
            />
            <Tab panes={panes} style={{ marginTop: "1rem" }} renderActiveOnly={false} />
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async (context): Promise<GetStaticPropsResult<HomeProps>> => {
    const knex = getKnex();
    const rictionaries = await knex<Rictionary>("RictionaryNg").orderBy("RictionaryName");
    rictionaries.forEach((r) => {
        r.CreatedDate = (r.CreatedDate as Date).toISOString();
        r.LastModifiedDate = (r.LastModifiedDate as Date).toISOString();
    });
    return {
        props: {
            rictionaries
        }
    };
};
