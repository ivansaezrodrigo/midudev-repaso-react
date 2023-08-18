import { useState } from "react";

export function TwitterFollowCard({userName, name , avatar, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const [text,setText] = useState('Seguir')

    /* var text = isFollowing ? 'Siguiendo' : 'Seguir';
     const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    */
    const handleFollowing = () => {
        if(isFollowing){
            setIsFollowing(false)
            setText('Seguir')
        }else{
            setIsFollowing(true)
            setText('Dejar de seguir')
        }
    }

    const handleMouseEnter = () => {
        if(isFollowing){
            setText('Dejar de seguir')
        }
    }

    const handleMouseLeave = () => {
        if(isFollowing){
            setText('Siguiendo')
        }
    }

    const buttonClassName = () => {
        if(isFollowing){
            return 'tw-followCard-button is-following'
        }else{
            return 'tw-followCard-button'
        }
    }


    
    return( 
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://randomuser.me/api/portraits/women/${avatar}.jpg`} alt="Imagen de perfil" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>
        <aside>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleFollowing} className={buttonClassName()}>{text}</button>
        </aside>
    </article>
    )
}