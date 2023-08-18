import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <section className='App'>
            <h3 className='title'>A quién seguir</h3>
            <TwitterFollowCard name="Astrid Hansen" userName="astridhansen" avatar="68" />
            <TwitterFollowCard initialIsFollowing name="Jennie Nickols" userName="jennienickols" avatar="76"  />
            <TwitterFollowCard name="Catalina Diaz" userName="catalinadiaz" avatar="49" />
            <TwitterFollowCard name="Lily Lynch" userName="lilylyinch" avatar="12" />
        </section>
    )
} 