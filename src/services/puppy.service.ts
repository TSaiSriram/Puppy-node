import db from "../models"
import { update_Puppy, del_Puppy } from "../interfaces/puppy.interface";


const createPuppy = async (request: any): Promise<any> => {
    try {
        const createdPuppy = await db.Puppy.create(request);
        return { status: true, createdPuppy }

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
            return { status: false, message: "no change in record to update" }
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

