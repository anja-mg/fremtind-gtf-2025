import React from 'react';

export const About: React.FC = () => {
    return (
        <section style={{padding: '2rem'}}>
            <h2>Om siden ℹ️</h2>
            <p>Denne siden er laget for å hjelpe deg å lære nye ord og trene på å beskrive ting du ser. Utforsk kategoriene til venstre og prøv oppgavene.</p>

            <h3>Hva kan du gjøre her?</h3>
            <ul>
                <li>Se på bilder av klær og ting</li>
                <li>Beskrive farge, form og bruk</li>
                <li>Sammenligne to produkter</li>
                <li>Finne likheter og forskjeller</li>
            </ul>

            <h3>Eksempler på formatering</h3>
            <p><b>Fet tekst</b> – bruk når noe er viktig.</p>
            <p><i>Kursiv tekst</i> – kan brukes for å fremheve et ord.</p>
            <p><code>&lt;code&gt;</code> – viser hvordan noe ser ut i kode.</p>
            <p>Liste med punkter finner du over. Du kan også lage nummererte lister.</p>

            <h1>Overskrift 1</h1>
            <h2>Overskrift 2</h2>
            <h3>Overskrift 3</h3>

            <p>Farger: https://htmlcolorcodes.com/</p>


        </section>
    );
};
