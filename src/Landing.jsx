import React, { Component } from 'react';
import { Avatar, Paper, RaisedButton } from 'material-ui';
import { blue200, blue500, blue800, green500, green800, grey800, lightBlue200, lightWhite, orange800, red400, red800, yellow600 } from 'material-ui/styles/colors';

export default class Landing extends Component {
  constructor (props) {
    super(props);
    this.state = {/* empty state */};
  }
  avatarUrl = "/images/avatar.jpg"
  styles = {
    el: {
      height: 'auto',
      width: '100%'
    },
    paper: { // change this to @media sizes to achieve responsiveness
      height: 'auto',
      maxWidth: '48em',
      width: '95%',
      padding: '2em',
      margin: '1% 0',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    title: {
      color: red400,
      margin: '0.4em'
    },
    techContainer: {
      margin: '0.1em 0.5em'
    },
    techIcon: {
      margin: '0.2em 0.25em'
    }
  }
  social = [
    {
      id: 1,
      href: '//www.github.com/Yemolai',
      color: lightWhite,
      bg: grey800,
      icon: "fab fa-github",
      label: "github"
    },
    {
      id: 2,
      href: 'mailto:contato@romulogabriel.com',
      color: grey800,
      bg: lightWhite,
      icon: 'far fa-envelope',
      label: 'email',
      doNotOpenInNewTab: true
    },
    {
      id: 3,
      href: '//twitter.com/yemolai',
      color: grey800,
      bg: lightBlue200,
      icon: 'fab fa-twitter',
      label: 'twitter'
    }
  ]
  techs = [
    { icon: 'html5', color: orange800 },
    { icon: 'js-square', color: yellow600 },
    { icon: 'node-js', color: green800 },
    { icon: 'angular', color: red800 },
    { icon: 'vuejs', color: green500 },
    { icon: 'react', color: blue500 },
    { icon: 'android', color: green500 },
    { icon: 'java', color: grey800 },
    { icon: 'php', color: blue800 },
    { icon: 'laravel', color: red400 },
    { icon: 'windows', color: blue200 },
    { icon: 'linux', color: grey800 },
    { icon: 'google', color: blue500 },
    { icon: 'aws', color: orange800 },
    { icon: 'docker', color: blue500 }
  ]
  render () {
    return (
      <div className="Landing" style={this.styles.el}>
        <Paper className="Landing-container" style={this.styles.paper} zDepth={2}>
          <Avatar src={this.avatarUrl} size={128}/>
          <h2 style={this.styles.title}>Romulo Gabriel Rodrigues</h2>
          <small>Sys Admin / Fullstack JS Dev</small>
          <p>Experienced with these techonologies:</p>
          <div style={this.styles.techContainer}>
            {this.techs.map(tech => 
              <i key={tech.icon}
                className={"fab fa-" + tech.icon + " fa-2x"}
                style={{color: tech.color, ...this.styles.techIcon}}
              />
            )}
          </div>
          <p>This portifolio is a Work-In-Progress and will be fully available before <br/><b>May 15, 2018</b></p>
          <p>You can reach me by</p>
          <div>
            {this.social.map(item =>
              <RaisedButton key={item.id}
                href={item.href}
                target={item.doNotOpenInNewTab ? "_self" : "_blank"}
                label={item.label}
                backgroundColor={item.bg}
                style={{margin: '1em 2em'}}
                labelColor={item.color}
                icon={
                  <i className={item.icon + ' fa-lg'} style={{color: item.color}}/>
                }
              />
            )}
          </div>
        </Paper>
      </div>
    );
  }
}