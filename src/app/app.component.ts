import { Component } from '@angular/core';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PokeAPI-project-Angular';
  id = 'tsparticles';

  particlesUrl = 'http://foo.bar/particles.json';

  particlesOptions = {
    background: {
      color: {
        value: '',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 100,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 5,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#335981',
      },
      links: {
        color: '#ffffffff',
        distance: 250,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
        char: {
          value: {
            0: 'P',
            1: 'O',
            2: 'K',
            3: 'E',
            4: 'M',
            5: 'O',
            6: 'N',
          },
          font: 'Verdana',
          weight: '400',
          fill: 'true'
        },
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
  }
}
