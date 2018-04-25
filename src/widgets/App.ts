import WidgetBase from '@dojo/widget-core/WidgetBase';
import { v, dom } from '@dojo/widget-core/d';

import * as css from './styles/app.m.css';

export class App extends WidgetBase {

  private _show: HTMLElement;
  private _onclick: () => void;

  constructor() {
    super();

    const a = document.createElement('div');
    a.innerText = 'A';

    const b = document.createElement('div');
    b.innerText = 'B';

    this._show = a;

    this._onclick = () => {
      this._show = this._show === a ? b : a;
      this.invalidate();
    }
  }

  protected render() {
    console.info('render', this._show.innerText);
    
    return v('div', { 
      classes: css.root,
      onclick: this._onclick
    }, [
      `should be showing ${this._show.innerText} (click to toggle)`,
      dom({ node: this._show })
    ]);
  }
}

export default App;
