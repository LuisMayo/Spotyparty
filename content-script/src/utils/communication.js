import Peer from 'react-native-peerjs';
import { play } from '../../../popup/src/actions/player';

export class CommunicationHelper {
    static communication;
    currentPeerObject;
    currentCommunication;
    host(id) {
        this.currentPeerObject = new Peer(id);
        this.currentPeerObject.on('connection', (connection) => {
            this.currentCommunication = connection;
            this.currentCommunication.on('data', (data) =>{
                play(data);
            })
        });
    }

    connect(id) {
        this.currentPeerObject = new Peer();
        this.currentCommunication = this.currentPeerObject.connect(id, { reliable: true, serialization: 'json' });
    }

    sendPlayAction(action) {
        if (this.currentCommunication) {
            this.currentCommunication.send(action);
        }
    }

    static getComunicationHelper() {
        if (!this.communication) {
            this.communication = new CommunicationHelper();
        }
        return this.communication;
    }
}