import React, { FunctionComponent } from 'react'
import { Header } from '../../components/Header';

type HeaderProps = {
    children: any,
    page: string,
}

export const Layout = ( {children, page} : HeaderProps) => {
    return (
        <main>
            <Header page={page}/>
            {children}
        </main>
    )
}
