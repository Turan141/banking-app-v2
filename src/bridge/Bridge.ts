import Signal, { Req } from "badmfck-signal"

interface IWKWebKit{
    messageHandlers:{
        bridge:{
            postMessage:(message:string)=>void
        }
    }
}

type IActionType = "appReady"|"windowOpen"

interface ISendParams{
    action:IActionType,
    params?:{[key:string]:any},
    passthrought?:{[key:string]:any}
}

// MEDIATORS
export const REQ_BRIDGE_WINDOW_OPEN=new Req<string,void>()
export const S_BRIDGE_APP_READY=new Signal<void>();


export class Bridge{
    webkit:IWKWebKit
    constructor(){
        (window as any)['bridge']=this;
        this.webkit=(window as any).webkit
        this.init();
    }

    private init(){
        REQ_BRIDGE_WINDOW_OPEN.listener=async ()=>this.windowOpen();
        S_BRIDGE_APP_READY.subscribe(()=>this.appReady())
        console.log("Bridge initialized")
    }

    private appReady(){
        console.log("TRYING TO CALL APPREADY")
        console.log(">sfa: ",(window as any)['_GLOBAL_SAFE_AREA']);
        console.log(">gid: ",(window as any)['_GLOBAL_ID']);
        this.send({action:"appReady"})
    }

    private windowOpen():void{
        this.send({
            action:"windowOpen",
            params:{
                id:"popup"
            },
            passthrought:{
                testParam:"hello"
            }
        })
    }

    private send(params:ISendParams){
        try{
            this.webkit.messageHandlers.bridge.postMessage(JSON.stringify(params))
        }catch(e){
            console.warn("Can't execute window postMessage!")
        }
    }
}