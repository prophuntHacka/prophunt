/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    WA.chat.sendChatMessage("Message from the Scripting API", "MrRobot");
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

for (let i = 1; i <= 5; i++) {
    WA.ui.actionBar.addButton({
        id: 'transform-btn-' + i,
        type: 'action',
        imageSrc: '<Your image url>',
        toolTip: 'Transform',
        callback: (event) => {
            console.log('Button ' + i + ' clicked', event);
            // Quand un utilisateur clique sur le bouton 'Transform', nous le supprimons.
            WA.ui.actionBar.removeButton('transform-btn-' + i);
        }
    });
}