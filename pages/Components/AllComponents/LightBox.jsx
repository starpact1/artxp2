import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function LightBox({lightBoxClose1, pIndex, images = []}) {

    const [photoIndex, setPhotoIndex] = useState(pIndex)

    return (
        <div>

            <Lightbox

                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onImageLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                }}
                onCloseRequest={() => { lightBoxClose1(); }}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    // this.setState({
                    //     photoIndex: (photoIndex + images.length - 1) % images.length,
                    // })
                }
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)
                    // this.setState({
                    //     photoIndex: (photoIndex + 1) % images.length,
                    // })
                }


            />

        </div>
    )
}

export default LightBox