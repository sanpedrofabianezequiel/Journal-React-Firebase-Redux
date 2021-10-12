

export const fileUpload = async (file) =>{
    
    const url = 'https://api.cloudinary.com/v1_1/dgtatdswf/upload'; 

    const formData =  new FormData();// Es el body, para agregar parametros al url  (BODY- FORM DATA)
    formData.append('upload_preset','react-journal')
    formData.append('file',file);


    try {
        
        const resp =  await fetch(url,{
            method:'POST',
            body:formData
        });

        if(resp.ok){
            const cloud =  await resp.json();
            return cloud.secure_url;
        }else{
            //throw await resp.json();
            return null;
        }

    } catch (error) {
        throw error;
    }
    //retornara el URL que nos de claudiner
}


/*
    //Format Response
    {
    "asset_id": "acbdace9eb53256f8a72f138813ff77a",
    "public_id": "psju4mnfsl5xdpckktto",
    "version": 1633483951,
    "version_id": "be0fbfe73bc3aff653fd908297f15354",
    "signature": "44e927ed6d21ee05be612515dc295af723381c4f",
    "width": 1256,
    "height": 620,
    "format": "jpg",
    "resource_type": "image",
    "created_at": "2021-10-06T01:32:31Z",
    "tags": [],
    "bytes": 180916,
    "type": "upload",
    "etag": "6967836ad6547ff20c54f6cbde8ef0d6",
    "placeholder": false,
    "url": "http://res.cloudinary.com/dgtatdswf/image/upload/v1633483951/psju4mnfsl5xdpckktto.jpg",
    "secure_url": "https://res.cloudinary.com/dgtatdswf/image/upload/v1633483951/psju4mnfsl5xdpckktto.jpg",
    "access_mode": "public",
    "original_filename": "astrologia-que-revelan-los-planetas___MvOXu9wKy_1256x620__1"
}

*/