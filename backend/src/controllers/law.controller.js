import { getAllLaws, getLawwById } from "../services/law.service.js";

export const fetchAllLaws = async (req, res) => {

    const result = await getAllLaws(req.query);

    res.status(200).json({
        success : true,
        message : "Law fetched successfully",
        data : result,
    });

} 

export const fetchLawById = async (req, res) => {

    const law = await getLawwById(req.params.id);

    if(!law) {
        return res.status(404).json({
            success : false,
            message : "Law not found",
        });
    }

    res.status(200).json({
        success : true,
        message : "Law fetched successfully",
        data : law,
    });

};