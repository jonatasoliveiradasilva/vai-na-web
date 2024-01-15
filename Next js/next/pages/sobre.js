import Head from "next/head";
import Link from "next/link";

function Sobre() {
    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <h1>Eu sou o Sobre</h1>
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
        </>
    );
}

export default Sobre;
