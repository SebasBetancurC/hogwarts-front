import React, { useState } from 'react';
import { WizardsWitches } from '../components/WizardsWitches';
import { NavBarSearchWitches } from '../components/NavBarSearchWitches';

export const WizardsWitchesPage = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <NavBarSearchWitches setSearch={setSearch} />
            <WizardsWitches search={search} />
        </>
    );
};

