import db from "../models"
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'sriramstark',
    api_key: '783451173383326',
    api_secret: 'xIeynl8pUs84xQgGltb_2T4oc4A'
});


const createPuppy = async (request: any): Promise<any> => {
    try {

        const file = request.file;
        const req = request.body;



        var image = await cloudinary.uploader.upload(file.path);

        const imagePath = await image.secure_url
        console.log(imagePath)
        var createdPuppy = await db.Puppy.create({
            puppy_age: req.age,
            puppy_breed: req.breed,
            puppy_image: imagePath,
            description: req.description,
        });
        return { status: true, createdPuppy }


        // console.log(data)

    } catch (error) {
        return { status: false, message: error }
    }
};

const getPuppies = async () => {
    try {
        const data = await db.Puppy.findAll({});
        return { status: true, data }
    } catch (error) {
        return { status: false, message: error }
    }
};

const updatePuppy = async (req: any) => {
    try {
        const updated = await db.Puppy.update(req.body, { where: { puppy_id: req.params['id'] } });
        if (updated == 1)
            return { status: true, message: "sucessfully Updated" };
        else
            return { status: true, message: "no change in record to update" }
    } catch (error) {
        return { status: false, message: error }
    }
};
const deletePuppy = async (req: any) => {
    try {
        const deleted = await db.Puppy.destroy(
            { where: { puppy_id: req.params.id } });
        if (deleted == 1)
            return { status: true, message: "sucessfully deleted" };
        else
            return { status: false, message: "Deleting record failed" }
    } catch (error) {
        return { status: false, message: error }
    }

};
export default { createPuppy, getPuppies, updatePuppy, deletePuppy }

