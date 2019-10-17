import React from 'react';

const Section = function ({subtitulo, subcontenido}) {
    return (
        <section>
            <h3>{subtitulo}</h3>
            <p>{subcontenido}</p>
        </section>
    );
}


export default Section;
