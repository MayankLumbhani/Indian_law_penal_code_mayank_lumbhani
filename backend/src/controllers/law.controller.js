import { getAllLaws } from "../services/law.service.js";

export const fetchAllLaws = async (req, res) => {

    const result = await getAllLaws(req.query);

    res.status(200).json({
        success : true,
        message : "Law fetched successfully",
        data : result,
    });

} 