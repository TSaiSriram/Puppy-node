
import db from "../models"


const createPuppy = async (req: any): Promise<any> => {
    try {
        const data = await db.Puppy.create({
            puppy_age: req.age,
            puppy_breed: req.breed,
            description: req.description
        });
        // console.log(data)
        return { status: true, data }
    } catch (error) {
        return { status: false, message: error }
    }
}

const getPuppies = async () => {
    try {
        const data = await db.Puppy.findAll({});
        return { status: true, data }
    } catch (error) {
        return { status: false, message: error }
    }
}

export default { createPuppy, getPuppies }