import Application from 'ticketreservation/app';
import config from 'ticketreservation/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
