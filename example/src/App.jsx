import React from 'react';
import './App.less';
import AutoState from '@zoli-fischer/auto-state';
import Uploader from '@zoli-fischer/uploader';

class App extends AutoState {
    constructor(props) {
        super(props);
        this.state = {
            showDropZone: false,
        };
    }

    componentDidMount() {
        this.uploader = new Uploader();

        this.uploader.on('drop', (e, files) => {
            console.log(files);
            this.setState({ showDropZone: false });
        });
        this.uploader.on('dragover', () => {
            this.setState({ showDropZone: true });
        });
        this.uploader.on('dragleave', () => {
            this.setState({ showDropZone: false });
        });
    }

    render() {
        return (
            <div className="uploadHolder">
                <div className="filesHolder">
                    <button className="uploadButton" type="button" onClick={() => this.uploader.select()}>Click here to select files</button>
                    <p><small>or drag and drop files and/or folders here</small></p>
                </div>
                <div className={'dropZone ' + (this.state.showDropZone ? 'show' : '')}>
                    <div>
                        <p>Drop files and/or folders here</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
