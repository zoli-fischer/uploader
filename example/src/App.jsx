import React from 'react';
import AutoState from '@zoli-fischer/auto-state'
import Uploader from '@zoli-fischer/uploader'

class App extends AutoState {
    render() {
        const uploader = new Uploader();
        console.log('render app')
        return <div>
            App
        </div>
    }
}

export default App;
