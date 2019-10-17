import React from 'react';

import Section from './section'

class Article extends React.Component {     
    render(){
        const { titulo, contenido, section, subtitulo, subcontenido } = this.props;
        var sectionDiv;
        if(section){
            sectionDiv = <Section subtitulo={subtitulo} subcontenido={subcontenido} ></Section>
        }
        return (
            <article>
                <h1>{titulo}</h1>
                <p>{contenido}</p>
                {sectionDiv}
            </article>
        );
    }
}


export default Article;
