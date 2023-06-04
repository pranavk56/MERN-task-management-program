export const validate = (group, name, value) => {
  if (group === "task") {
    switch (name) {
      case "title": {
        if (!value) return "This field is required";
        return null;
      }
      default: return null;
    }
  }
  else {
    return null;
  }
}

const validateManyFields = (group, list) => {
  const errors = [];
  for (const field in list) {
    const err = validate(group, field, list[field]);
    if (err) errors.push({ field, err });
  }
  return errors;
}
export default validateManyFields;