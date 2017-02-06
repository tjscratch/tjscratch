import React from 'react';
import '../css/Music.css';
import Header from './Header'
// import 'bootstrap/dist/css/bootstrap.css';

let MusicContent = function () {
        return (
            <div className="music_container">
                <h1 className="slogan">Choose your favorite style!</h1>
                <ul className="nav nav-tabs" id="NavTab">
                    <li role="presentation" className="active"><a href="#Aggrotech" role="tab" data-toggle="tab">Aggrotech</a></li>
                    <li role="presentation" className="active"><a href="#Aggrotech" role="tab" data-toggle="tab">Aggrotech</a></li>
                    <li role="presentation"><a href="#IndustrialDance" role="tab" data-toggle="tab">Industrial Dance</a></li>
                    <li><a href="#IndustrialMetal" data-toggle="tab">Industrial Metal</a></li>
                    <li><a href="#CyberDance" data-toggle="tab">Cyber Dance</a></li>
                    <li><a href="#RapCore" data-toggle="tab">Rap Core</a></li>
                </ul>
                <div className="tab-content">
                    <div id="Aggrotech" className="tab-pane fade in active">
                        <div className="col-xs-12 container-fluid">
                            <h1 id="groupname">Sleetgrout</h1>
                            <img src="https://img1.goodfon.ru/wallpaper/big/9/36/sleetgrout-try-to-die-ebm.jpg" role="presentation"/>
                            <p>История ростовского индастриал-проекта Sleetgrout берёт начало в 2003 году, когда вокалист и основатель проекта Фридрих решил активизировать свой творческий потенциал.
                                Regenengel - так назывался в то время его one-man-проект, был создан для воплощения в жизнь музыкальных идей, лежащих в плоскости industrial/ambient, и первая концертная программа Фридриха была
                                представлена на одной из ростовских готических вечеринок именно под этим названием.
                                Группа Sleetgrout образовалась в конце 2005 года. Скопировано с Dark-World.ru. Еще до выхода дебютной пластинки группа успела перемикшировать западных исполнителей (Mechanical Moth,
                                Sinmasters и Wynardtage), а также поучаствовать в нескольких зарубежных компиляциях. Ландшафтные композиции нашли своих ценителей, положительные отзывы заставили продолжить развитие в этом направлении.
                                Однако после нескольких выступлений, уже при участии вошедшего в состав группы гитариста, было принято решение о создании сайд-проекта. Участники этого нового музыкального образования самостоятельно
                                издали сингл "Hiding Behind Thedoors", на который кроме оригинальной версии песни вошли два ремикса от ростовского же IDM-проекта Insanity.
                                С течением времени к проекту присоединилась клавишница Марго, а название Regenengel было изменено на Sleetgrout.
                                Стиль группы окончательно установился и теперь может быть обозначен как dark industrial/synth goth с мощным электронным и гитарным звучанием.
                                В 2006 году группа выступила на разогреве ростовского шоу Das Ich и приняла участие в международном фестивале Radio Inferno V. За время своего существования группа успела поучаствовать
                                в нескольких международных фестивалях - Radio Inferno, Возрождение, Synthetic Snow. Дважды проект саппортировал Das Ich, выступал на одной сцене с Terminal Choice, Red Flag, Assemblage 23,
                                Clan of Xymox. Проект сотрудничает и обменивается ремиксами с такими группами, как Alien Vampires, Eden Synthetic Corps, Infra Black, Stidio-X, Wynardtage, [Nurzery Rhymes],
                                The Synthetic Dream Foundation, Mechanical Moth и другими. В 2009 году группа стала хэдлайнером фестиваля Dark Entries.
                                В 2010 году команда выпустила дебютный альбом, озаглавленный "Principle Of Dark Electro", после которого началась работа над вторым полноформатником, "We Had A Carnival".
                                Выход релиза состоялся в 2012 году.</p>
                            <div id="music">
                                <p>Sleetgrout - Try to Die</p>
                                <audio src="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0B7v9qcIiVdl5VUdJN1ZNbzBSeFE" controls type="audio/mpeg"></audio>
                                <p>Sleetgrout - We Had A Carnival</p>
                                <audio src="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0B7v9qcIiVdl5dkFsWjFQanE3NlU" controls type="audio/mpeg"></audio>
                                <p>Sleetgrout - sleetgrout-w-e </p>
                                <audio src="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0B7v9qcIiVdl5eHlaRU1NSnF5MGc" controls type="audio/mpeg"></audio>
                                <p>Sleetgrout - Feel Me Twice</p>
                                <audio src="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0B7v9qcIiVdl5aDlKRm9PQmY0Q3c" controls type="audio/mpeg"></audio>
                            </div>
                        </div>
                    </div>
                    <div id="IndustrialDance" className="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="IndustrialMetal" className="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="CyberDance" className="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        );
    };
let Music = React.createClass({
    render: function() {
        return (
            <div>
               <Header/>
                <MusicContent/>
            </div>
        )
    }
});

export default Music;