export default function ImageShow({ image }){
    return (
    <div>
        <img src={image.urls.thumb} alt={image.alt_description} key={image.id} />
    </div>
    )
}