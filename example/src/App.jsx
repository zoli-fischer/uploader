import React from 'react';
import './App.less';
import AutoState from '@zoli-fischer/auto-state';
import Uploader from '@zoli-fischer/uploader';

class App extends AutoState {
    constructor(props) {
        super(props);
        this.state = {
            isDrop: true,
            showDropZone: false,
        };
    }

    componentDidMount() {
        this.uploader = new Uploader();

        if (!this.uploader.support.isDragAndDrop()) {
            this.setState({ isDrop: false });
        } else {
            this.uploader.on('drop', () => {
                this.setState({ showDropZone: false });
            })
            .on('dragover', () => {
                this.setState({ showDropZone: true });
            })
            .on('dragleave', () => {
                this.setState({ showDropZone: false });
            });
        }
    }

    render() {
        return (
            <div className="uploadHolder">
                <div className="filesHolder">
                    <div className="uploadButtons">
                        <button className="uploadButton" type="button" onClick={() => this.uploader.select()}>Click here to select files</button>
                        <button className="uploadButton" type="button" onClick={() => this.uploader.selectFolder()}>Click here to select folder</button>
                    </div>
                    <p style={{ display: this.state.isDrop ? 'block' : 'none' }}><small>or drag and drop files and/or folders here</small></p>
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
