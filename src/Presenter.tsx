import Signal, { SignalHandler } from "badmfck-signal";
import { ScreenStart } from "./screens/ScreenStart";
import { ReactNode, memo, useEffect, useMemo, useState } from "preact/compat";
import { styled} from "@mui/material";
import { useSpring,animated } from "@react-spring/web";
import { AccountHomeScreen } from "./screens/AccountHomeScreen";
import { DepositScreen } from "./screens/DepositScreen";
import { NewCardOrderPopup } from "./screens/popups/NewCardOrderPopup";
import { RequestMoneyPopup } from "./screens/popups/RequestMoneyPopup";
import { CurrencySelectPopup } from "./screens/popups/CurrencySelectPopup";
import { AuthLoginScreen } from "./screens/AuthLoginScreen";

export type IAnimationDirection="left"|"right"|"none"|"up"|"down"

export interface IScreen{
    id:string,
    element:ReactNode
}


export interface IScreenShowRequest{
    screen:IScreen,
    animationDirection:IAnimationDirection
    params?:{[key:string]:any}
}

export interface IPresenter{
    id:string,
    signal:Signal<IScreenShowRequest>,
    startScreen?:IScreenShowRequest
}

// Screen Map
export class Screens{
    static START:IScreen={id:"startScreen",element:<ScreenStart />}
    static ACCOUNT_HOME:IScreen={id:"accountHome",element:<AccountHomeScreen/>}
    static DEPOSIT_SCREEN:IScreen={id:"depositScreen",element:<DepositScreen/>}
    static NEW_CARD_ORDER_SCREEN:IScreen={id:"newCardOrderScreen",element:<NewCardOrderPopup/>}
    static REQUEST_MONEY_SCREEN:IScreen={id:"requestScreen",element:<RequestMoneyPopup/>}
    static CURRENCY_SELECT_POPUP:IScreen={id:"currencySelectPopup",element:<CurrencySelectPopup/>}
    static AUTH_LOGIN:IScreen={id:"authLogin",element:<AuthLoginScreen/>}
}


// MEDIATORS
export const S_PRESENT_SCREEN_ON_MAIN=new Signal<IScreenShowRequest>();
export const S_PRESENT_SCREEN_ON_AUTH=new Signal<IScreenShowRequest>();


// PRESENTERS
export class Presenters{
    static MAIN:IPresenter={
        id:"main",
        signal:S_PRESENT_SCREEN_ON_MAIN,
        startScreen:{
            screen:Screens.ACCOUNT_HOME,
            animationDirection:"none"
        }
    }
    static AUTH:IPresenter={
        id:"auth",
        signal:S_PRESENT_SCREEN_ON_AUTH,
        startScreen:undefined
    }
}

// Manager
class ScreenManager{
    
    private presenter:IPresenter|null
    private screens:IScreenShowRequest[]=[];
    private sh:SignalHandler|null;
    private onScreensChanged:(screens:IScreenShowRequest[])=>void
    
    constructor(presenter:IPresenter,onScreensChanged:(screens:IScreenShowRequest[])=>void){
        this.presenter=presenter;
        this.sh = new SignalHandler();
        this.onScreensChanged=onScreensChanged
        this.sh.add(this.presenter.signal,req=>{
            this.screens.push(req);
            this.onScreensChanged([...this.screens])
        })
        if(this.presenter.startScreen)
            this.presenter.signal.invoke(this.presenter.startScreen)
        this.onComplete = this.onComplete.bind(this)
    }

    // Экран закончил свой показ - убираем предыдущий экран из списка экранов
    //@ts-ignore
    onComplete(req:IScreenShowRequest){
        if(this.screens.length<2)
            return;

        this.screens.shift(); // PROBLEM! (убрали экран)
        this.onScreensChanged([...this.screens]) // отправили новый список экранов в Presenter
    }

    dispose(){
        if(this.sh)
            this.sh.clear();
        this.sh=null;
        this.presenter=null;
        this.screens=[]        
    }
    
}


// Создаем хук на использование ScreenManager
const usePresenter=(presenter:IPresenter):{
  screens:IScreenShowRequest[]|null,
  onComplete:((req:IScreenShowRequest)=>void)|null}=>{
    
    const [screens,setScreens]=useState<IScreenShowRequest[]|null>(null)
    const [onCompleteState,setOnComplete] = useState<{cb:((req:IScreenShowRequest)=>void)}|null>(null);

    useEffect(()=>{
        const sm = new ScreenManager(presenter, (screens)=> setScreens(screens))
        setOnComplete({cb:sm.onComplete});
        return ()=>{ sm.dispose();}
    },[presenter])

    return { screens: screens, onComplete: onCompleteState?.cb ?? null }
}


export const Presenter = memo(({ presenter, onAnimationComplete }: { presenter: IPresenter, onAnimationComplete?:(direction:IAnimationDirection)=>void }) => {
	const { screens, onComplete } = usePresenter(presenter)

	if (!screens) return null

    // use callback - нельзя, запомниает 
	const onCompleteCallback = /*useCallback(*/(val: IScreenShowRequest) => {
        
        if(onAnimationComplete)
            onAnimationComplete(val.animationDirection)

		if (onComplete)
            onComplete(val)
        
	}/*, [])*/

	const memoizedScreens = useMemo(() => screens, [screens])

	return (
		<>
			{memoizedScreens.map((val) => (
				<ScreenBox
					key={val.screen.id}
                    direction={val.animationDirection}
					onComplete={()=>onCompleteCallback(val)}
				>
					{val.screen.element}
				</ScreenBox>
			))}
		</>
	)
})

const ScreenAnimatedDiv = styled(animated.div)`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
    width: 100%;
`

const ScreenBox = memo(({children,onComplete,direction}:{children:any,onComplete?:()=>void,direction?:IAnimationDirection})=>{


    if(direction==="none"){
        return children
    }

    let from:any = {x:"100vw"},to:any={x:"0vw"}
    
    if(direction==="up"){
        from = {y:"100vh"}
        to = {y:"0vh"}
    }
    if(direction==="left"){
        from = {x:"-100vh"}
        to = {x:"0vh"}
    }
    if(direction==="down"){
        from = {y:"0vh"}
        to = {y:"100vh"}
    }
    
    
    const springs = useSpring({
        from: from,
        to: to,
        config:{ tension: 350, friction: 30 },
        onRest:()=>{if(onComplete)onComplete()}
    })

    return <ScreenAnimatedDiv style={springs}>{children}</ScreenAnimatedDiv>
})