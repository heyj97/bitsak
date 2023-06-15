import db from '../config/dbConfig.js';


class galleryModel {

    // 사진 업로드, DB에 사진 정보 저장
    static async uploadPhoto({username, description, location,take_date, post_date, file_path, password})
    {
        const insertPhoto = 
            'INSERT INTO gallery \
            (username, description, location, take_date, post_date, file_path, password) \
            VALUES (?, ?, ?, ?, ?, ?, ?)';
        await db.query(insertPhoto,
            [                    
                username,
                description,
                location,
                take_date,
                post_date,
                file_path,
                password
            ]
        );
    }
  
  
    // 사진 수정
    static async updatePhoto({galleryId, description, location, take_date, file_path}) 
    {
        const updatePhoto = 'UPDATE gallery SET  description = ?, location = ?, take_date = ?, file_path = ? WHERE gallery_id = ?';
        await db.query(updatePhoto, 
            [
                description,
                location,
                take_date,
                file_path,
                galleryId
            ]);
    }

    //galleryId 가 DB에 존재하는지 확인
    static async getGalleryId({galleryId}) {
        const selectGalleryId = 'SELECT gallery_id from gallery where gallery_id = ?';
        const [rows] = await db.query(selectGalleryId, [galleryId]);

        return rows[0];
    }

    //비밀번호 가져오기
    static async getPassword({galleryId}) {
        const getPassword = 'select password from gallery where gallery_id = ?';
        const [rows] = await db.query(getPassword, [galleryId]);

        return rows[0];
    }


    //update 전 file_path 미리 추출
    static async getFilePath({galleryId}){
        const selectFilePath = 'SELECT file_path FROM gallery WHERE gallery_id = ?'
        const [rows] = await db.query(selectFilePath, [galleryId]);

        return rows[0];
    }

    // 사진 삭제
    static async deletePhoto({galleryId}) {
        const deletePhoto = 'DELETE FROM gallery WHERE gallery_id = ?';
        await db.query(deletePhoto, [galleryId]);
    }


    //location이 DB에 존재하는지 확인
    static async getLocation({location}) {
        const selectLocation = 'SELECT count(*) as count from gallery where location = ?';
        const [rows] = await db.query(selectLocation, location);

        return rows[0];
    }

    // 특정 location(동)의 사진 데이터 불러오기
    static async getPhotosByLocation({location}) {
        const selectPhotos = 
            'SELECT file_path, description, location, take_date, post_date \
            FROM gallery WHERE location = ?';
        const [rows] = await db.query(selectPhotos, [location]);

        return rows;
    }


    // location(동)의 사진 데이터 개수(count) 가져오기
    static async getCountByLocation() {

        const selectPhotoCounts = 'SELECT location, COUNT(*) AS count FROM gallery GROUP BY location ';
        const [rows] = await db.query(selectPhotoCounts);

        return rows;
    }


  static async getPhotosById({galleryId}) {
    const selectPhotos = 'SELECT file_path FROM gallery WHERE gallery_id = ?';
    const [rows] = await db.query(selectPhotos, [galleryId]);
    return rows[0];
   
  }

}


export { galleryModel };
