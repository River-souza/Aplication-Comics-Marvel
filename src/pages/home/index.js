/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 23/04/2021.
    Change on : 04/05/2021.
    Author     : Michael Dydean
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearHeroes, findHeroes, findComics } from './actions';
import SearchChar from './components/search';
import ComicThumbnail from '../../components/comicThumbnail';
import Button from '../../components/button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      autoCompletTimeout: null,
      itensSelected: [],
      count: 0,
    };
    this.onButtonClick = this.onButtonClick.bind(this);

  }

  autoCompleteOnChange = (value) => {
    this.setState({ search: value });
    if (value.length > 1) {
      if (this.state.autoCompletTimeout) {
        clearTimeout(this.state.autoCompletTimeout);
      }
      const timeout = setTimeout(() => {
        this.setState({ autoCompletTimeout: null });
        this.props.findHeroes(value);
      }, 300);
      this.setState({ autoCompletTimeout: timeout });
    }
  }

  onButtonClick() {//Método utilizado caso haja a necessidade da função de buscar um comics de acordo com seu id
    this.props.findComics('1011334');//procura comics pelo id
  }

  onSelectItem = (value, itemSelect) => {
    this.setState({ search: value });
    this.props.findComics(String(itemSelect));
  }

  render() {
    return (
      <main>
        <div className="container">
          <SearchChar
            char={this.props.chars}
            search={this.state.search}
            autoCompleteOnChange={this.autoCompleteOnChange}
            onSelectItem={this.onSelectItem}
          />
          <div className="content">
            {this.props.comics ?
            <section>
              <section className="wrapper-comics">
                {
        /* this.props.comics.forEach(async function (element, index, array) {
        
        if(index < 10) {
           console.log("this.state.count");
           }
        }),*/
                this.props.comics.map(item => 
                     <React.Fragment key={item.id}>
                      <ComicThumbnail
                        id={item.id.toString()}
                        url={item.urls[0].url}
                        title={item.title}
                        thumbnail={item.thumbnail.path + '.' + item.thumbnail.extension}
                        description={item.description}
                        writer={item.creators.items[0].name === 'undefined' ?'':item.creators.items[0].name.toString()}
                        penciller={item.creators.items[0].name.toString()}
                        published={item.dates[0].date}
                      >
                      </ComicThumbnail>
                    </React.Fragment>
                  )
                }
                //}
                </section>
                <Button url={"/"} onClick={null} text={"Voltar"}></Button>
                <Button url={""} onClick={(e) => {
                 
                
                  /*
                 codigo para verificar os itens selecionados
                 para abrir o modal com o mapa
                 */
                 }} text={"Enviar-me"}></Button>
                 </section>
                   :
                 <section className="wrapper-call">
                   <h1>VEJA OS GIBIS DA MARVEL AQUI!</h1>
                   <h2>Digite o nome do super-herói ou título no campo de pesquisa acima. </h2>
                 </section>
               }
          </div>
        </div>
      </main >
    );
  }
}

const mapStateToProps = state => ({
  characters: state.home.characters,
  comics: state.home.comics,
  chars: state.home.chars
});

export default connect(mapStateToProps, {
  clearHeroes,
  findHeroes,
  findComics
})(Home);
