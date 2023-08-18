import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        name: 'Astrid Hansen',
        userName: 'astridhansen',
        avatar: '68',
        initialIsFollowing: true
    },
    {
        name: 'Jennie Nickols',
        userName: 'jennienickols',
        avatar: '76',
        initialIsFollowing: false
    },
    {
        name: 'Catalina Diaz',
        userName: 'catalinadiaz',
        avatar: '49',
        initialIsFollowing: false
    },
    {
        name: 'Lily Lynch',
        userName: 'lilylyinch',
        avatar: '12',
        initialIsFollowing: false
    }
]


export function App() {
    return (
        <section className='App'>
            <h3 className='title'>A quién seguir</h3>
            {
                users.map( ({name, userName, avatar, initialIsFollowing}) => (
                    <TwitterFollowCard key={userName} name={name} userName={userName} avatar={avatar} initialIsFollowing={initialIsFollowing} />
                ))
            }
        </section>
    )
} 