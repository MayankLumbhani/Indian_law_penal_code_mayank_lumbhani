import { getAllLaws, getLawwById, createLaw, replaceLaw, updateLaw } from "../services/law.service.js";

export const fetchAllLaws = async (req, res) => {

    const result = await getAllLaws(req.query);

    res.status(200).json({
        success: true,
        message: "Law fetched successfully",
        data: result,
    });

}

export const fetchLawById = async (req, res) => {

    const law = await getLawwById(req.params.id);

    if (!law) {
        return res.status(404).json({
            success: false,
            message: "Law not found",
        });
    }

    res.status(200).json({
        success: true,
        message: "Law fetched successfully",
        data: law,
    });

};

export const addLaw = async (req, res) => {
    const law = await createLaw(req.body);
    res.status(201).json({
        success: true,
        message: "Law created successfully.",
        data: law,
    });
};

export const replaceLawById = async (req, res) => {

    const law = await replaceLaw(req.params.id, req.body);

    if (!law) {
        return res.status(404).json({
            success: false,
            message: "Law not found",
        })
    }

    res.status(200).json({
        success: true,
        message: "Law replaced successfully.",
        data: law,
    })

}

export const updateLawById = async (req, res) => {

    const law = await updateLaw(req.params.id, req.body);

    if (!law) {
        return res.status(404).json({
            success: false,
            message: "Law not found",
        });
    }

    res.status(200).json({
        success: true,
        message: "Law updated successfully",
        data: law,
    });

}