import React, {useState} from 'react'

import InstagramIcon from '@material-ui/icons/Instagram'; // instagram
import FacebookIcon from '@material-ui/icons/Facebook'; // facebook
import GitHubIcon from '@material-ui/icons/GitHub'; // git
import TwitterIcon from '@material-ui/icons/Twitter'; // twitter

import img from '../../assets/imagens/img3.png'

import '../../styles/cadastro.scss'
import '../../styles/button.scss'

function Cadastro() {
  const [user, setUser] = useState('')

  return (
    <div id="page-auth">
      <aside>
        <p>Venha ser um programador de sucesso</p>
        <br />
        <img src={img} alt="Ilustração simbolizando perguntas e respostas" />
        <span>90% do sucesso se baseia em insistir! </span>
        
      </aside>

      <main>
        <div className="container">
          <h1>CADASTRE-SE</h1>
            <div className="separator">Acredite no seu potencial</div>
            <form>
              <input type="text"
              placeholder="Digite seu nome"
              value={user}
              onChange={e => setUser(e.target.value)}
              />

              <input 
              type="email"
              placeholder="Digite seu email"
              />

              <input 
              type="password"
              placeholder="Digite sua senha"
              className="password"/>
              
              <input type="password"
              placeholder="Confirmar senha"
              className="password"/>

              <button  className="button" type="submit">
                Cadastrar
              </button>
            </form>

            <div className="socialNetWork">
              <div className=" icons ">
              <InstagramIcon style={{fill: "green"}}/>
              </div>
              <div className="icons iconsFace" >
              <FacebookIcon/>
              </div>
              <div className="icons iconsGit" >
              <GitHubIcon/>
              </div>
              <div className="icons iconsTwit">
              <TwitterIcon/>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;
