
import db from "../models"


const createPuppy = async (req: any): Promise<any> => {
    try {
        const data = await db.Puppy.create({
            puppy_age: req.puppy_age,
            puppy_breed: req.puppy_breed,
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

const updatePuppy = async (req: any) => {
    try {
        const updated = await db.Puppy.update(req.body, { where: { puppy_id: req.params['id'] } })
        if (updated == 1)
            return { status: true, message: "sucessfully Updated" }
        else
            return { status: false, message: "Updating record failed" }
    } catch (error) {
        return { status: false, message: error }
    }
}
const deletePuppy = async (req: any) => {
    try {
        const deleted = await db.Puppy.destroy(
            { where: { puppy_id: req.params.id } })
        if (deleted == 1)
            return { status: true, message: "sucessfully deleted" }
        else
            return { status: false, message: "Deleting record failed" }
    } catch (error) {
        return { status: false, message: error }
    }

}
export default { createPuppy, getPuppies, updatePuppy, deletePuppy }

