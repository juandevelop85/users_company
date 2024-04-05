async function FetchPointsOfSalesByCompany(params) {
  const { nit } = params;
  const company = await DB.company.findOne({ where: { nit } }).catch((e) => {
    throw e;
  });

  if (company) {
    const responseData = company.dataValues;
    responseData.points_of_sales = await company.getPointsOfSales();
    return responseData;
  }
  throw Error('Usuario no existe');
}

exports.default = FetchPointsOfSalesByCompany;
