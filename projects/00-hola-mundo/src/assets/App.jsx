import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){
    const formatUserName = (userName) => `@${userName}`

    return(
< section className="App">
<TwitterFollowCard
formatUserName={formatUserName}
isFollowing={true}
userName="midudev"
name="Miguel Ángel Durán"/>

<TwitterFollowCard
formatUserName={formatUserName}
isFollowing={true} 
userName="pheralb"
name="Pablo Hernandez"/>

<TwitterFollowCard
formatUserName={formatUserName}
isFollowing={true}
userName="axelsoda26"
name="AxelSoda"/>

<TwitterFollowCard
formatUserName={formatUserName}
userName="Miguel_AngelMX1"
name="MiguelPech"/>
</section>
    )
}