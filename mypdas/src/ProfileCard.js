function ProfileCard(/*props*/ {title, handle, image, description} ){

   // const {title, handle} = props;
   //console.log(title, handle);
    return (
        <div clasName="card">
            <div clasName="card-image">
                <figure clasName="image is-1by1">
                <img src={image} alt="hi"/>
                </figure>
            </div>
            <div clasName="card-content">
                <div clasName="media-content">
                    <p clasName="title is-4"> {title}</p>
                    <p clasName="subtitle is-6">{handle}</p>
                </div> 
                <div clasName="content">{description}</div>       
            </div>
        </div>
    );
}

export default ProfileCard;