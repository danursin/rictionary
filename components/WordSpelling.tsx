import { Input, List } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import { Rictionary } from "../types";

interface WordSpellingProps {
    rictionary: Rictionary;
}
const WordSpelling: React.FC<WordSpellingProps> = ({ rictionary }) => {
    const [word, setWord] = useState<string>("");
    const [spelling, setSpelling] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const letters = word.split("");
        const newSpelling: JSX.Element[] = [];
        for (const letter of letters) {
            if (/[a-zA-Z]/.test(letter)) {
                const upperCase = letter.toUpperCase();
                const value = rictionary[`${upperCase}Value`] as string;
                newSpelling.push(
                    <>
                        <b>{upperCase}</b> as in {value}
                    </>
                );
            } else if (/[0-9]/.test(letter)) {
                newSpelling.push(
                    <>
                        The number <b>{letter}</b>
                    </>
                );
            } else if (letter === " ") {
                newSpelling.push(<></>);
            } else {
                newSpelling.push(
                    <>
                        The <b>{letter}</b> symbol
                    </>
                );
            }
        }
        setSpelling(newSpelling);
    }, [rictionary, word]);

    return (
        <>
            <Input
                icon="keyboard"
                iconPosition="left"
                fluid
                placeholder="Start typing to begin"
                value={word}
                onChange={(e, { value }) => setWord(value)}
            />
            <List divided size="massive">
                {spelling.map((phrase, index) => {
                    return <List.Item key={index} content={phrase} />;
                })}
            </List>
        </>
    );
};

export default WordSpelling;
