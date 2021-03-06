import React from 'react'
import { getArticles } from './xhr/Articles'
import '../css/Maincontent.css';

const Articles = (props) => {
    function playMusic() {
        if (document.getElementById("2").className === "article_right")
        {
         document.getElementById("2").src="/app/content/images/cyberdj_240x320.gif";
         document.getElementById("2").className="article_right_gif";
         document.getElementById("music").play();
        }else if (document.getElementById("2").className ==="article_right_gif")
        {
         document.getElementById("2").className="article_right";
         document.getElementById("2").src="/app/content/images/cyberdj_240x320.png";
         document.getElementById("music").pause();
        }

    }
    return (
        <div className="article_container">
            <img id={props.Id} className={props.className} alt="articleimg" src={props.imageUrl} role="presentation" onClick={playMusic}/>
            <p className="articletext">{props.Text}</p>
        </div>
    )
};

export class MainContent extends React.Component{
    constructor () {
    super();
        this.state = {article: []}
    }
    componentDidMount() {
        getArticles().then(results => {
            this.setState({
                article: results.data
            })
        })
    }
    render() {
        return (
            <div>
                <h1 className="maintext">Music is the breath of life!</h1>
                {this.state.article.map(article => {
                    return  <Articles key={article.id} imageUrl={article.imageUrl} Text={article.Text} className={article.class} Id={article.id}/>
                })}
                <audio id="music" src="/app/content/Flatline.mp3" type="audio/mpeg"></audio>
            </div>
        )
    }
}
