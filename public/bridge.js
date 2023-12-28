class Bridge{
    constructor(){
       
    }
    windowOpen(){
        window.webkit.messageHandlers.bridge.postMessage(JSON.stringify({
            url:"self",
            callbackID:1
        }))
    }
}

window['Bridge']=new Bridge();