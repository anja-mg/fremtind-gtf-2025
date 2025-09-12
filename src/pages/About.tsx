import React from 'react';

export const About: React.FC = () => {
    return (
        <section style={{padding: '2rem'}}>
            <h2>Om siden ℹ️</h2>
            <p>Denne siden er laget for at du kan utforske ulike HTML-tags. Test litt ut og skriv en liten beskrivelse om din nettbutikk</p>

            <h3>Hva kan du gjøre her?</h3>
            <!--Punktliste  -->

            <ul>
                <li>Se på bilder av klær og ting</li>
                <li>Sette pris på produkter</li>
                <li>Legge til nye kategorier og produkter</li>
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
