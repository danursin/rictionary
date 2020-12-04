import { Grid, Menu } from "semantic-ui-react";

import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
    title?: string;
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title = "Rictionary", children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Menu fluid tabular>
                <Menu.Item content="Rictionary" position="left" />
            </Menu>
            <Grid padded="horizontally">
                <Grid.Column>{children}</Grid.Column>
            </Grid>
        </>
    );
};

export default Layout;
