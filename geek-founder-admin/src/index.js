import angular from 'angular';

import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import routesConfig from './routes';

import 'angular-animate';
import './index.scss';

angular
  .module('app', ['ui.router', 'ngAnimate'])
  .config(routesConfig)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection);
