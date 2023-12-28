import { App } from './app.tsx'
import React from 'preact/compat'
import { Bridge } from './bridge/Bridge.ts'
import './variables.css';

//@ts-ignore
const bridge = new Bridge();
React.render(<App themeType='light'/>,document.getElementById('app')!)
