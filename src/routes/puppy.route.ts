import { Request, Response, Router } from 'express'
import puppyService from "../services/puppy.service"
const router = Router();

router.post('/createPuppy', async (req: Request, res: Response) => {
    const createPuppy = await puppyService.createPuppy(req.body)
    if (!createPuppy.status) return res.status(400).send(createPuppy);
    return res.status(201).send(createPuppy);
})

router.get('/getPuppies', async (req: Request, res: Response) => {
    const getPuppies = await puppyService.getPuppies()
    if (!getPuppies.status) return res.status(400).send(getPuppies);
    return res.status(201).send(getPuppies);
})

// router.put('/updatePuppy', async())
export default router;