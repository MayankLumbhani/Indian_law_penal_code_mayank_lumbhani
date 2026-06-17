import { getAllLaws, getLawwById, createLaw, replaceLaw, updateLaw, deleteLaw, checkLawExists, getRecentLaws, getArchivedLaws, archiveLaw, restoreLaw, getLawHistory, getLawSummary, getRandomLaw, getTrendingLaws } from "../services/law.service.js";

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

export const deleteLawById = async (req, res) => {
  const law = await deleteLaw(req.params.id);

  if (!law) {
    return res.status(404).json({
      success: false,
      message: "Law not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Law deleted successfully",
    data: law,
  });
};

export const lawExists = async (req, res) => {
  const exists = await checkLawExists(req.params.id);

  res.status(200).json({
    success: true,
    message: exists ? "Law exists" : "Law does not exist",
    data: { exists },
  });
};

export const fetchRecentLaws = async (req, res) => {
  const result = await getRecentLaws(req.query);

  res.status(200).json({
    success: true,
    message: "Recent laws fetched successfully",
    data: result,
  });
};

export const fetchArchivedLaws = async (req, res) => {
  const laws = await getArchivedLaws();

  res.status(200).json({
    success: true,
    message: "Archived laws fetched successfully",
    data: laws,
  });
};

export const archiveLawById = async (req, res) => {
  const law = await archiveLaw(req.params.id);

  if (!law) {
    return res.status(404).json({
      success: false,
      message: "Law not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Law archived successfully",
    data: law,
  });
};

export const restoreLawById = async (req, res) => {
  const law = await restoreLaw(req.params.id);

  if (!law) {
    return res.status(404).json({
      success: false,
      message: "Law not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Law restored successfully",
    data: law,
  });
};

export const getLawHistoryById = async (req, res) => {
  const law = await getLawHistory(req.params.id);

  if (!law) {
    return res.status(404).json({
      success: false,
      message: "Law not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Law history fetched successfully",
    data: law,
  });
};

export const getLawSummaryById = async (req, res) => {
  const law = await getLawSummary(req.params.id);

  if (!law) {
    return res.status(404).json({
      success: false,
      message: "Law not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Law summary fetched successfully",
    data: law,
  });
};

export const fetchRandomLaw = async (req, res) => {
  const law = await getRandomLaw();

  res.status(200).json({
    success: true,
    message: "Random law fetched successfully",
    data: law,
  });
};

export const fetchTrendingLaws = async (req, res) => {
  const laws = await getTrendingLaws();

  res.status(200).json({
    success: true,
    message: "Trending laws fetched successfully",
    data: laws,
  });
};

