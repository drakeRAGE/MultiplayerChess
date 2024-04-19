import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Chess_game from './Chess';

function Room() {
    // const {roomID} = useParams();
    const roomID = '123';
    let myMeeting = async (element) => {
        const appID = 1707049726;
        const serverSecret = "f78758e51de78b1a9008a72527e461f8";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "User");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
            {
                name: 'Copy link',
                url: 'https://chess-multiplayer-nine.vercel.app/'
            },
            ],
            scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showRoomTimer: true,
        });
    }
  return (
    <div style={{display: 'flex' , gap: '10px'}}>
        <Chess_game />
        <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: '40vw', flex:1}}
        ></div>
    </div>
  )
}

export default Room