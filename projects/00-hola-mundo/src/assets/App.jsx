import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){
    const formatUserName = (userName) => `@${userName}`




    return(
< section className="App">
<TwitterFollowCard
formatUserName={formatUserName}
userName="axelsoda26"
name="AxelSoda"/>

<TwitterFollowCard
formatUserName={formatUserName}
userName="Miguel_AngelMX1"
name="MiguelPech"/>
</section>
    )
}