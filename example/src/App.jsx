import React from 'react';
import './App.css'
import AutoState from '@zoli-fischer/auto-state'
import Uploader from '@zoli-fischer/uploader'

class App extends AutoState {
    constructor(props) {
        super(props);
        this.dropZone = React.createRef();
    }

    componentDidMount() {
        this.uploader = new Uploader({
            dropZone: this.dropZone.current,
        });
    }

    render() {
        console.log('render app')
        return <div>
            Uploader 
            <button onClick={(() => {this.uploader.select()}).bind(this)}>Select file</button>
            <div ref={this.dropZone} className="dropZone"></div>
        </div>
    }
}

export default App;
