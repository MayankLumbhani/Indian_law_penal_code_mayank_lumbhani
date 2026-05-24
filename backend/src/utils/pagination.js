const getPagination = (page, limit) => {

  const pageNum = Number(page) || 1;
  const limitNum = Number(limit) || 10;
  const skip = (pageNum -1) * limitNum;

  return { pageNum, limitNum, skip };
  
};

export default getPagination;