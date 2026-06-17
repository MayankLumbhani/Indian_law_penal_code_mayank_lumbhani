const VALID_ACTS = ["CRPC", "IPC", "CPC", "HMA", "IDA", "IEA", "NIA", "MVA"];

export const validateCreateLaw = (req, res, next) => {
  const { act, section, section_title, section_desc } = req.body;

  if (!act || !section || !section_title || !section_desc) {
    return res.status(400).json({
      success: false,
      message: "act, section, section_title, and section_desc are required",
    });
  }

  if (!VALID_ACTS.includes(act.toUpperCase())) {
    return res.status(400).json({
      success: false,
      message: `act must be one of: ${VALID_ACTS.join(", ")}`,
    });
  }

  next();
};

export const validateUpdateLaw = (req, res, next) => {
  const allowedFields = [
    "act", "chapter", "chapter_title",
    "section", "section_title", "section_desc",
  ];

  const bodyKeys = Object.keys(req.body);

  if (bodyKeys.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Request body cannot be empty",
    });
  }

  const invalidFields = bodyKeys.filter((key) => !allowedFields.includes(key));

  if (invalidFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Invalid fields: ${invalidFields.join(", ")}`,
    });
  }

  if (req.body.act && !VALID_ACTS.includes(req.body.act.toUpperCase())) {
    return res.status(400).json({
      success: false,
      message: `act must be one of: ${VALID_ACTS.join(", ")}`,
    });
  }

  next();
};