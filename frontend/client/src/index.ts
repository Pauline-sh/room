import {render, html} from 'lit';

import './index.css';
import './rain.css';

render(
  html`
  <div class="outer">
    <div class="background">
      <div class="streak">
        <div class="drop"></div>
        <div class="splat"></div>
      </div>
    </div>
    <div class="inner">
      <p class="header">
        Welcome home.
      </p>
    </div>
  </div>
  `,
  document.body,
);