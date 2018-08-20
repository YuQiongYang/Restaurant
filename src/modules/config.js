import {Component} from 'react'

import store from '../store'

import http from './httpclient.js'

Component.prototype.store = store
Component.prototype.http = http