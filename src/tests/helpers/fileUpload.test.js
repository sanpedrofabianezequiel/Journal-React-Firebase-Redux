import cloudinary from 'cloudinary';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';


cloudinary.config({ 
    cloud_name: 'dgtatdswf', 
    api_key: '899544685697964', 
    api_secret: 'UOBlvcjrhkjv3Hn_u1RbEt3B4l8',
    secure: true
  });

describe('Pruebas en fileUpload ', () => {
    
    /*test('debe de cargar un archivo y retornar el URL',async (done) => { //Problemas con timeout

        const resp = await  fetch('https://okdiario.com/img/2016/12/02/el-origen-de-los-nombres-de-los-planetas-del-sistema-solar.jpg');
        const blob = await resp.blob();
        
        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        //Borrar image por ID
        const segments = url.split('/');
        const imageId = segments[sements.length - 1].replace('.jpg','');
        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            done();
        });
    })*/
    test('debe de retornar un error', async () => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    })
    
})
