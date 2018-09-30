import React from 'react';
import AutoState from '@zoli-fischer/auto-state'
import Uploader from '@zoli-fischer/uploader'

class App extends AutoState {
    constructor(props) {
        super(props);
        this.uploader = new Uploader();
    }

    render() {
        console.log('render app')
        return <div>
            Uploader 
            <button onClick={(() => {this.uploader.select()}).bind(this)}>Select file</button>
        </div>
    }
}

export default App;
