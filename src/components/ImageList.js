import ImageShow from './ImageShow';


function ImageList({image}){
    const renderImages = image.map((image)=>{
        return <ImageShow key={image.id} image={image}/>
    })
    return (
    <div>{renderImages}</div>
    );
}
export default ImageList;