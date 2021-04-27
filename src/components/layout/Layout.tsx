import React from 'react'
import { Header } from '../../components/Header';

type Props = {
    children: any,
    page: string,
}

export const Layout = ( {children, page} : Props) => {
    return (
        <main>
            <Header page={page}/>
            {children}
        </main>
    )
}
