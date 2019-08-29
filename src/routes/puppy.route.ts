import { Request, Response, Router } from 'express'
import puppyService from "../services/puppy.service"
const router = Router();

router.post('/createPuppy', async (req: Request, res: Response) => {
    const createPuppy = await puppyService.createPuppy(req.body);
    if (!createPuppy.status) return res.status(400).send(createPuppy);
    return res.status(201).send(createPuppy);
});

router.get('/getPuppies', async (req: Request, res: Response) => {
    const getPuppies = await puppyService.getPuppies();
    if (!getPuppies.status) return res.status(400).send(getPuppies);
    return res.status(201).send(getPuppies);
});

router.put('/updatePuppy/:id' ,async (req:Request,res:Response) =>
{
    const updatePuppies = await puppyService.updatePuppy(req);
   if(!updatePuppies.status) return res.status(400).send(updatePuppies);
    return res.status(201).send(updatePuppies)
});

router.delete('/deletePuppy/:id' ,async (req:Request,res:Response) =>
{
    const deletePuppy = await puppyService.deletePuppy(req);
    if(!deletePuppy.status) return res.status(400).send(deletePuppy);
    return res.status(201).send(deletePuppy);

});

// router.put('/updatePuppy', async())
export default router;
