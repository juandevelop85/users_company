const getModelAttributes = (Model) => {
  const attributes = [];
  for (let key in Model.rawAttributes) {
    attributes.push(key);
  }
  return attributes;
};

const getParamsModelAttributes = (input, modelAttributes) => {
  const nuevoObjeto = Object.fromEntries(
    Object.entries(input).filter(([key]) =>
      getModelAttributes(modelAttributes).includes(key)
    )
  );

  return nuevoObjeto;
};

module.exports = {
  getModelAttributes,
  getParamsModelAttributes,
};
