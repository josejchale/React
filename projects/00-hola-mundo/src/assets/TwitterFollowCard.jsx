export function TwitterFollowCard({userName, name, isFollowing }){
    const imageSrc="https://unavatar.io/${userName}"
    return(
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
                className="tw-followCard-avatar"
                alt="el avatar del usuario"
                src={imageSrc}/>
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>

    <aside>
        <button className="tw-followCard-button">
        Seguir
        </button>
    </aside>
</article>
    )
}